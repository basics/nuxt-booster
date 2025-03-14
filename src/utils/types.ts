import type { FontOption, FontOptionVariance } from '../types';

/* eslint-disable security/detect-object-injection */
interface TextProperties {
  [key: string]: (string | number)[];
  family: string[];
  weight: (string | number)[];
  style: string[];
}

function getFromVariances<T>(
  fonts: FontOption[],
  key: keyof FontOptionVariance
): T[] {
  const uniqueStyles = new Set<T>();
  const fontCount = fonts.length;

  for (let i = 0; i < fontCount; i++) {
    const values = fonts[i].variances;
    for (let j = 0, valueCount = values.length; j < valueCount; j++) {
      uniqueStyles.add(values[j][key] as T);
    }
  }

  return Array.from(uniqueStyles).filter(Boolean);
}

function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array)).filter(Boolean);
}

function capitalize(text: string): string {
  return text ? `${text.charAt(0).toUpperCase()}${text.slice(1)}` : text;
}

function generateAliases(textProperties: TextProperties): string {
  const props = Object.keys(textProperties);
  const len = props.length;
  const output: string[] = new Array(len);
  // Loop through each text property
  for (let i = 0; i < len; i++) {
    const prop = props[i];
    const propValues: (string | number)[] = textProperties[props[i]];
    const valueCount = propValues.length;
    const line = `export type Font${capitalize(prop)} = `;
    // Output generic type "string", if there are no values to parse
    if (!valueCount) output[i] = `${line}'string';`;
    else {
      // Merge all values into a union (|) type value.
      const values: string[] = new Array(valueCount);
      for (let j = 0; j < valueCount; j++) {
        if (/\d+/.test(String(propValues[j]))) {
          values[j] = String(propValues[j]);
        } else {
          values[j] = `'${propValues[j]}'`;
        }
      }
      output[i] = `${line}${values.join(' | ')};`;
    }
  }
  return output.join('\n');
}

export function getTypesContent(fonts: FontOption[]): string {
  return generateAliases({
    family: unique(fonts.map(font => font.family)),
    weight: getFromVariances(fonts, 'weight'),
    style: getFromVariances(fonts, 'style')
  });
}
