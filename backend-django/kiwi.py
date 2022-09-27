from kiwipiepy  import Kiwi

import requests
import json
# 1. 텍스트 준비 & 개행문자 처리
with open('text.txt', 'r', encoding='utf-8') as f:
    text = f.read()
text = text.replace('\n', '\r\n')
# 2. 맞춤법 검사 요청 (requests)
response = requests.post('http://164.125.7.61/speller/results', data={'text1': text})
# 3. 응답에서 필요한 내용 추출 (html 파싱)
data = response.text.split('data = [', 1)[-1].rsplit('];', 1)[0]
# 4. 파이썬 딕셔너리 형식으로 변환
data = json.loads(data)
# 5. 교정 내용 출력
print(data['errInfo'])