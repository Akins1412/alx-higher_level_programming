#!/usr/bin/python3
def search_replace(my_list, search, replace):
	"replaces all occurrences of an element by another in a new list"

	current_list = my_list[:]
	for i in range(len(current_list)):
        if current_list[i] == search:
            current_list[i] = replace
    return (current_list)
