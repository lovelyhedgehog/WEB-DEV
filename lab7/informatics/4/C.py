n = int(input())
list = input().split()
cnt = 0
for i in range(n):
    if (int(list[i]) > 0):
        cnt += 1
print(cnt)