def xor(a, b):
    if (a == 1 and b == 0) or (a == 0 and b == 1):
        return (1)
    return (0)

a = list(map(int, input().split()))
print(xor(a[0], a[1]))