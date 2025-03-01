const mimeTypes = {
  webp: 'image/webp',
  jpg: 'image/jpeg',
  png: 'image/png'
};

export function getMimeTypeByFormat(format: 'webp' | 'jpg' | 'png') {
  return mimeTypes[String(format) as keyof typeof mimeTypes];
}
