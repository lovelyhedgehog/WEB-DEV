def max_end3(nums):
  temp = nums[0]
  if nums[0] < nums[len(nums) - 1]:
    temp = nums[len(nums) - 1]
  return [temp, temp, temp]