import { describe, expect, it } from 'vitest';
import { getTypesContent } from '../../../src/utils/types';

describe('getTypesContent', () => {
  it('generates generic types on empty font config', () => {
    expect(
      getTypesContent([
        {
          family: '',
          fallback: [],
          variances: [
            {
              style: '',
              weight: 0,
              sources: []
            }
          ]
        }
      ])
    ).toBe(
      "export type FontFamily = 'string';\nexport type FontWeight = 'string';\nexport type FontStyle = 'string';"
    );
  });

  it('generates proper types on valid font config', () => {
    expect(
      getTypesContent([
        {
          family: 'Roboto',
          fallback: [],
          variances: [
            {
              style: 'italic',
              weight: 400,
              sources: []
            },
            {
              style: 'normal',
              weight: 'bold',
              sources: []
            }
          ]
        }
      ])
    ).toBe(
      "export type FontFamily = 'Roboto';\nexport type FontWeight = '400' | 'bold';\nexport type FontStyle = 'italic' | 'normal';"
    );
  });
});
