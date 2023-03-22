def no_teen_sum(a, b, c):
  return check(a) + check(b) + check(c)
  
def check(a):
  if a not in [13, 14, 17, 18, 19]:
    return a
  else:
    return 0