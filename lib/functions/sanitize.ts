export function sanitize(str: string) {
  return str.replace(/['-;]/, '')
}
