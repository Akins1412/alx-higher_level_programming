#!/usr/bin/python3
def search_replace(my_list, search, replace):
	"replaces all occurrences of an element by another in a new list"
new_list = []
    for i in range(len(my_list)):
        if my_list[i] == search:
            new_list.append(replace)
    return(new_list)
