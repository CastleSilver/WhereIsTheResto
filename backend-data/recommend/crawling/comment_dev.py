#-*- coding:utf-8 -*-
import urllib3
import json
import csv

f = open('comment_list.csv', 'r', encoding='utf-8')
rdr = csv.reader(f)
context = ""
for line in rdr:
    context += line[1]
f.close()

# // 언어 분석 기술 문어/구어 중 한가지만 선택해 사용
# // 언어 분석 기술(문어)
openApiURL = "http://aiopen.etri.re.kr:8000/WiseNLU" 
# // 언어 분석 기술(구어)
 
accessKey = "19530416-0f3a-4198-820f-a717f01c7957"
analysisCode = "srl"
text = context
requestJson = {
    "access_key": accessKey,
    "argument": {
        "text": text,
        "analysis_code": analysisCode
    }
}

http = urllib3.PoolManager()
response = http.request(
    "POST",
    openApiURL,
    headers={"Content-Type": "application/json; charset=UTF-8"},
    body=json.dumps(requestJson)
)
 
print("[responseCode] " + str(response.status))
print("[responBody]")
print(str(response.data,"utf-8"))
