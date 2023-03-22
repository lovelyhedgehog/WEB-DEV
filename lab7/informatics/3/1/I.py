import math

x = int(input())
cnt = 0
for i in range (1, int(math.sqrt(x)) + 1):
    if (x % i == 0):
        if (x / i != i):
            cnt += 2
        else:
            cnt += 1
print(cnt)