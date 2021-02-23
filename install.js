
const path = require('path');
// eslint-disable-next-line security/detect-child-process
const { exec } = require('child_process');
const fsExtra = require('fs-extra');

const isPackage = path.basename(path.join(process.cwd(), '../')) === 'node_modules';

if (isPackage) {
  // remove unused files
  const ignoredFiles = [
    'index.js',
    'package.json',
    'README.md',
    'LICENSE',
    'node_modules',
    'lib'
  ];
  fsExtra.readdirSync('.').forEach(file => !ignoredFiles.includes(file) && fsExtra.removeSync(file));

  // // exclude lib dir
  const libDir = path.resolve(__dirname, './lib');
  /* eslint-disable-next-line security/detect-non-literal-fs-filename -- Safe as no value holds user input */
  const libFiles = fsExtra.readdirSync(libDir).map(file => path.resolve(libDir, file));
  /* eslint-disable-next-line security/detect-non-literal-fs-filename -- Safe as no value holds user input */
  libFiles.forEach(file => fsExtra.existsSync(file) && fsExtra.copySync(file, path.join(process.cwd(), path.relative(libDir, file))));

  // remove lib dir
  fsExtra.remove(libDir);
} else {
  const commands = [
    'node node_modules/.bin/husky install'
  ];
  exec(commands.join('&&'), (error, stdout, stderr) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return;
    }
    // eslint-disable-next-line no-console
    console.log(stdout);
  });
}
jmj;
