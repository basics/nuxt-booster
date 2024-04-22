import { promises as fsPromises } from 'fs';
import mime from 'mime-types';

async function getFileInfo(name, file) {
  return {
    name,
    file: await fsPromises.readFile(file),
    mimeType: mime.lookup(file)
  };
}

export async function getTemplate(files) {
  return (await Promise.all(files.map(file => getFileInfo(...file))))
    .map(
      ({ name, file, mimeType }) =>
        `export const ${name} = new Blob([new Uint8Array([${[...file].join(
          ', '
        )}])], {type: '${mimeType}'});`
    )
    .join('\n');
}
