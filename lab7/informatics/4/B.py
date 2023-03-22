n = int(input())
list = input().split()
for i in range(n):
    if (int(list[i]) % 2 == 0):
        print(list[i], end=' ')