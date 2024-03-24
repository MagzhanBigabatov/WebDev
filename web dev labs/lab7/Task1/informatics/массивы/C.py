a = input()
b = input().split()
c = 0
for i in range(len(b)):
    if int(b[i]) > 0: c += 1
print(c)