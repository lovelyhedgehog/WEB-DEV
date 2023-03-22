def sum13(nums):
  cnt = 0
  i = 0
  while i < len(nums):
    if nums[i] == 13:
      i += 1
    else:
      cnt += nums[i]
    i += 1
  return cnt