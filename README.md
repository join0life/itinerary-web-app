# 단순여행

여행 일정을 쉽고 직관적으로 관리할 수 있는 웹 서비스입니다.
프로젝트 기반으로 일정과 캘린더를 함께 확인하고, 사용자 간 일정 공유까지 고려한 Supabase 기반의 프론트엔드 프로젝트입니다.

[제작 기간] 25. 12. 01 ~ 25. 05. 30

[링크]

https://itinerary-web-app-three.vercel.app/

---

## 프로젝트 개요

단순여행은 여행 계획을 **일정 관리** 중심으로 정리한 웹 애플리케이션입니다.

여행 프로젝트를 생성하고, 참여자별 일정과 캘린더를 한 화면에서 확인할 수 있도록 구현했습니다.

이 프로젝트를 통해 다음을 중점적으로 경험했습니다.

- React + TypeScript 기반의 웹 애플리케이션 구조 설계
- Supabase를 활용한 인증, 데이터 저장, 상태 관리
- TanStack Query를 이용한 비동기 데이터 처리
- 사용자 경험을 고려한 UI/UX 구성

---

## 주요 기능

- 여행 프로젝트 생성 및 참여
- 일정 생성 / 수정 / 삭제
- 주간 캘린더 기반 일정 확인
- 사용자 인증 및 프로필 관리
- 프로젝트 단위 일정 공유

---

## 기술 스택

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- TanStack Query
- Zustand
- React Router
- Supabase
- Vercel

---

## 구현 포인트

- Supabase를 활용해 인증, 프로젝트 정보, 일정 데이터를 분리하여 관리
- React Query로 서버 상태를 효율적으로 처리하여 UX 개선
- Zustand로 전역 상태를 간결하게 관리
- 모달, 캘린더, 리스트 UI를 조합해 실제 서비스 흐름에 맞는 화면 구성
- 반응형 UI를 고려해 모바일/데스크톱 환경 모두에 대응하도록 설계

---

## 프로젝트 구조

```
src/
  api/        # Supabase API 연동
  components/ # UI 컴포넌트
  hooks/      # React Query 기반 커스텀 훅
  pages/      # 라우팅 페이지
  store/      # Zustand 전역 상태
  lib/        # 공통 유틸리티 및 Supabase 설정
```

---

## 주요 화면 UI

### 프로젝트 페이지

<img width="3360" height="1798" alt="image" src="https://github.com/user-attachments/assets/28768ede-c50c-4133-b656-6418a5150b0a" />

### 일정 페이지

<img width="3360" height="1798" alt="image" src="https://github.com/user-attachments/assets/13363577-74cc-47a4-952c-ddcf7854c619" />

### 캘린더 페이지

<img width="3360" height="2134" alt="image" src="https://github.com/user-attachments/assets/395c34c5-d339-4a90-8074-9cde5da1b917" />

### 모달(생성, 수정)

<img width="3360" height="1798" alt="image" src="https://github.com/user-attachments/assets/29926e89-3dab-4da0-afdb-4783138e89b8" />
