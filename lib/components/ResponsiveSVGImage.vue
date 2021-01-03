<template>
  <div>
    <img :src="src">
  </div>
</template>

<script>
import { btoa } from 'nuxt-speedkit/utils/base64'

export default {
  data () {
    const imageA = `data:image/svg+xml;base64,${btoa(unescape(require('@/assets/img/critical-2400.jpg?sqip').replace('data:image/svg+xml,', '')))}`
    const imageB = `data:image/svg+xml;base64,${btoa(unescape(require('@/assets/img/lazy-2400.jpg?sqip').replace('data:image/svg+xml,', '')))}`
    return {
      // src: `${header}%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cimage id='b' xlink:href='data:image/svg+xml;base64,JTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0MDAgMjQwMCclM0UlM0NwYXRoIGZpbGw9JyUyM2FiOGE1YycgZD0nTTAgMGgyNDAwdjI0MDBIMHonLyUzRSUzQ2cgZmlsbC1vcGFjaXR5PScuNSclM0UlM0NwYXRoIGZpbGw9JyUyM2ZmZmZmMScgZD0nTTIyODIuOCAxMjIzLjRMMTU0LjcgMjI1NC43bDIxMTguNyAyOTAuNnonLyUzRSUzQ3BhdGggZmlsbD0nJTIzNDIxMzAwJyBkPSdNLTExNy4yIDE2MDcuOGwtMjguMS0xMjY1LjZMMjAzOSAxMDcuOHonLyUzRSUzQ3BhdGggZmlsbD0nJTIzM2IxNTAwJyBkPSdNMTY0NS4zLTE0NS4zTDczNiAxNTMyLjhsNTYyLjUgODQuNHonLyUzRSUzQ3BhdGggZmlsbD0nJTIzZmJlMGE2JyBkPSdNNDA3LjggMjU0NS4zTDE3My40IDEzMjYuNmwyMDgxLjMgOTg0LjN6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyMzNkMWIwMCcgZD0nTTE2MDcuOCA4NTcuOEwxNzExIDg5LjEgNTc2LjYgMTY0eicvJTNFJTNDcGF0aCBmaWxsPSclMjNiZTk1NWUnIGQ9J000LjctMTQ1LjNsMTUzNy41IDE0MTUuNkw0ODIuOCA5NDIuMnonLyUzRSUzQ3BhdGggZmlsbD0nJTIzZWVjNTg4JyBkPSdNMjU0NS4zIDkzMi44TDIzNjcuMi0xNDUuM2wtNzUwIDMwOS40eicvJTNFJTNDcGF0aCBmaWxsPSclMjM2ZTM4MDMnIGQ9J000MDcuOCAxMTU3LjhsMTUwMCAxMzEuMy05MjguMSA0NTB6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyMzIzMDAwMCcgZD0nTS0zMi44IDE3ODZWNzE3LjFsMzkzLjctMTEyLjV6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2JlN2QyYicgZD0nTTU0OC40IDI1MDcuOGwtNjkzLjctMTY4LjdMMjY3LjIgODQ4LjR6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2JmYzViYScgZD0nTTE0MjAuMyA3ODIuOGw3MzEuMyAzMzcuNS03NzguMiAxOC44eicvJTNFJTNDcGF0aCBmaWxsPSclMjNmMGVjYzcnIGQ9J004NzYuNiAyNTQ1LjNMMjIzNS45IDEwMzZsLTE5Ni44IDEzMjJ6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyMzdkNGEwOCcgZD0nTTI0MTQgMjI3My40bDEzMS4zLTEyNTYuMi0zMDAgMjE1LjZ6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2M1ODMyNScgZD0nTTE3ODYtMTQ1LjNINjFsMTIwOS4zIDQ1MHonLyUzRSUzQ3BhdGggZmlsbD0nJTIzYWM1YjE1JyBkPSdNMTMxNy4yIDE3MzlsLTE0MC42LTU4MS4yIDYwOS4zIDM5My44eicvJTNFJTNDcGF0aCBmaWxsPSclMjMyZjFiMDcnIGQ9J005MzIuOCA1MTFsNjUuNiA0MTIuNCA3OTctOTg0LjN6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyMzI2MGIwMCcgZD0nTTE0OTUuMyAxNTc5LjdsMTc4LjEtNDIxLjktMTMxLjItNTYuMnonLyUzRSUzQ3BhdGggZmlsbD0nJTIzMDYwMDAwJyBkPSdNOTk4LjQgMTAwNy44bC0xOC43IDM4NC40IDI4MS4yIDE4Ny41eicvJTNFJTNDcGF0aCBmaWxsPSclMjNlMmJhN2UnIGQ9J00yNjcuMiAyMjA3LjhsLTExMi41LTc2OC43TDEyMTQgMjU0NS4zeicvJTNFJTNDcGF0aCBmaWxsPSclMjNkMWFmOGQnIGQ9J002MjMuNCA1MzlMODkuMSA2MWw0NDAuNi0yMDYuM3onLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRQ==' /%3E%3C/svg%3E`
      // src: createTemplate([require('@/assets/img/critical-2400.jpg?sqip'), require('@/assets/img/lazy-2400.jpg?sqip')])
      src: svgToImageURL(createTemplate(imageA, imageB))
    }
  }
}

function createTemplate (imageA, imageB) {
  return encodeURIComponent(`
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%">
      <style type="text/css">
        @media (min-width: 800px) {
          [id="b"] {
            display: none;
          }
        }
      </style>
      <image id="a" xlink:href="${imageA}" />
      <image id="b" xlink:href="${imageB}" />
    </svg>
  `)
}

function svgToImageURL (svgString) {
  if (!process.server) {
    return 'data:image/svg+xml,' + svgString.replace('\t\n', '').trim()
  } else {
    return ''
  }
}
</script>

<style lang="postcss" scoped>
img {
  display: block;
  width: 100%;
}
</style>
