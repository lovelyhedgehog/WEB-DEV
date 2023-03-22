if __name__ == '__main__':
    a = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        a.append((score, name))
    a.sort()
    temp = a[0][0]
    ok = False
    i = 0
    while ok == False:
        if (a[i][0] == temp):
            i += 1
        else:
            ok = True
            temp = a[i][0]
    while ok == True and i < len(a):
        if (a[i][0] == temp):
            print(a[i][1])
            i += 1
        else:
            ok = False