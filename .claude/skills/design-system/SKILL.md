---
name: design-system
description: Use when writing, reviewing, or refactoring UI code in packages/app-web that touches design tokens, Tailwind v4 classes, CSS variables, or shadcn/ui components — enforces this project's token → CSS variable → Tailwind utility → component abstraction chain, shadcn variable mapping, and file-editing priority.
category: design-system
---

# Design System Skill

이 프로젝트(`packages/app-web`)는 Tailwind CSS v4, shadcn/ui, CSS variables, design token 기반 디자인 시스템을 사용한다.

디자인 시스템 관련 작업을 할 때는 이 문서를 기준으로 코드를 작성하거나 리팩터링한다.

---

## 1. Core Principle

디자인 시스템의 목표는 개발자가 토큰명, CSS variable, 긴 Tailwind arbitrary value를 외우지 않게 만드는 것이다.

권장 추상화 흐름:

```txt
design token
→ CSS variable
→ Tailwind theme variable
→ Tailwind semantic utility
→ React component
→ component props
```

사용부에서는 가능한 한 아래처럼 작성한다.

```tsx
<Button variant="primary" />
<ProjectItemCard selected={isSelected} />
<Card variant="interactive" />
```

다음 방식은 피한다.

```tsx
<div className="bg-[var(--primary)] text-[var(--primary-foreground)]" />
<div className="rounded-[var(--component-card-radius)] p-[var(--component-card-padding)]" />
```

---

## 2. Source of Truth

디자인 토큰의 의미상 원본은 다음 파일이다.

- `packages/tokens/src/design-tokens.json` (패키지 `@itinerary/tokens`)

앱이 실제로 로드하는 디자인 시스템 산출물은 다음 파일이다.

- `packages/app-web/src/styles/design-system.css` (손으로 관리, `packages/app-web/src/index.css`에서 import)

**주의**: `@itinerary/tokens`에는 `gen:css` 스크립트(`packages/tokens/src/scripts/generate-css.ts`)가 있지만, 그 출력 경로(`packages/tokens/styles/tokens.css`)는 현재 `app-web`에서 import되지 않는다. 즉 두 파일은 자동으로 동기화되지 않으며, `design-system.css`가 실제 런타임 소스다. 새 시맨틱 토큰을 추가할 때는 `design-system.css`를 직접 수정하되, 가능하면 `design-tokens.json`에도 대응 값을 함께 반영해 두 소스가 벌어지지 않게 한다.

수정 우선순위:

1. `packages/app-web/src/styles/design-system.css`
2. `packages/tokens/src/design-tokens.json` (의미 동기화용)
3. Tailwind semantic utility
4. React component abstraction
5. 화면 코드

primitive token은 컴포넌트에서 직접 사용하지 않는다.

---

## 3. Tailwind CSS v4 Policy

이 프로젝트는 Tailwind CSS v4 문법을 기준으로 한다.

- `@import "tailwindcss";`를 사용한다.
- theme 확장은 가능하면 `tailwind.config.ts`가 아니라 CSS의 `@theme`에서 정의한다.
- `tailwind.config.*`는 필요한 경우에만 최소 수정한다.
- 새로 `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`를 추가하지 않는다.

실제 전역 CSS(`packages/app-web/src/index.css`):

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "./styles/design-system.css";
```

---

## 4. design-system.css Structure

`packages/app-web/src/styles/design-system.css`는 아래 구조를 따른다.

```css
@theme inline {
  /* Tailwind utility로 노출할 theme variables */
}

:root {
  /* light theme runtime CSS variables */
}

.dark {
  /* dark theme runtime CSS variables */
}

@layer base {
  /* global base styles */
}
```

`var(--*)`는 원칙적으로 이 파일 내부에서만 사용한다.

---

## 5. Token Conversion Rules

토큰 변환 규칙:

1. token path는 kebab-case CSS variable로 변환한다.
   - `color.semantic.status.info`
   - `--color-semantic-status-info`

2. alias token은 CSS variable 참조로 변환한다.
   - `{color.primitive.white}`
   - `var(--color-white)`

3. light/dark theme는 `:root`와 `.dark`에 분리한다. `.dark`에는 실제로 값이 달라지는 semantic 관계만 적되, primitive 값(`--color-primary-500` 등)은 primitive 섹션에서 통째로 재정의한다.

4. React className에서 사용할 값은 `@theme inline`에 등록해 Tailwind utility로 노출한다.

예 (`design-system.css`에 이미 존재하는 실제 패턴):

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-border: var(--border);
  --color-ring: var(--ring);
  --color-status-info: var(--color-semantic-status-info);
  --color-status-warning: var(--color-semantic-status-warning);

  --radius-card: 16px;
  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.06);
}
```

사용:

```tsx
className = "bg-card text-card-foreground rounded-card shadow-card";
className = "bg-secondary/10 border-secondary/20 text-secondary"; // 옅은 tint는 색상 utility에 /opacity를 붙여 만든다
```

---

## 6. shadcn/ui Mapping

shadcn/ui 호환 CSS variables를 반드시 포함한다.

필수 변수:

```txt
--background
--foreground
--card
--card-foreground
--popover
--popover-foreground
--primary
--primary-foreground
--secondary
--secondary-foreground
--muted
--muted-foreground
--accent
--accent-foreground
--destructive
--destructive-foreground
--border
--input
--ring
--radius
```

컴포넌트에서는 아래 utility를 우선 사용한다.

```tsx
className = "bg-background text-foreground";
className = "bg-card text-card-foreground";
className = "bg-primary text-primary-foreground";
className = "bg-muted text-muted-foreground";
className = "border-border ring-ring";
```

---

## 7. Dark Mode

dark mode는 class 기반으로 관리한다 (`@custom-variant dark (&:where(.dark, .dark *));`, `packages/app-web/src/styles/design-system.css`에 이미 정의됨).

규칙:

- `.dark` 안에서 primitive token을 직접 남발하지 않는다. primitive 값 자체가 바뀌는 경우(`--color-primary-500` 등)는 primitive 섹션에서 재정의하고, semantic 매핑이 실제로 달라지는 경우만 `.dark`에 개별 적는다.
- light/dark 차이는 semantic token과 shadcn variable mapping에서 해결한다.
- 컴포넌트에서 dark mode 색상을 직접 하드코딩하지 않는다.
- `color-mix()`는 구형 WebView에서 지원되지 않으므로 사용하지 않는다. hover/pressed 같은 파생 색상은 라이트/다크 각각 미리 계산한 hex 값으로 `design-system.css`에 직접 적는다.

---

## 8. Utility Abstraction Rules

React className에서는 `var(--*)` 직접 참조보다 Tailwind utility를 우선 사용한다.

비권장:

```tsx
className = "bg-[var(--primary)] text-[var(--primary-foreground)]";
className = "rounded-[var(--component-card-radius)] p-[var(--component-card-padding)]";
```

권장:

```tsx
className = "bg-primary text-primary-foreground";
className = "rounded-card p-4";
```

더 권장:

```tsx
<Button variant="primary" />
<Card variant="interactive" />
```

반복 사용되는 component token은 아래 중 하나로 감싼다.

1. `@theme inline` 기반 utility
2. React component
3. cva variant

---

## 9. Semantic Utility and Variant Boundary

일반 레이아웃과 조합 UI에서는 semantic utility를 직접 사용한다.

```tsx
<section className="bg-background text-foreground">
  <div className="bg-muted text-muted-foreground">...</div>
</section>
```

재사용 컴포넌트에서는 색상, 상태, 크기처럼 반복되는 스타일 조합을 variant API로 한 번 더 캡슐화한다.

```tsx
const buttonVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      brand: "bg-brand text-brand-foreground hover:bg-brand-hover",
      destructiveGhost:
        "text-destructive hover:bg-accent hover:text-destructive",
    },
    size: {
      xs: "h-7 px-2.5 text-xs",
      xl: "h-12 px-4 text-base",
    },
  },
});
```

재사용 컴포넌트 호출부에서는 semantic utility 조합을 다시 작성하지 않는다.

비권장:

```tsx
<Button className="bg-brand text-brand-foreground hover:bg-brand-hover px-4 py-6 text-base">
  새 프로젝트 추가
</Button>
```

권장:

```tsx
<Button variant="brand" size="xl" className="fixed bottom-20 w-full">
  새 프로젝트 추가
</Button>
```

호출부 `className`에는 해당 화면에서만 필요한 배치 스타일을 남길 수 있다.

```txt
허용: fixed, absolute, flex-1, w-full, max-w-*, translate-*, margin
variant로 이동: bg-*, text-*, border-*, hover:*, active:*, focus:*, disabled:*
size prop으로 이동: 반복되는 height, padding, gap, font-size 조합
```

판단 기준:

1. 한 화면의 구조와 배치를 표현하는 스타일은 호출부에 둔다.
2. 여러 호출부에서 재사용할 수 있는 시각적 의미는 semantic utility 조합으로 만든다.
3. 재사용 컴포넌트의 semantic utility 조합은 cva variant 또는 component props로 노출한다.
4. hover, active, focus, disabled 상태는 가능한 한 variant 내부에서 함께 관리한다.
5. 단발성 배치 차이를 위해 불필요한 variant를 만들지 않는다.

---

## 10. Component Abstraction Rules

의미 있는 UI 단위는 CSS class만으로 관리하지 말고 React component로 만든다.

권장:

```tsx
<ProjectItem selected={isSelected}>...</ProjectItem>
```

비권장:

```tsx
<div className="project-item project-item-selected">...</div>
```

이 프로젝트의 실제 앱 전용 UI 예 (`packages/app-web/src/components/`):

```txt
project/project-item.tsx
todo/todo-item.tsx
calendar/calendar-event-item.tsx
layout/bottom-navigation-bar.tsx
layout/header/project-header.tsx
```

개발자가 외워야 하는 것은 class 이름이 아니라 component API다.

---

## 11. Component Styling Rules

컴포넌트 내부에서도 가능한 한 semantic utility 또는 custom utility를 사용한다.

권장:

```tsx
function ProjectItem({ selected, className, ...props }: ProjectItemProps) {
  return (
    <div
      data-selected={selected ? "true" : undefined}
      className={cn(
        "bg-card text-card-foreground hover:bg-muted flex w-full cursor-pointer flex-col gap-3 rounded-2xl p-4 transition-colors",
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground",
        className,
      )}
      {...props}
    />
  );
}
```

비권장:

```tsx
function ProjectItem({ className, ...props }: ProjectItemProps) {
  return (
    <div
      className={cn(
        "h-[var(--component-project-item-height)] rounded-[var(--component-project-item-radius)] bg-[var(--component-project-item-bg)] p-[var(--component-project-item-padding)]",
        className,
      )}
      {...props}
    />
  );
}
```

`cn`은 `@itinerary/shared`에서 import한다.

---

## 12. Variant Rules

variant, size, state가 있는 컴포넌트는 `class-variance-authority` 또는 shadcn/ui의 cva 패턴을 우선 사용한다 (`packages/app-web/src/components/ui/button.tsx` 참고).

cva 내부에서도 `var(--*)`보다 semantic utility를 우선 사용한다.

```tsx
const projectItemVariants = cva(
  ["flex w-full cursor-pointer flex-col gap-3 rounded-2xl p-4 transition-colors", "bg-card text-card-foreground hover:bg-muted"],
  {
    variants: {
      selected: {
        true: "bg-accent text-accent-foreground",
        false: "",
      },
      disabled: {
        true: "cursor-not-allowed opacity-60",
        false: "",
      },
    },
    defaultVariants: {
      selected: false,
      disabled: false,
    },
  },
);
```

---

## 13. Styling Priority

스타일 적용 우선순위:

1. React component API
2. component variant props
3. shadcn/ui semantic utility
4. custom design-system utility
5. `@theme inline`에 노출된 component token
6. `design-system.css` 내부 CSS variable
7. hard-coded value

hard-coded value는 피한다.

---

## 14. Accessibility Rules

1. 텍스트 대비는 WCAG AA 수준을 목표로 한다 (본문 4.5:1 이상, 큰 텍스트 3:1 이상).
2. disabled state는 opacity만 쓰지 말고 text, bg, border token을 구분한다.
3. focus state는 `ring-ring`, `focus-visible:ring-2`, component focus utility를 사용한다.
4. hover, active, focus, disabled 상태는 가능하면 component variant로 정의한다.
5. clickable card는 keyboard interaction, focus-visible, role 또는 semantic element를 고려한다.
6. `div`에 click handler를 넣는 경우 가능한 한 `button`, `a` 등 semantic element로 대체한다.
7. 상태(완료/임박/지연 등)는 색상만으로 전달하지 않고 아이콘 또는 텍스트 라벨을 함께 사용한다.

---

## 15. Expected Workflow

디자인 시스템 작업 순서:

1. `packages/app-web/src/styles/design-system.css`에서 관련 토큰이 이미 있는지 확인한다.
2. 없으면 `packages/app-web/src/styles/design-system.css`에 semantic token을 추가하고 (섹션 2 참고) `packages/tokens/src/design-tokens.json`에도 대응 값을 반영한다.
3. `@theme inline`에 Tailwind utility로 노출할 token을 등록한다.
4. shadcn/ui 필수 variables가 깨지지 않았는지 확인한다.
5. `:root`와 `.dark`에 theme 값을 분리한다.
6. 반복되는 UI 패턴을 찾는다.
7. 의미 있는 UI 단위는 React component로 추상화한다.
8. className의 `bg-[var(--*)]`, `text-[var(--*)]`, `rounded-[var(--*)]`, `p-[var(--*)]`를 semantic utility나 component API로 대체한다.
9. 일반 레이아웃과 조합 UI에는 semantic utility를 직접 사용한다.
10. 재사용 컴포넌트 호출부에 반복되는 semantic utility 조합은 variant API로 이동한다.
11. 호출부에는 화면 배치에 필요한 className만 남긴다.
12. 기존 기능, 레이아웃, 접근성 동작을 유지한다.

---

## 16. File Editing Priority

디자인 시스템 관련 작업을 할 때 우선 확인할 파일:

1. `packages/app-web/src/styles/design-system.css`
2. `packages/tokens/src/design-tokens.json`
3. 전역 CSS: `packages/app-web/src/index.css`
4. shadcn/ui component: `packages/app-web/src/components/ui/{button,input,card,dialog,checkbox}.tsx`
5. 앱 전용 component: `packages/app-web/src/components/{project/project-item,todo/todo-item,calendar/calendar-event-item,layout/bottom-navigation-bar}.tsx`

Tailwind v4 프로젝트에서는 `tailwind.config.*`보다 CSS의 `@theme inline` 수정을 우선한다.

---

## 17. Do Not

- 컴포넌트에 새 디자인 값을 hard-code하지 않는다.
- primitive token을 컴포넌트 className에 직접 매핑하지 않는다.
- React className에 `bg-[var(--*)]`, `text-[var(--*)]`, `rounded-[var(--*)]`, `p-[var(--*)]`, `h-[var(--*)]`를 반복적으로 남기지 않는다.
- Tailwind v3 방식 설정을 새로 추가하지 않는다.
- 기존 shadcn/ui variant API를 임의로 깨지 않는다.
- 접근성 상태인 focus, disabled, destructive 스타일을 제거하지 않는다.
- 의미 있는 UI 단위를 CSS class만으로 관리하지 않는다.
- 재사용 컴포넌트 호출부에서 동일한 semantic utility 조합을 반복하지 않는다.
- `color-mix()`를 다크모드 파생 색상에 사용하지 않는다 (구형 WebView 미지원, 섹션 7 참고).
