def make_bricks(small, big, goal):
  temp = 0
  if goal >= 5 * big:
    temp = goal - (5 * big)
  else:
    temp = goal % 5
  return small >= temp