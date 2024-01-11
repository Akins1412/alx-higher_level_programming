#!/usr/bin/python3
def uniq_add(my_list=[]):
    "adds all unique integers in a list"
    my_set = set(my_list)
    my_list = list(my_set)
    return sum(my_list)
