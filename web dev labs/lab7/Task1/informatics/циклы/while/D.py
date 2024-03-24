import sys

a = int(input())
i = 1
b = 0
while i <= a:
    if i == a:
        print("YES")
        sys.exit()
    i *= 2
print("NO")