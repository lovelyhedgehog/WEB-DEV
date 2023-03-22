def sum67(nums):
  cnt = 0
  ok = False
  for i in range (len(nums)):
    if nums[i] == 6:
      ok = True
      continue
    if nums[i] == 7 and ok == True:
      ok = False
      continue
    if ok == False:  
      cnt += nums[i]
  return cnt