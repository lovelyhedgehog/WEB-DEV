def left2(str):
  if (len(str) <= 2):
    return str
  a = str[:2]
  b = str[2:]
  return b + a