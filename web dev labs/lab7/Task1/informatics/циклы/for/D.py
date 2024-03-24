a = input()
b = input()
c = 0
for i in range(len(str(a))):
    if a[i] == b: c += 1
print(c)