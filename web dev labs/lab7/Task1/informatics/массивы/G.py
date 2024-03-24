a = input()
b = input().split()
c = []
for i in range(len(b) - 1, -1, -1):
    c.append(b[i])
    print(b[i], end=" ")