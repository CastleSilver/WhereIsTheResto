import os, json, pymysql

def connectMySQL():
    connect = pymysql.connect(
        user='${user}', 
        password='${password}',, 
        host='${host}',
        db='${db}', 
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
    )
    curs = connect.cursor()

    return connect, curs
