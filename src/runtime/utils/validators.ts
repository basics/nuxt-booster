import type { CrossOrigin } from '../../types';

export function crossorigin(value: CrossOrigin) {
  return ['anonymous', 'use-credentials', undefined].includes(value as string);
}
