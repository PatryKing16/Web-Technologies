"""import sqlite3

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

con.execute(SELECT ename, name FROM customer c INNER JOIN emp e ON c.repid = e.empno ORDER BY ename)

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



Powiedziałeś(-aś):
hey how can I select all from an emp in sql database using python?
ChatGPT powiedział:
ChatGPT
To select all records from a table named emp in a SQL database using Python, you typically use a database connector like sqlite3 (for SQLite), psycopg2 (for PostgreSQL), or pyodbc (for SQL Server). Below is an example using sqlite3, but the approach is similar for other databases.

Example using sqlite3:
python
Skopiuj kod
import sqlite3"""

import sqlite3

conn = sqlite3.connect("C:\\Users\\Patry\\Desktop\\Studia\\Year 1\\Databases\\database\\nowabaza.db")

# Create a cursor object
cur = conn.cursor()

# SQL query to select all from the emp table
cur.execute("SELECT * FROM emp")

# Fetch all results
rows = cur.fetchall()

# Iterate over the rows and print them
for row in rows:
    print(row)

# Close the connection
conn.close()

