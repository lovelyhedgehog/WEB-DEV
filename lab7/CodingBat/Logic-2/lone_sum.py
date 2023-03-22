def lone_sum(a, b, c):
  sum = 0
  if a not in [b, c]:
    sum += a
  if b not in [a, c]:
    sum += b
  if c not in [a, b]:
    sum += c
  return sum