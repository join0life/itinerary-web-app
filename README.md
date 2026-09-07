# 단순여행

여행 일정을 쉽고 직관적으로 관리할 수 있는 웹 서비스입니다.
프로젝트 기반으로 일정과 캘린더를 함께 확인하고, 사용자 간 일정 공유까지 고려한 Supabase 기반의 프론트엔드 프로젝트입니다.
현재는 웹 서비스이지만 추후 앱(모바일)으로도 확장할 계획이 있어, pnpm workspace + Turborepo 기반 모노레포로 구성해 웹 앱과 디자인 토큰/공유 로직 패키지를 미리 분리해 관리하고 있습니다.

[제작 기간] 25. 12. 01 ~ 진행 중

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
- pnpm workspace + Turborepo를 활용한 모노레포 구조 설계 (웹 앱 / 공유 로직 / 디자인 토큰 패키지 분리)
- 디자인 토큰 기반의 자체 디자인 시스템 구축 및 라이트/다크 테마 대응

---

## 주요 기능

- 여행 프로젝트 생성 및 참여
- 일정 생성 / 수정 / 삭제
- 주간 캘린더 기반 일정 확인
- 사용자 인증 및 프로필 관리
- 프로젝트 단위 일정 공유 (같은 프로젝트 팀원의 일정도 함께 조회 · 수정 · 삭제 가능, 안내 콜아웃 제공)

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
- pnpm workspace
- Turborepo

---

## 구현 포인트

- Supabase를 활용해 인증, 프로젝트 정보, 일정 데이터를 분리하여 관리
- React Query로 서버 상태를 효율적으로 처리하여 UX 개선
- Zustand로 전역 상태를 간결하게 관리
- 모달, 캘린더, 리스트 UI를 조합해 실제 서비스 흐름에 맞는 화면 구성
- 반응형 UI를 고려해 모바일/데스크톱 환경 모두에 대응하도록 설계
- 색상 · 타이포그래피 · 컴포넌트 톤을 디자인 토큰(`@itinerary/tokens`)으로 정의해 라이트/다크 테마를 일관되게 적용
- 웹 전용 코드(`app-web`)와 공유 가능한 타입 · 유틸(`shared`) · 디자인 토큰(`tokens`)을 패키지 단위로 분리해 향후 멀티 플랫폼 확장을 고려한 구조 설계

---

## 프로젝트 구조

pnpm workspace 기반 모노레포로, `packages/` 아래 앱과 공유 패키지를 분리해 관리합니다.

```
packages/
  app-web/            # 웹 앱 (Vite + React)
    src/
      api/            # Supabase API 연동
      components/     # UI 컴포넌트
      hooks/          # React Query 기반 커스텀 훅
      pages/          # 라우팅 페이지
      store/          # Zustand 전역 상태
      styles/         # 디자인 시스템 CSS (design-system.css)
      lib/            # 공통 유틸리티 및 Supabase 설정
  shared/             # 웹/모바일 공유 타입 · 유틸 · 상수 (@itinerary/shared)
    src/
      types.ts        # 공유 엔티티 타입
      constants.ts    # QUERY_KEYS 등 공통 상수
      utils.ts        # 공통 유틸 함수
      error.ts        # 공통 에러 처리
  tokens/             # 디자인 토큰 원본 및 CSS 변환 스크립트 (@itinerary/tokens)
    src/
      design-tokens.json # 디자인 토큰 원본
      scripts/        # 토큰 → CSS 변환 스크립트
turbo.json            # Turborepo 파이프라인 설정
pnpm-workspace.yaml   # pnpm workspace 설정
```

---

## 주요 화면 UI

### 프로젝트 페이지
<img width="3360" height="1856" alt="image" src="https://github.com/user-attachments/assets/b956bd68-0e67-483c-ab80-732602d25f0e" />

### 일정 페이지
<img width="3360" height="1856" alt="image" src="https://github.com/user-attachments/assets/730b0361-1d2a-4c38-8670-8f8fc2a356f6" />

### 캘린더 페이지
<img width="3360" height="2192" alt="image" src="https://github.com/user-attachments/assets/93346409-6659-4e83-a47f-b0f67a7ff15c" />

### 모달(생성, 수정)
<img width="3360" height="1856" alt="image" src="https://github.com/user-attachments/assets/e10ef54b-2d77-43f4-8513-363c10b22f76" />

### 마이페이지
<img width="3360" height="1856" alt="image" src="https://github.com/user-attachments/assets/63d2337d-4176-4df4-af5c-2203f4d324e9" />
