import { getCrossorigin } from 'nuxt-speedkit/module/utils';
import { describe, it, expect } from 'vitest';

const getNuxtRenderOptions = (crossorigin = undefined) => {
  return {
    render: {
      crossorigin
    }
  };
};

describe('🧐 inspect module utils', () => {
  it('getCrossorigin', () => {
    expect(getCrossorigin(getNuxtRenderOptions(), undefined)).toBe('anonymous');
    expect(getCrossorigin(getNuxtRenderOptions(), false)).toBe(false);
    expect(getCrossorigin(getNuxtRenderOptions(), true)).toBe('anonymous');
    expect(getCrossorigin(getNuxtRenderOptions('anonymous'), true)).toBe('anonymous');
    expect(getCrossorigin(getNuxtRenderOptions('use-credentials'), undefined)).toBe('use-credentials');
    expect(getCrossorigin(getNuxtRenderOptions(), 'use-credentials')).toBe('use-credentials');
    expect(getCrossorigin(getNuxtRenderOptions(), '')).toBe('');
    expect(getCrossorigin(getNuxtRenderOptions('anonymous'), '')).toBe('');
  });
});
