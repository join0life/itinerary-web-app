# 단순여행 웹앱 UI Kit

Click-through recreation of the shipped app (`join0life/itinerary-web-app`). Mobile-first shell centred at `--app-shell-max-width` (600px), the same as the product's `max-w-app-shell`.

## Flow
`index.html` boots `App.jsx`, which routes between screens in local state:

1. **LandingScreen** — full-bleed coral hero, brand wordmark in JejuStoneWall, 시작하기 → 로그인.
2. **AuthScreen** — 로그인 / 회원가입 (email + password, Google OAuth button using the product's own `google-symbol.png`).
3. **ProjectScreen** — search field, project feed cards, sticky 새 프로젝트 추가 CTA, create modal with the unsaved-work AlertModal.
4. **TodoScreen** — 어떤 일정을 만들까요? composer, todos grouped by member, confirm checkboxes, 새 일정 만들기 modal.
5. **CalendarScreen** — week strip, all-day lane, 24h grid (60px/hour) with event blocks; tapping an event opens the read-only 일정 상세 modal.
6. **ProfileScreen** — 마이페이지 with profile summary, edit modal and the user's own projects.

Header (global / project variants), bottom navigation and the theme popover are shared; the theme popover toggles `.dark` on `<html>`, so dark mode can be checked live.

## Files
- `index.html` — entry, loads `styles.css` + `_ds_bundle.js` + screens
- `App.jsx` — shell, routing, mock data, toasts
- `LandingScreen.jsx`, `AuthScreen.jsx`, `ProjectScreen.jsx`, `TodoScreen.jsx`, `CalendarScreen.jsx`, `ProfileScreen.jsx`
- `data.js` — the same mock data, if you want it standalone

## Deliberately omitted
Password reset screens, project join password modal, image upload, infinite-scroll paging and Supabase wiring — present in the product but not needed to read the design.
