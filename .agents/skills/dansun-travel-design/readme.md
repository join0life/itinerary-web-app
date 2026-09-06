# 단순여행 Design System

여행/모임 일정을 **프로젝트 단위**로 묶어 캘린더와 할 일 목록을 한 화면에서 관리하는 웹앱, 단순여행의 디자인 시스템입니다.
20~30대 친구 모임·소모임이 함께 쓰는 도구이며, 모바일 사용 비중이 높고 다크모드는 부가 기능이 아니라 기본 기능입니다.

## Sources

| Source | What was used |
|---|---|
| `uploads/DESIGN.md` (user-authored spec) | **Canonical** color/type/spacing/component values. All tokens here come from it. |
| GitHub: <https://github.com/join0life/itinerary-web-app> (branch `main`) | Screen structure, component inventory, layout values, copy, assets. Files read are listed in `github.md`. |
| Live product | <https://itinerary-web-app-three.vercel.app/> |

Both sources are worth exploring further if you have access — the repo in particular holds the real screen composition (`src/pages/`, `src/components/`), the shipped semantic-token file (`src/styles/design-system.css`) and the token export (`tokens/design-tokens.json`). Reading them will let you build much more faithful designs than this summary alone.

### One deliberate divergence
The shipped app implements its palette on **Tailwind primitives** (`orange-500` primary, `orange-400` brand, `teal` accent, neutral gray) while `DESIGN.md` specifies a **warmer, hand-picked palette** (coral `#FF6F4D`, mint `#2FBF8F`, warm grays). This system follows `DESIGN.md`, and keeps the app's *semantic names* (`--brand`, `--calendar-event`, `--action-primary-hover`, `--app-shell-max-width`…) so kit code and product code line up 1:1. Typography likewise follows `DESIGN.md` (Pretendard) while keeping the product's real brand display font, **JejuStoneWall**, for the wordmark.

---

## Index

- `styles.css` — the single entry point consumers link. `@import` list only.
- `tokens/` — `colors.css`, `semantic.css`, `typography.css`, `spacing.css`, `motion.css`, `fonts.css`, `base.css`
- `tokens/tokens.json` — the same tokens in W3C DTCG format (dark-mode values under `$extensions["kr.dansun.dark"]`); `tokens/tokens.flat.json` is a flat `--var → {value, dark, type}` map. The CSS stays the source of truth — after editing `tokens/*.css`, ask the design agent to re-export the JSON (it parses every `:root` / `.dark` block, infers `$type`, and rewrites both files). No build step lives in this project: a Node script here would be picked up by the component compiler.
- `guidelines/` — 17 foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — reusable primitives, grouped (below)
- `ui_kits/dansun-app/` — click-through recreation of the whole app (see its README)
- `templates/app-screen/` — starting-point template: full app shell with header, content and bottom nav
- `assets/` — the product's own avatars + Google symbol
- `github.md` — source repo association and screen map
- `SKILL.md` — Agent-Skills wrapper

### Components

**forms/** — `Button`, `Input`, `Textarea`, `Label`, `Checkbox`, `Switch`, `Select`, `InputGroup` (+ `InputGroupAddon`, `InputGroupInput`)
**surfaces/** — `Card` (+ `CardTitle`, `CardDescription`)
**overlays/** — `Dialog`, `AlertModal`, `Popover`
**feedback/** — `Empty`, `Loader`, `Toast`, `Badge`
**calendar/** — `WeekStrip`, `WeeklyCalendar`, `CalendarEventItem`, `AlldayEventBar`
**app/** — `AppHeader`, `BottomNav`, `ProjectCard`, `TodoItem`, `CreateTodoPrompt`, `ProfileSummary`
**icons/** — `Icon`

Each directory has a `@dsCard` showcase HTML; each component has a `.d.ts` props contract and a `.prompt.md` usage note.

#### Intentional additions
- **`Icon`** — the product imports icons directly from `lucide-react`, which has no browser equivalent here. `Icon` wraps the Lucide CDN so kit code never inlines SVG.
- **`Badge`** — generalised from the product's `more-event-badge` and the project card's owner chip, which were one-off markup.
- **`AlldayEventBar` / `WeekStrip` / `WeeklyCalendar`** — extracted from `allday.tsx`, `calendar-header.tsx`, `weekly-calendar.tsx`; same values, simplified logic.

Everything else maps to a real file in `src/components/`. Families in the repo that are **not** rebuilt as primitives: the react-day-picker month calendar (`ui/calendar.tsx`) and the date/time pickers built on it, because they are third-party surface; the kit uses plain text fields in those slots.

---

## Content fundamentals

**Language.** All UI copy is Korean. English appears only for placeholders that are conventionally English (`Email`, `Password`) and for the theme menu (`system` / `light` / `dark`, lowercase).

**Voice: 해요체 questions, not commands.** The product asks rather than instructs. The 일정 composer says **"어떤 일정을 만들까요?"** — not "일정 추가". Empty states are two lines: what's missing, then an invitation.

> 등록된 일정이 없습니다.
> 첫 번째 일정을 등록해 보세요.

**Person.** Second person is implied, never spelled out (no 당신/귀하). The user is addressed through the verb ending: "…등록해 보세요", "비밀번호를 잊어버렸나요?", "아직 계정이 없으신가요? 회원가입".

**Buttons are 2–5 characters.** 확인 · 취소 · 삭제 · 로그인 · 참여 · 시작하기 · 새 프로젝트 추가. Never "저장하기 →" or sentence-long labels. The confirming button is always 확인 (not 저장), and it sits on the right of the pair.

**Errors and warnings are complete sentences, plain-spoken, 합니다체.**

> 일정 작성이 마무리되지 않았습니다.
> 이 화면에서 나가면 작성 중이던 내용이 사라집니다.
> 입장에 실패했습니다. 비밀번호를 다시 입력해주세요.

**Labels are single nouns.** 제목 · 하루종일 · 시작 · 종료 · 위치 · 메모 · 프로젝트 이름 · 자세한 설명 · 비밀번호. No colons, no "(선택)" suffixes.

**Casing & punctuation.** No ALL CAPS anywhere. No exclamation marks in system copy. Ellipsis only in search placeholders (`키워드 입력...`). Dates render as `2026년 9월` in headers and `2026. 09. 08 09:00` in fields; the day letters are 일 월 화 수 목 금 토.

**Marketing voice** is one line, brand font, no adjectives stacked: **"여행을 단순하게 / 단순여행"**.

**Emoji: never.** Neither in UI copy nor in labels. Status is carried by an icon plus a word.

---

## Visual foundations

**Palette.** One warm coral (`--color-primary-500` `#FF6F4D`) carries every "look here" moment: the primary CTA, the selected date circle, the all-day bar, the project name in the project header, the landing hero. A calm mint (`#2FBF8F`) is the *only* other saturated colour and is reserved for confirm/complete. Neutrals are warm (`#FAF9F7` page, `#F1EFEC` muted, `#252220` ink) — never blue-gray. Colour is rationed on purpose: a screen typically shows coral in exactly one or two places against warm paper.

**Dark mode** is a first-class pair, not a filter. Surfaces go `#121212` / `#181818` / `#1F1F1F`, ink `#F5F5F5`, and coral brightens slightly (`#FF6F4D` → `#FF7A56`) to hold saturation on dark ground. Shadows are dropped entirely in dark and replaced by a 1px `--border-default` hairline. Toggle by putting `.dark` on `<html>`.

**Type.** Pretendard for everything functional (15px/1.6 body, 600-weight headings at 16/18/22/26px); JejuStoneWall — a rough, carved Korean display face — only for the wordmark and the landing hero. Numbers in calendars, times and dates use `font-variant-numeric: tabular-nums` so columns don't shimmer.

**Spacing** is a strict 4px scale, used at three densities: 12px inside a card, 16px card padding and between list items, 24px between sections, 32–48px for page breathing room on desktop. The app shell is capped at 600px (`--app-shell-max-width`) and centred with a soft outer shadow even on wide screens — the desktop experience is intentionally the mobile layout, centred.

**Corner radii** step by role: 10px inputs, 12px list cards, 16px cards and any photo/media, 20px modals, full pills for avatars and toggles. Nothing is square, nothing is a squircle.

**Cards.** White (`--surface-card`), 16px radius, 16px padding, `0 2px 8px rgba(0,0,0,0.06)` — a shadow you have to look for. The project-feed variant is flatter still: muted `#F1EFEC` fill, 12px radius, no shadow, fixed 160px height. Schedule cards may carry a 4px coloured left bar to mark project/category; that bar is the only "accent border" pattern in the system.

**Backgrounds.** No photography, no gradients, no textures, no patterns. The single full-bleed surface in the product is the landing hero: flat coral, wordmark centred. Illustration direction is flat two-colour (coral + mint) for empty states — none exist in the source yet, so empty states currently ship as centred text.

**Borders and dividers.** 1px `--border-default` (`#E4E1DC`) for real separations; `--border-subtle` for hairlines inside dense grids. The calendar uses dividers as structure: 1/7-width columns with left hairlines, dashed border under the all-day lane, one hairline per hour row.

**Transparency and blur.** Only for modal overlays: `rgba(37,34,32,0.45)` light, `rgba(0,0,0,0.6)` dark. No frosted glass, no translucent chrome, no blurred sticky headers.

**Animation.** Short and functional: 120ms `cubic-bezier(0.2,0,0,1)` on colour/border/shadow/transform; 180–200ms fade+scale(0.95→1) for modals and popovers. Nothing bounces, springs, slides in on scroll, or loops. The only continuous motion in the product is the loader spinner.

**Interaction states.**
- *Hover*: fill darkens one step (`--action-primary-hover`); ghost items pick up `--action-ghost-hover`; text links underline.
- *Press*: `scale(0.98)` plus one more colour step down.
- *Focus*: 1px coral border + `0 0 0 3px` coral-100 ring (`--focus-ring`). Outlines are never simply removed.
- *Disabled*: neutral fill + `--text-disabled` text, **never opacity** — chosen so colour-blind users still read the state.
- *Active nav*: ink-coloured icon + label; inactive is muted. Coral is not used for tab selection.

**Layout rules.** Header 60px and bottom nav 60px are fixed/sticky; the calendar's floating create CTA sits 80px above the bottom nav at `--project-create-action-max-width`. Touch targets are never below 44px. Breakpoints: 4-col ≤767px, 8-col/720px ≤1023px, 12-col/1080px above — the calendar splits into two columns from tablet up, and tab-switches on mobile.

**Imagery mood.** Warm and unfussy. Only two real images exist in the source: the product's placeholder dog avatars, always circle-cropped. Any real photography should follow the card radius (16px) and stay warm-toned.

---

## Iconography

- **Set: Lucide.** The product imports `lucide-react` everywhere (`Home`, `Folder`, `ListTodo`, `Calendar`, `PlusCircleIcon`, `SearchIcon`, `SunIcon`, `ChevronLeft/Right`, `CheckIcon`, `XIcon`, `LoaderCircleIcon`, `Trash2`, `CircleCheck`, `TriangleAlert`, `OctagonX`, `Info`). There is **no** custom icon font, sprite sheet, or bespoke SVG set in the repo — so nothing to copy in.
- **How it's wired here:** `components/icons/Icon.jsx` loads `lucide-static` from CDN (`unpkg.com/lucide-static@0.542.0/icons/<name>.svg`) as a CSS mask, so icons inherit `currentColor` and no SVG is hand-drawn. Use `<Icon name="calendar" size={20} />`.
- **Stroke weight — flagged substitution.** `DESIGN.md` §6 asks for 1.5px rounded outline strokes; Lucide's static SVGs ship at 2px and the mask technique can't restyle them. The product itself renders Lucide at its default weight, so this system matches the product, not the doc. If you want the 1.5px look, we need either `lucide-react`-style inline rendering or a stroke-adjusted asset set.
- **Sizes:** 16px inline (row actions), 20px nav/header, 22–24px composer and week navigation. Filled icons are reserved for "selected" states; everything else is outline.
- **Unicode/emoji as icons: never.** The only non-Lucide glyph in the product is the `+2` overflow badge, which is text.
- **Logo: none exists.** The repo renders the brand as text and leaves a `@TODO 텍스트 → 로고 이미지로 대체` comment in `global-header.tsx`. No mark has been drawn or invented here — the wordmark is set in JejuStoneWall wherever a logo would go (see the Brand cards). **Please send a logo file when one exists.**

---

## Using this system

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

```jsx
const { Button, Card, WeekStrip } = window.DesignSystem_2c1582;
```

Dark mode: `document.documentElement.classList.toggle("dark")`.
