def round_sum(a, b, c):
    return check(a) + check(b) + check(c)
    
def check(a):
    if a % 10 < 5:
      return a - (a % 10)
    else:    
      return a + (10 - a % 10)