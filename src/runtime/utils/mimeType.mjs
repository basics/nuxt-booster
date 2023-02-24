const mimeTypes = {
  webp: 'image/webp',
  jpg: 'image/jpeg',
  png: 'image/png'
};

export function getMimeTypeByFormat (format) {
  return mimeTypes[String(format)];
}
