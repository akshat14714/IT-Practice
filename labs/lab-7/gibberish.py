inputfile = open("encrypted.txt","r")
file = open("decrypted.txt","w")

def decrypt():
    string = inputfile.read()
    string = "".join(string.split('#'))
    string = "".join(string.split('\n'))
    string = "".join(string.split(' '))
    ans = ""
    for i in string:
        ans += chr(ord(i) - 20)
    file.write(ans)

decrypt()
file.close()