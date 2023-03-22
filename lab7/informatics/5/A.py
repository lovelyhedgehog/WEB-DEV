def min(a, b, c, d):
    ans = a
    if (b < ans):
        ans = b
    if (c < ans):
        ans = c
    if (d < ans):
        ans = d
    return ans 

a, b, c, d = input().split()
print(min(a, b, c, d))