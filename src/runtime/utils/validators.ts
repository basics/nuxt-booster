import type { CrossOrigin } from '../../module';

export function crossorigin(value: CrossOrigin) {
  return ['anonymous', 'use-credentials', undefined].includes(value as string);
}
