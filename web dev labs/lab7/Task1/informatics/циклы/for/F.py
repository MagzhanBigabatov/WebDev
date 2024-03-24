a = input()
c = ""
for i in range(len(str(a))):
    c += a[-(i+1)]
print(int(c))