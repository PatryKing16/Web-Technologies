import sqlite3

db = sqlite3.connect("C:\\Users\\Patry\\Desktop\\Studia\\Year 1\\Databases\\database\\nowabaza.db")

con = db.cursor()

con.execute("SELECT * FROM emp")

con.fetchone()

exa = con.fetchall()

exa

db.close()

#example 2
import sqlite3


db = sqlite3.connect("C:\\Users\\Patry\\Desktop\\Studia\\Year 1\\Databases\\database\\nowabaza.db")

con = db.cursor()

con.execute("SELECT empno, ename, deptno FROM emp")

all_emp_row = con.fetchall()

for a in all_emp_row:
    empno = a[0]
    ename = a[1]
    deptno = a[2]
    print(f"{empno} \t {ename} zt {deptno} \n")

#example 3

import sqlite3

con.execute("""SELECT ename, name FROM customer c INNER JOIN emp e ON c.repid = e.empno ORDER BY ename""")

all_rows = con.fetchall()
last_repname = ""


print("Sales Rep \t Customers name")

for row in all_rows:
    repname = row[0]
    custname = row[1]
    if repname != last_repname:
        print("{0}\t {1}".format(repname, custname))
        lastname = repname
    else:
        print("{0}\t {1}".format("", custname))
db.close()