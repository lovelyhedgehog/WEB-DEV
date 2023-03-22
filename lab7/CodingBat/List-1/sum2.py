def sum2(nums):
  sum = 0
  end = min(len(nums), 2)
  for i in range(end):
    sum += nums[i]
  return sum