import { promises as fsPromises } from 'fs';

async function getFileInfo(name: string, file: string) {
  const { lookup } = await import('mime-types');
  return {
    name,
    file: await fsPromises.readFile(file),
    mimeType: lookup(file)
  };
}

export async function getTemplate(files: string[][]) {
  return (
    await Promise.all(files.map(([name, file]) => getFileInfo(name, file)))
  )
    .map(
      ({ name, file, mimeType }) =>
        `export const ${name} = new Blob([new Uint8Array([${[...file].join(
          ', '
        )}])], {type: '${mimeType}'});`
    )
    .join('\n');
}
