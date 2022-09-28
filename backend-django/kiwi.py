from kiwipiepy  import Kiwi
from kiwipiepy.utils import Stopwords

import requests
import json

kiwi = Kiwi()
# tokenize 함수로 형태소 분석 결과를 얻을 수 있습니다.
kiwi.tokenize("안녕하세요 형태소 분석기 키위입니다.")

# normalize_coda 옵션을 사용하면 
# 덧붙은 받침 때문에 분석이 깨지는 경우를 방지할 수 있습니다.
kiwi.tokenize("ㅋㅋㅋ 이런 것도 분석이 될까욬ㅋㅋ?", normalize_coda=True)

# 불용어 관리를 위한 Stopwords 클래스도 제공합니다.
from kiwipiepy.utils import Stopwords
stopwords = Stopwords()
kiwi.tokenize("분석 결과에서 불용어만 제외하고 출력할 수도 있다.", stopwords=stopwords)

# add, remove 메소드를 이용해 불용어 목록에 단어를 추가하거나 삭제할 수도 있습니다.
stopwords.add(('결과', 'NNG'))
kiwi.tokenize("분석 결과에서 불용어만 제외하고 출력할 수도 있다.", stopwords=stopwords)

tokens = kiwi.tokenize("각 토큰은 여러 정보를 담고 있습니다.")

# 문장 분리 기능도 지원합니다.
kiwi.split_into_sents("여러 문장으로 구성된 텍스트네 이걸 분리해줘")

# 문장 분리와 형태소 분석을 함께 수행할 수도 있습니다.
kiwi.split_into_sents("여러 문장으로 구성된 텍스트네 이걸 분리해줘", return_tokens=True)

# 사전에 새로운 단어를 추가할 수 있습니다.
kiwi.add_user_word("김갑갑", "NNP")

kiwi.tokenize("김갑갑이 누구야")

# v0.11.0 신기능
# 0.11.0 버전부터는 사용자 사전에 동사/형용사를 추가할 때, 그 활용형도 함께 등재됩니다.
# 사전에 등재되어 있지 않은 동사 `팅기다`를 분석하면, 엉뚱한 결과가 나옵니다.
kiwi.tokenize('팅겼다')

# 형태소 `팅기/VV`를 사전에 등록하면, 이 형태소의 모든 활용형이 자동으로 추가되기에
# `팅겼다`, `팅길` 등의 형태를 모두 분석해낼 수 있습니다.
kiwi.add_user_word('팅기', 'VV')

kiwi.tokenize('팅겼다')

# 또한 변형된 형태소를 일괄적으로 추가하여 대상 텍스트에 맞춰 분석 성능을 높일 수 있습니다.
kiwi.tokenize("안녕하세영, 제 이름은 이세영이에영. 학생이세영?")

# 종결어미(EF) 중 '요'로 끝나는 것들을 '영'으로 대체하여 일괄 삽입합니다. 
# 이 때 변형된 종결어미에는 -3의 페널티를 부여하여 원 형태소보다 우선하지 않도록 합니다.
# 새로 삽입된 형태소들이 반환됩니다.
kiwi.add_re_rule('EF', '요$', '영', -3)

# 동일한 문장을 재분석하면 분석 결과가 개선된 것을 확인할 수 있습니다.
kiwi.tokenize("안녕하세영, 제 이름은 이세영이에영. 님도 학생이세영?")

# 기분석 형태를 등록하여 원하는 대로 분석되지 않는 문자열을 교정할 수도 있습니다.
# 다음 문장의 `사겼대`는 오타가 들어간 형태라 제대로 분석되지 않습니다.
kiwi.tokenize('걔네 둘이 사겼대')

# 다음과 같이 add_pre_analyzed_word 메소드를 이용하여 이를 교정할 수 있습니다.
kiwi.add_pre_analyzed_word('사겼대', ['사귀/VV', '었/EP', '대/EF'], -3)

# 그 뒤 동일한 문장을 다시 분석해보면 결과가 바뀐 것을 확인할 수 있습니다.
kiwi.tokenize('걔네 둘이 사겼대')

# 단, 사귀/VV, 었/EP, 대/EF의 시작위치가 모두 6, 길이가 모두 3으로 잘못 잡히는 문제가 보입니다.
# 이를 고치기 위해서는 add_pre_analyzed_word 시 각 형태소의 위치정보도 함께 입력해주어야합니다.

kiwi.add_pre_analyzed_word('사겼대', [('사귀', 'VV', 0, 2), ('었', 'EP', 1, 2), ('대', 'EF', 2, 3)], -3)

kiwi.tokenize('걔네 둘이 사겼대')


# v0.12.0 신기능
# 0.12.0 버전부터는 형태소를 결합하여 문장으로 복원하는 기능이 추가되었습니다.
kiwi.join([('길', 'NNG'), ('을', 'JKO'), ('묻', 'VV'), ('어요', 'EF')])

kiwi.join([('흙', 'NNG'), ('이', 'JKS'), ('묻', 'VV'), ('어요', 'EF')])


# v0.13.0 신기능
# 더 강력한 언어 모델인 SkipBigram(sbg)이 추가되었습니다.
# 기존의 knlm과 달리 먼 거리에 있는 형태소를 고려할 수 있습니다.
kiwi = Kiwi(model_type='knlm')
kiwi.tokenize('이 번호로 전화를 이따가 꼭 반드시 걸어.')


kiwi = Kiwi(model_type='sbg')
kiwi.tokenize('이 번호로 전화를 이따가 꼭 반드시 걸어.')


# 또한 오타 교정 기능이 추가되었습니다.
# 간단한 오타를 교정하여, 사소한 오타 때문에 전체 분석 결과가 어긋나는 문제를 해결할 수 있습니다.
kiwi = Kiwi(model_type='sbg', typos='basic')
kiwi.tokenize('외않됀대?') # 오타 교정 사용 시 로딩 시간이 5~10초 정도 소요됨


kiwi.tokenize('장례희망이 뭐냐는 선섕님의 질문에 벙어리가 됫따') 
