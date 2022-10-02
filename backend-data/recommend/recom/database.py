import os, json, pymysql

def connectMySQL():
    connect = pymysql.connect(
        user='root', 
        password='ssafy', 
        host='127.0.0.1',
        db='nopo_db', 
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
    )
    curs = connect.cursor()

    return connect, curs