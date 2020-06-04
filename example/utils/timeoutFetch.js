// https://davidwalsh.name/fetch-timeout

export default function (url, options = {}, timeout = 5000) {
  let didTimeout = false

  return new Promise(function (resolve, reject) {
    const t = setTimeout(() => {
      didTimeout = true
      reject(new Error('Request timed out'))
    }, timeout)

    fetch(url, options)
      .then((response) => {
        clearTimeout(t)
        if (!didTimeout) {
          resolve(response)
        }
      })
      .catch((err) => {
        // console.error('fetch failed! ', err)
        if (didTimeout) { return }
        reject(err)
      })
  })
    .catch((err) => {
      throw err
    })
}
