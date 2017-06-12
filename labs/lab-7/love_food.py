file = open("outputbonus.txt","w")

def the_food_manager():
    q = input()
    q = int(q)
    pile = []
    while q>0:
        inp = input()
        if inp[0]=='1':
            if len(pile)==0:
                file.write("No Food\n")
            else:
                file.write(pile.pop()+"\n")
        elif inp[0]=='2':
            pile.append(inp[2:])
        q-=1

the_food_manager()