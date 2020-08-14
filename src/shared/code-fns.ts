export function sanitizeOneTimeCode(code: string) {
  return code.replace(/[^a-zA-Z0-9\s-]*/g, '');
}
