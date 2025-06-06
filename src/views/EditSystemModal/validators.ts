export const emailValidator = (value: string): string | false => {
  if (value.length === 0) {
    return 'This field is required'
  }
  if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(value))
    return 'Invalid email address'
  return false
}
