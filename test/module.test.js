import { describe, it, expect } from 'vitest';
import { getCrossorigin } from '#speedkit/utils';

describe('🧐 inspect module utils', () => {
  it('getCrossorigin', () => {
    expect(getCrossorigin(undefined)).toBe('anonymous');
    expect(getCrossorigin(false)).toBe(false);
    expect(getCrossorigin(true)).toBe('anonymous');
    expect(getCrossorigin(false, 'anonymous')).toBe(false);
    expect(getCrossorigin('anonymous', false)).toBe('anonymous');
    expect(getCrossorigin(true)).toBe('anonymous');
    expect(getCrossorigin(true, 'anonymous')).toBe('anonymous');
    expect(getCrossorigin(undefined, 'use-credentials')).toBe('use-credentials');
    expect(getCrossorigin('use-credentials')).toBe('use-credentials');
    expect(getCrossorigin('', 'use-credentials')).toBe('');
    expect(getCrossorigin('')).toBe('');
    expect(getCrossorigin('', 'anonymous')).toBe('');
  });
});
