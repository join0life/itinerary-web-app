# 단순여행 🛫

리액트로 만든 여행 일정 관리 웹 애플리케이션입니다.
MBTI P인 친구들과 함께 여행 일정을 정리하게 위해 만들었습니다.
귀찮은 여행 계획 세우기, 일정을 단순 나열하는 것으로 10초 만에 해결해요.


[제작 기간] 25. 09. 09(화) ~ 25. 09. 22(월)

[링크]
https://itinerary-project-17e9f.web.app/

## 웹 화면

<img width="722" height="378" alt="Image" src="https://github.com/user-attachments/assets/be24c753-ff21-436f-ad0a-d3a5917a5520" />
<img width="722" height="378" alt="Image" src="https://github.com/user-attachments/assets/e70490aa-b7e8-4baa-a525-e389b0ad1160" />

## 모바일 화면

<img width="340" height="600" alt="Image" src="https://github.com/user-attachments/assets/9edc07a5-4e72-47eb-9e7c-fe589483d5f9" />
<img width="340" height="600" alt="Image" src="https://github.com/user-attachments/assets/b38f9d41-4de1-41a2-9b04-186caa09ce21" />

## 프로젝트 구조 🗂️

```
travel-itinerary-app/
├── dist/
├── node_modules/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Button.css
│ │ ├── Button.jsx
│ │ ├── ItineraryItem.css
│ │ ├── ItineraryItem.jsx
│ │ ├── ItineraryList.css
│ │ ├── ItineraryList.jsx
│ │ ├── LNB.css
│ │ ├── LNB.jsx
│ │ ├── Modal.css
│ │ ├── Modal.jsx # 작성용 모달
│ │ ├── MyCalendar.css
│ │ ├── MyCalendar.jsx # 캘린더 라이브러리
│ │ ├── Tag.css
│ │ ├── Tag.jsx # 태그용 컴포넌트
│ │ ├── util.jsx # 날짜 계산 함수
│ │ ├── ViewModal.css
│ │ └── ViewModal.jsx # 보기용 모달
│ ├── hooks/
│ │ ├── useItinerary.jsx # id별, 사용자별 데이터 관리용 hook
│ │ └── useKakaoMap.jsx # 카카오맵 api용 hook
│ ├── pages/
│ │ ├── Calendar.css
│ │ ├── Calendar.jsx
│ │ ├── Itinerary.css
│ │ └── Itinerary.jsx
│ ├── App.css
│ ├── App.jsx # 메인 앱 컴포넌트
│ ├── index.css
└─└── main.jsx
```

## ⚒️ 기술 스택

- **React 19** - UI 라이브러리
- **Vite** - 빌드 도구
- **React Router** - 라우팅
- **LocalStorage** - 데이터 저장
- **Kakao Maps API** - 지도 데이터 연동
- **react-big-calendar** - 캘린더 라이브러리
- **Firebase** - 배포

## ✨ 주요 기능

- 사용자별 할 일 작성
- 일정 관련 날짜, 시작일, 종료일, 태그, 위치, 메모 작성/수정/삭제
- 체크한 일정 캘린더에 표시
- 주간 일정 목록 조회
- 캘린더로 시간대별 일정 가시화
