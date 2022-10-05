import os, json, pymysql

def connectMySQL():
    connect = pymysql.connect(
        user='nopo', 
        password='rmwlqdjeprh401', 
        host='j7a401.p.ssafy.io',
        db='nopo_db', 
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
    )
    curs = connect.cursor()

    return connect, curs