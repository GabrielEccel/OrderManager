export function formatPhone(value: string) {
  let numbers = value.replace(/\D/g, '');

  if (numbers.startsWith('55')) {
    numbers = numbers.slice(2);
  }

  const limited = numbers.slice(0, 11);

  if (limited.length === 0) {
    return '';
  }

  if (limited.length <= 2) {
    return `(${limited}`;
  }

  if (limited.length <= 7) {
    return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
  }

  return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`;
}