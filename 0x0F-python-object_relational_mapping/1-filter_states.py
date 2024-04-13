#!/usr/bin/python3
import MySQLdb
import sys

if __name__ == "__main__":
    db = MYSQLdb.connect(host="localhost", port=3306, user=sys.argv[1],
                         psswrd=sys.argv[2], db=sys.argv[3])
    cur = db.cursor()
    cur.execute = ("""SELECT * FROM states WHERE BINARY NAME 'N%' 
                   ORDER BY state.id""")
    res = cur.fetchall()
    for result in res:
        print(result)
    cur.close()
    db.close()
