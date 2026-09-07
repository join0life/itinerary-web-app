repo: join0life/itinerary-web-app
branch: main

## Last sync
date: 2026-09-05T02:41:04Z

### Updated in this project
- Built the token layer (colors, type, spacing, motion) from DESIGN.md + the repo's design-system.css
- Recreated the app's component inventory (forms, overlays, feedback, calendar, app shell) as React primitives
- Built the 단순여행 web app UI kit (landing, auth, projects, todos, calendar, profile)
- Copied the product's own avatar and Google symbol assets into `assets/`

## Screen map
| Project screen | Repo files |
|---|---|
| ui_kits/dansun-app/LandingScreen.jsx | src/pages/index-page.tsx |
| ui_kits/dansun-app/AuthScreen.jsx | src/pages/sign-in-page.tsx, src/pages/sign-up-page.tsx |
| ui_kits/dansun-app/ProjectScreen.jsx | src/pages/project-page.tsx, src/components/project/*, src/components/modal/project-editor-modal.tsx |
| ui_kits/dansun-app/TodoScreen.jsx | src/pages/todo-page.tsx, src/components/todo/*, src/components/modal/todo-editor-modal.tsx |
| ui_kits/dansun-app/CalendarScreen.jsx | src/pages/calendar-page.tsx, src/components/calendar/* |
| ui_kits/dansun-app/ProfileScreen.jsx | src/pages/profile-detail-page.tsx, src/components/profile/* |
| components/app/AppHeader.jsx, BottomNav.jsx | src/components/layout/header/*, src/components/layout/bottom-navigation-bar.tsx |
| components/forms/*, components/overlays/*, components/feedback/* | src/components/ui/* |
| tokens/*.css | src/styles/design-system.css, tokens/design-tokens.json, src/index.css |
