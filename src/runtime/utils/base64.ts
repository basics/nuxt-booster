export function atob(value: string) {
  if (typeof window !== 'undefined' && 'atob' in window) {
    return window.atob(value);
  }
  return Buffer.from(value, 'base64').toString('binary');
}

export function btoa(value: string) {
  if (typeof window !== 'undefined' && 'btoa' in window) {
    return window.btoa(value);
  }
  return Buffer.from(value).toString('base64');
}
