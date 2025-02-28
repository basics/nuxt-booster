export function rem(value: string, base = 16) {
  return `${parseInt(resolveValue(value)) / base}rem`;
}

export function em(value: string, base = 16) {
  return `calc(${resolveValue(value)} / ${base} * 1em)`;
}

export function vw(value: number, viewport: number = 375) {
  return `${(value / viewport) * 100}vw`;
}

const resolveValue = (value: string | number) => {
  value = String(value);
  if (value.endsWith('value')) {
    return String(parseInt(value));
  } else {
    return String(value).replace('calc', '').replace('px', '');
  }
};
