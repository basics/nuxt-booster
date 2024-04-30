import { promises as fsPromises } from 'fs';

async function getFileInfo(name, file) {
  const { lookup } = await import('mime-types');
  return {
    name,
    file: await fsPromises.readFile(file),
    mimeType: lookup(file)
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
