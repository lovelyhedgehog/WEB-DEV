def front_times(str, n):
  a = 3
  if a > len(str):
    a = len(str)
  front = str[:a]
  ans = ""
  for i in range(n):
    ans += front
  return ans