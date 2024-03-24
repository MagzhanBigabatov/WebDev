import sys

a = input()
b = input().split()
c = 0
for i in range(1, len(b)):
    if int(b[i]) > 0 and int(b[i-1]) > 0:
        print("YES")
        sys.exit()
print("NO")