a = input()
b = input().split()
c = 0
for i in range(1, len(b)):
    if int(b[i]) > int(b[i-1]): c += 1
print(c)