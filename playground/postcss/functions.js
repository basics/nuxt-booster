export function rem(value, base = 16) {
  value = resolveValue(value);
  return `${parseInt(value) / base}rem`;
}

export function em(value, base = 16) {
  value = resolveValue(value);
  return `calc(${value} / ${base} * 1em)`;
}

export function vw(value, viewport = 375, min = '1rem') {
  value = resolveValue(value);
  return `max(${(value / viewport) * 100}vw, ${min})`;
}

const resolveValue = value => {
  if (value.endsWith('value')) {
    return parseInt(value);
  } else {
    return String(value).replace('calc', '').replace('px', '');
  }
};
