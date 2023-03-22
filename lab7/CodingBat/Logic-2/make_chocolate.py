def make_chocolate(small, big, goal):
  temp = 0
  if goal >= 5 * big:
    temp = goal - 5 * big
  else:
    temp = goal % 5
  if temp <= small:
    return temp
  else:
    return -1