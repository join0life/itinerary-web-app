# TODO

- [x] 프로젝트 선택 안했는데 일정 탭 누를시
  - 최근 프로젝트로 이동 (마지막으로 연 projectId) 또는
  - 프로젝트 선택 페이지로 보내기 (/project)

- [x] 로그아웃 로직
      store에서 resetRecentProjectId 호출해서 로컬 스토리지의 recentProjectId 초기화

- [x] TodoItem 컴포넌트
  - TodoList 부분이랑 비교해서 구조 정리하기

- [ ] ProfileDetailPage
  - project member인 경우에도 내 프로젝트에 프로젝트 아이템 렌더링

- [ ] event.listByProject에서 allday가 false인 일정 아이템에서 start_at이 같거나 시간이 겹칠 때 처리
  - [ ] 시간 겹치는 부분은 컬럼을 2~3개로 나누기
  - [ ] 3개 이상 넘어갈 때는 다른 방식으로 처리

- [ ] 캘린더 일정
  - [ ] 일정 누르면 view용 모달 창 열기
  - [ ] 드래그 앤 드롭으로 시간 조절

- [ ] 구글맵 API

# 기술 스택

- Tanstack Query: 비동기 요청 상태 관리
- Shadcn/ui: 컴포넌트 ui
- Tailwind css: css
- Supabase: 서버
- react-router-dom: 페이지 라우팅
- React
- Typescript
- ESLint?
- Vercel: 배포
- Vite
- Zustand: 전역 상태 관리(세션, 테마, 모달)
- Figma: 와이어프레임 설계
- intersection observer: 무한 스크롤

# 트러블 슈팅

- 모바일 환경에서 구글 로그인 되지 않는 문제

# 추가 고려할 기능

- projectName, projectDescription 글자 제한

# 프로젝트 규칙

## 시간 규칙

모든 시간은 여행지 현지 시각을 그대로 기록한 값이며, 사용자 위치에 따라 변하지 않는다.

# 페이지별 기능

- 일정 페이지
  - 내 일정 생성
  - 프로젝트내 모든 유저의 일정 조회
- 주간 캘린더
  - 일정 페이지에서 체크한 일정을 캘린더에서 조회
- 프로필 페이지
  - 내 프로필 조회
