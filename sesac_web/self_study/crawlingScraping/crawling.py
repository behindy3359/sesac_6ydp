# 라이브러리 준비하기
import csv
import requests
from bs4 import BeautifulSoup

url ='http://me.ssu.ac.kr/notice/notice01.php'

# 엑셀 파일로 저장하기
filename = "기계공학부_공지사항_제목.csv"
f = open(filename, "w", encoding="utf-8-sig", newline="")
writer = csv.writer(f)

columns_name = ["제목"] # 컬럼 속성명 만들기
writer.writerow(columns_name)

# 웹 서버에 요청하기
res = requests.get(url)
res.raise_for_status()

# soup 객체 만들기
soup = BeautifulSoup(res.text, "lxml")
TitleBox = soup.find_all('td', attrs={"class": "subject"}) # 모든 제목을 가져오기 위해 find_all을 사용
i = 1

                                        # 반복문으로 제목 가져오기(터미널 창 출력 및 엑셀 저장)
for content in TitleBox: 
    title = content.find('a').text      # 각각의 td 태그에서 'a' 태그를 찾고 그 안에 있는 텍스트를 가져옴
    print(f"{str(i)}번째 글: {title}")
    data = [title]                      # 엑셀에 저장할 데이터는 제목만 필요하므로 title만 리스트에 추가
    writer.writerow(data)
    i += 1

f.close()
