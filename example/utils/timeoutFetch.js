// https://davidwalsh.name/fetch-timeout

export default function (url, options = {}, timeout = 5000) {
  let didTimeout = false

  return new Promise(function (resolve, reject) {
    const t = setTimeout(function () {
      didTimeout = true
      reject(new Error('Request timed out'))
    }, timeout)

    fetch(url, options)
      .then(function (response) {
        clearTimeout(t)
        if (!didTimeout) {
          resolve(response)
        }
      })
      .catch(function (err) {
        console.error('fetch failed! ', err)
        if (didTimeout) { return }
        reject(err)
      })
  })
    .catch(function (err) {
      console.error('promise error! ', err)
    })
}
