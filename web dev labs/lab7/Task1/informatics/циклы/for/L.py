a = (input())
b = 0
for i in range(len(a)):
    b += int(a[-(i+1)])*(2**i)
print(b)