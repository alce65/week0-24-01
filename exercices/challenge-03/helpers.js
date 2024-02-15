export const strictEquals1 = (a, b) => {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  }

  if (
    (Object.is(a, -0) && Object.is(0, b)) ||
    (Object.is(a, 0) && Object.is(-0, b))
  ) {
    return true;
  }

  return Object.is(a, b);
};

export const strictEquals = (a, b) => {
  if (Object.is(a, NaN)) return false;
  if (!a && !b) return true;
  return Object.is(a, b);
};
