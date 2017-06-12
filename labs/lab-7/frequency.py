file = open("output.txt","w")
import string
def get_word_frequency(line):
    mylist = line.split()
    mylist = sorted(mylist)
    final = {}
    for elem in mylist:
        if elem in final:
            final[elem] += 1
        else:
            final[elem] = 1
    anslist = set(mylist)
    anslist = sorted(anslist)
    for elem in anslist:
        file.write(elem+':'+str(final[elem]))
        file.write("\n")

get_word_frequency("New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.")
file.close()