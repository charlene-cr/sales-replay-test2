export function createMoney(amount, currency = "USD") {
  if (!Number.isInteger(amount)) throw new TypeError("money amount must be integer minor units");
  return { amount, currency };
}

export function addMoney(left, right) {
  assertSameCurrency(left, right);
  return createMoney(left.amount + right.amount, left.currency);
}

export function negateMoney(value) {
  return createMoney(-value.amount, value.currency);
}

export function assertSameCurrency(left, right) {
  if (left.currency !== right.currency) {
    throw new RangeError(`currency mismatch: ${left.currency} !== ${right.currency}`);
  }
}
