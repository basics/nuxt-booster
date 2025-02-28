export function toHashCode(value: string) {
  let hash = 0;
  if (value.length === 0) {
    return hash;
  }
  for (let i = 0; i < value.length; i++) {
    const char = value.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

export function toHashHex(value: string) {
  return toHashCode(value).toString(16);
}

export function minify(style: string) {
  return style
    .split('\n')
    .map((line: string) => line.trim())
    .join(' ');
}
