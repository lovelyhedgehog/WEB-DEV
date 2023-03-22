def string_match(a, b):
  cnt = 0
  temp = len(a)
  if (len(b) < temp):
    temp = len(b)
  for i in range(temp - 1):
    if a[i:i+2] == b[i:i+2]:
      cnt += 1
  return cnt