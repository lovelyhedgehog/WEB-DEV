n = int(input())
list = input().split()
cnt = 0
for i in range(1, n - 1):
    if int(list[i - 1]) < int(list[i]) and int(list[i + 1]) < int(list[i]):
        cnt += 1
print(cnt)