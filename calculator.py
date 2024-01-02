x = int(input('Sayı: '))
y = int(input('Sayı: '))

islem = input('''Yapmak istediğiniz işlem.
Toplama,Çıkarma,Çarpma,Bölme(+,-,*,/) ''')

if islem == '*':
    print(x * y)
elif islem == '/':
    print(x/y)
elif islem == '+':
    print(x+y)
elif islem == '-':
    print(x-y)