export default (context, inject) => {
  inject('getImageSizeFromUrl', getImageSizeFromUrl)
}

function getImageSizeFromUrl (url) {
  console.log('getImageSizeFromUrl', 'client')
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve({ width: img.width, height: img.height })
    img.src = url
  })
}
