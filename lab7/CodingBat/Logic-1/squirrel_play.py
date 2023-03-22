def squirrel_play(temp, is_summer):
  if is_summer and temp >= 60 and temp <= 100:
    return True
  elif not is_summer and temp >= 60 and temp <= 90:
    return True
  else:
    return False