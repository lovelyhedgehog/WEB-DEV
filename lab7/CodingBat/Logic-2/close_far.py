def close_far(a, b, c):
	return (close(a, b) and far(a, b, c)) or (close(a, c) and far(a, c, b))
	
def close(a, b):
	if abs(a - b) <= 1:
	  return True
	return False
	
def far(a, b, c):
	if abs(a - c) >= 2 and abs(b - c) >= 2:
	  return True
	return False