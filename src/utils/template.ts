import type FontConfig from '../classes/FontConfig';
import type { FontOption } from '../module';

let identifier = 0;
const identifiersBySrc = new Map();
function getIdentifier(src: string) {
  const id = identifiersBySrc.get(src) || identifier++;
  identifiersBySrc.set(src, id);
  return identifiersBySrc.get(src) || identifier++;
}

function prepareFontsConfiguartion(fontConfig: FontConfig) {
  const fonts = fontConfig.toJSON();

  const imports = new Map() as Map<string, string>;
  const preparedFonts = fonts.map(font => {
    font.variances = font.variances.map(variance => {
      const hash = `Font${getIdentifier(variance.src)}`;
      imports.set(hash, variance.src);

      return { ...variance, src: `HASH(${hash})` };
    });
    return font;
  });

  return { fonts: preparedFonts, imports };
}

function renderImports(imports: Map<string, string>) {
  return Array.from(imports.entries()).map(([hash, src]) => {
    return `import ${hash} from '${src}';`;
  });
}

function renderFonts(fonts: FontOption[]) {
  let json = JSON.stringify(fonts, null, 2);
  json = json.replace(/"HASH\(([^)]+)\)"/g, '$1');
  return `export default ${json};`;
}

export function getFontConfigTemplate(fontConfig: FontConfig) {
  const { imports, fonts } = prepareFontsConfiguartion(fontConfig);

  return `${renderImports(imports).join('\n')}

${renderFonts(fonts)}`;
}

export function getFontConfigCSSTemplate(fontConfig: FontConfig) {
  function getImports(css: string) {
    return Array.from(css.matchAll(/url\(([^\\(]+)\)/g));
  }

  function renderImports(imports: RegExpMatchArray[]) {
    return imports.map(
      ([, src]) => `import Font${getIdentifier(src)} from ${src};`
    );
  }

  const css = fontConfig.toCSS();

  const imports = getImports(css);

  const finalCSS = imports.reduce((result, [key, src]) => {
    return result.replace(key, `url('\${Font${getIdentifier(src)}}')`);
  }, css);

  return (
    renderImports(imports).join('\n') + '\n\nexport default `' + finalCSS + '`'
  );
}
