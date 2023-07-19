import hashSum from 'hash-sum';

function prepareFontsConfiguartion (fontConfig) {
  const fonts = fontConfig.toJSON();
  const imports = new Map();
  const preparedFonts = fonts.map((font) => {
    font.variances = font.variances.map((variance) => {
      const hash = `Font${hashSum(variance.src)}`;
      imports.set(hash, variance.src);

      return { ...variance, src: `HASH(${hash})` };
    });
    return font;
  });

  return { fonts: preparedFonts, imports };
}

function renderImports (imports) {
  return Array.from(imports.entries()).map(([hash, src]) => {
    return `import ${hash} from '${src}';`;
  });
}

function renderFonts (fonts) {
  let json = JSON.stringify(fonts, null, 2);
  json = json.replace(/"HASH\(([^)]+)\)"/g, '$1');
  return `export default ${json};`;
}

export function getFontConfigTemplate (fontConfig) {
  const { imports, fonts } = prepareFontsConfiguartion(fontConfig);

  return `${renderImports(imports).join('\n')}

${renderFonts(fonts)}`;
}

export function getFontConfigCSSTemplate (fontConfig) {
  function getImports (css) {
    return Array.from(css.matchAll(/url\(([^\\(]+)\)/g));
  }

  function renderImports (imports) {
    return imports.map(
      ([key, src]) => `import Font${hashSum(src)} from ${src};`
    );
  }

  const css = fontConfig.toCSS();

  const imports = getImports(css);

  const finalCSS = imports.reduce((result, [key, src]) => {
    return result.replace(key, `url('\${Font${hashSum(src)}}')`);
  }, css);

  return (
    renderImports(imports).join('\n') + '\n\nexport default `' + finalCSS + '`'
  );
}
