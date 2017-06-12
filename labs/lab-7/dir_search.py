from itws import edit_distance
from functools import partial

def closest(query):
    userList = open("users.txt","r")
    userNames = userList.read().split('\n')
    dist = partial(edit_distance, query)
    scores = list(map(dist,userNames))
    List = list(zip(userNames, scores))
    passed = list(filter(lambda x: x[1]<4, List))
    result = list(map(lambda x: x[0], passed))
    return result