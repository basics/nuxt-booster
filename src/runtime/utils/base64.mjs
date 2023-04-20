export function atob (value) {
  if ('atob' in global) {
    return global.atob(value);
  }
  return Buffer.from(value, 'base64').toString('binary');
}

export function btoa (value) {
  if ('btoa' in global) {
    return global.btoa(value);
  }
  return Buffer.from(value).toString('base64');
}
