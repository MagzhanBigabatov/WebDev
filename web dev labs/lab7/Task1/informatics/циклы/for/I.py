a = int(input())
b = 0
for i in range(2, a):
    if(a%i == 0): b+=i
print(b)