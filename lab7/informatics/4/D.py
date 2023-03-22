n = int(input())
list = input().split()
cnt = 0
for i in range(1, n):
    if (int(list[i]) > int(list[i - 1])):
        cnt += 1
print(cnt)