export function validateAndFormatNumber(value: string | number): [string, string] {
  value = value.toString().trim()
  if (value) {
    const decimalMatch = /^[-+]?[0-9]*(\.[0-9]{1,15})?$/.test(value);
    if (!decimalMatch) {
      return ['', '']
    }
    const [integerPart = '0', decimalPart = ''] = value.split('.');
    return [integerPart, decimalPart]
  }
  return ['0', '1']
}