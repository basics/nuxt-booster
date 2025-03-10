import type FontConfig from '../classes/FontConfig';

export function getTypesContent(fontConfig: FontConfig) {
  const family = unique(fontConfig.fonts.map(font => font.family));
  const weight = unique(
    fontConfig.fonts
      .map(font => font.variances.map(variance => variance.weight))
      .flat()
  );
  const style = unique(
    fontConfig.fonts
      .map(font => font.variances.map(variance => variance.style))
      .flat()
  );

  return generateAliases({ family, weight, style });
}

function unique<T>(array: T[]) {
  return Array.from(new Set(array));
}

function generateAliases({
  family,
  weight,
  style
}: {
  family: string[];
  weight: (string | number)[];
  style: string[];
}) {
  return `
    export type FontFamily = ${family.map(family => `'${family}'`).join(' | ') || 'string'};
    export type FontWeight = ${weight.map(v => (typeof v === 'number' ? Number(v) : `"${v}"`)).join(' | ') || 'string'};
    export type FontStyle = ${style.map(style => `'${style}'`).join(' | ') || 'string'};
  `;
}

// import ts from 'typescript';
// function generateAliases({
//   family,
//   weight,
//   style
// }: {
//   family: string[];
//   weight: (string | number)[];
//   style: string[];
// }) {
//   const sourceFile = ts.createSourceFile(
//     'index.d.ts',
//     '',
//     ts.ScriptTarget.ESNext,
//     false,
//     ts.ScriptKind.TS
//   );

//   const updatedSourceFile = ts.factory.updateSourceFile(sourceFile, [
//     createAliasDeclaration('FontFamily', family),
//     createAliasDeclaration('FontWeigth', weight),
//     createAliasDeclaration('FontStyle', style)
//   ]);

//   const printer = ts.createPrinter();
//   return printer.printFile(updatedSourceFile);
// }

// function createAliasDeclaration(name: string, values: (string | number)[]) {
//   if (values.length === 0) {
//     values = ['any'];
//   }
//   return ts.factory.createTypeAliasDeclaration(
//     [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
//     name,
//     undefined,
//     ts.factory.createUnionTypeNode(
//       values.map(value => {
//         let literal;
//         if (typeof value === 'number') {
//           literal = ts.factory.createNumericLiteral(String(value));
//         } else {
//           literal = ts.factory.createStringLiteral(String(value));
//         }
//         return ts.factory.createLiteralTypeNode(literal);
//       })
//     )
//   );
// }
