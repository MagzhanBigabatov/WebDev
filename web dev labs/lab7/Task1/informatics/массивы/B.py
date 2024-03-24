a = input()
b = input().split()
c = 0
for i in range(len(b)):
    if int(b[i])%2 == 0: print(b[i], end=" ")