def double_power(a, n):
    return a ** n

a, n = input().split()
print(double_power(float(a), int(n)))