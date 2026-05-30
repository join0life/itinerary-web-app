# Design System Skill

이 프로젝트는 Tailwind CSS v4, shadcn/ui, CSS variables 기반 디자인 시스템을 사용한다.

## Source of Truth

디자인 토큰 원본은 다음 파일이다.

- `tokens/design-tokens.json`

Codex는 색상, spacing, radius, typography, shadow, component style을 수정할 때 반드시 이 파일을 먼저 참고해야 한다.

디자인 토큰의 기준은 다음 순서를 따른다.

1. `tokens/design-tokens.json`
2. `src/styles/design-system.css`
3. 실제 컴포넌트 className

컴포넌트에서 hard-coded color, px, arbitrary value를 먼저 추가하지 않는다.

## Tailwind Version Policy

이 프로젝트는 Tailwind CSS v4 문법을 기준으로 한다.

Tailwind CSS v4에서는 CSS-first configuration을 우선 사용한다.

- `@import "tailwindcss";`를 사용한다.
- Tailwind theme 확장은 가능하면 `tailwind.config.ts`가 아니라 CSS의 `@theme`에서 정의한다.
- 커스텀 디자인 토큰은 CSS variable과 `@theme`를 통해 Tailwind utility로 노출한다.
- `tailwind.config.ts`는 필요한 경우에만 최소한으로 유지한다.
- 기존 Tailwind v3 문법인 `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`를 새로 추가하지 않는다.

## Output CSS

토큰을 CSS variables와 Tailwind v4 theme variables로 변환한 결과는 다음 파일에 작성한다.

- `src/styles/design-system.css`

프로젝트의 전역 CSS 파일에서는 다음처럼 불러온다.

```css
@import "tailwindcss";
@import "./design-system.css";
```

단, 프로젝트 구조에 따라 import path는 조정할 수 있다.

## Output CSS Structure

`src/styles/design-system.css`는 다음 구조를 따른다.

```css
@theme {
  /* Tailwind utility로 노출할 theme variables */
}

:root {
  /* light theme runtime CSS variables */
}

.dark {
  /* dark theme runtime CSS variables */
}

@layer base {
  /* 전역 base style */
}

@layer components {
  /* 필요한 경우 token 기반 component class */
}
```

## Token Conversion Rules

1. `tokens/design-tokens.json`의 primitive token은 직접 컴포넌트에 사용하지 않는다.

2. 컴포넌트 스타일은 semantic token 또는 component token을 우선 사용한다.

3. CSS variable 이름은 token path를 kebab-case로 변환한다.

   예:

   - `color.semantic.bg.default`
   - `--color-semantic-bg-default`

4. alias token은 CSS variable 참조로 변환한다.

   예:

   - `{color.primitive.white}`
   - `var(--color-primitive-white)`

5. light/dark theme가 있으면 runtime variable은 `:root`와 `.dark`에 나누어 작성한다.

   예:

   ```css
   :root {
     --color-semantic-bg-default: var(--color-primitive-neutral-0);
   }

   .dark {
     --color-semantic-bg-default: var(--color-primitive-neutral-950);
   }
   ```

6. Tailwind utility로 사용해야 하는 값은 `@theme`에 등록한다.

   예:

   ```css
   @theme {
     --color-background: var(--background);
     --color-foreground: var(--foreground);
     --color-card: var(--card);
     --color-card-foreground: var(--card-foreground);
     --color-primary: var(--primary);
     --color-primary-foreground: var(--primary-foreground);
     --color-secondary: var(--secondary);
     --color-secondary-foreground: var(--secondary-foreground);
     --color-muted: var(--muted);
     --color-muted-foreground: var(--muted-foreground);
     --color-accent: var(--accent);
     --color-accent-foreground: var(--accent-foreground);
     --color-destructive: var(--destructive);
     --color-destructive-foreground: var(--destructive-foreground);
     --color-border: var(--border);
     --color-input: var(--input);
     --color-ring: var(--ring);

     --radius-sm: var(--radius-sm);
     --radius-md: var(--radius-md);
     --radius-lg: var(--radius-lg);
     --radius-xl: var(--radius-xl);

     --spacing-page-x: var(--spacing-semantic-page-x);
     --spacing-page-y: var(--spacing-semantic-page-y);
     --spacing-section-gap: var(--spacing-semantic-section-gap);
     --spacing-item-gap: var(--spacing-semantic-item-gap);

     --shadow-app-shell: var(--shadow-app-shell);
   }
   ```

7. `@theme`에 등록한 color token은 Tailwind utility로 사용한다.

   예:

   - `bg-background`
   - `text-foreground`
   - `bg-primary`
   - `text-primary-foreground`
   - `border-border`
   - `ring-ring`

8. component token은 필요하면 arbitrary property 형태로 사용한다.

   예:

   ```tsx
   className="bg-[var(--component-button-primary-bg)] text-[var(--component-button-primary-text)] rounded-[var(--component-button-radius)]"
   ```

9. 반복적으로 등장하는 token arbitrary value는 컴포넌트 코드에 계속 남기지 않는다.

   `size-[var(--size-icon-md)]`, `gap-[var(--spacing-2)]`, `rounded-[var(--radius-full)]`처럼 여러 파일에서 반복되는 값은 다음 순서로 숨긴다.

   1. Tailwind utility로 쓰기 좋은 값은 `@theme`에 등록한다.

      예:

      ```css
      @theme {
        --spacing-icon-sm: var(--size-icon-sm);
        --spacing-icon-md: var(--size-icon-md);
        --spacing-icon-lg: var(--size-icon-lg);
      }
      ```

      ```tsx
      className="size-icon-md"
      ```

   2. component behavior나 조합 스타일은 `@layer components`에 token 기반 class로 만든다.

      예:

      ```css
      @layer components {
        .icon-md {
          width: var(--size-icon-md);
          height: var(--size-icon-md);
        }

        .header-icon-trigger {
          border-radius: var(--radius-full);
          padding: var(--spacing-2);
          outline: none;
        }

        .header-icon-trigger:hover {
          background: var(--muted);
        }

        .header-icon-trigger:focus-visible {
          box-shadow: var(--component-button-focus-ring);
        }
      }
      ```

      ```tsx
      className="header-icon-trigger"
      ```

   3. 같은 class 조합이 특정 React 역할로 반복되면 작은 wrapper component로 분리한다.

      예: `HeaderIconButton`, `AvatarImage`, `CalendarCellButton`

   단, 한두 번만 쓰이는 값이나 Radix/라이브러리 내부 상태 selector와 강하게 묶인 값은 과도하게 추상화하지 않는다.

10. shadcn/ui의 기본 variant 구조에서는 가능한 한 semantic utility를 우선 사용한다.

   예:

   ```tsx
   className="bg-primary text-primary-foreground hover:bg-primary/90"
   ```

11. 기존 UI를 수정할 때 hard-coded color, px, arbitrary value를 줄이고 design token 기반 변수로 교체한다.

12. token 도입 작업은 두 단계로 진행한다.

    1. 1차 이행: hard-coded value를 semantic/component token으로 교체한다.
    2. 2차 정리: 반복되는 `var()` 기반 arbitrary class를 `@theme` utility, `@layer components` class, wrapper component로 숨긴다.

    2차 정리 후 컴포넌트 파일은 가능한 한 다음처럼 읽혀야 한다.

    ```tsx
    <PopoverTrigger className="header-icon-trigger">
      <SunIcon className="icon-md" />
    </PopoverTrigger>
    ```

    다음처럼 token 문법이 과하게 노출된 상태를 장기적으로 유지하지 않는다.

    ```tsx
    <PopoverTrigger className="rounded-[var(--radius-full)] p-[var(--spacing-2)] focus-visible:shadow-[var(--component-button-focus-ring)]">
      <SunIcon className="size-[var(--size-icon-md)]" />
    </PopoverTrigger>
    ```

## Dark Mode Policy

이 프로젝트의 dark mode는 class 기반 dark mode를 사용한다.

Tailwind v4에서 `.dark` class 기반 dark variant가 필요하면 전역 CSS에 다음 선언을 포함한다.

```css
@custom-variant dark (&:where(.dark, .dark *));
```

dark mode token은 단순 색 반전이 아니라 별도의 semantic value로 정의한다.

예:

```css
:root {
  --background: var(--color-semantic-bg-default);
  --foreground: var(--color-semantic-text-primary);
}

.dark {
  --background: var(--color-semantic-bg-default);
  --foreground: var(--color-semantic-text-primary);
}
```

주의:

- `.dark` 안에서는 primitive token을 직접 남발하지 않는다.
- 가능하면 `color.semantic.*` 값을 theme별로 바꾼다.
- focus ring, destructive, border, muted surface는 light/dark 각각 명확히 구분한다.

## shadcn/ui Variable Mapping

shadcn/ui와 호환되는 CSS variables를 반드시 포함한다.

필수 variable:

- `--background`
- `--foreground`
- `--card`
- `--card-foreground`
- `--popover`
- `--popover-foreground`
- `--primary`
- `--primary-foreground`
- `--secondary`
- `--secondary-foreground`
- `--muted`
- `--muted-foreground`
- `--accent`
- `--accent-foreground`
- `--destructive`
- `--destructive-foreground`
- `--border`
- `--input`
- `--ring`
- `--radius`

Tailwind v4 utility 생성을 위해 위 값들은 `@theme`의 `--color-*`, `--radius-*` 변수와 연결한다.

예:

```css
@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
}
```

## Expected Workflow

디자인 시스템 작업 요청을 받으면 다음 순서로 처리한다.

1. `tokens/design-tokens.json`을 읽는다.
2. 토큰 alias 관계를 해석한다.
3. `src/styles/design-system.css`에 CSS variables를 생성하거나 수정한다.
4. `@theme`에 Tailwind utility로 노출할 token을 등록한다.
5. `:root`와 `.dark`에 runtime theme variable을 분리한다.
6. 전역 CSS에서 `@import "tailwindcss";`와 `design-system.css` import 상태를 확인한다.
7. shadcn/ui 필수 CSS variables가 모두 매핑되어 있는지 확인한다.
8. 컴포넌트의 className을 token 기반 Tailwind v4 utility로 정리한다.
9. 불필요한 hard-coded color, px, arbitrary value를 제거한다.
10. 기존 기능, 레이아웃, 접근성 상태를 훼손하지 않는다.

## Component Styling Priority

컴포넌트 스타일 적용 우선순위는 다음과 같다.

1. `component.*` token
2. `color.semantic.*`, `spacing.semantic.*`, `radius.component.*`
3. shadcn/ui semantic utility
   - `bg-background`
   - `text-foreground`
   - `bg-primary`
   - `text-primary-foreground`
   - `bg-muted`
   - `text-muted-foreground`
   - `border-border`
   - `ring-ring`
4. primitive token
5. hard-coded value

hard-coded value는 피한다.

## Tailwind Class Rules

가능한 class 작성 방식:

```tsx
className="bg-background text-foreground"
className="bg-card text-card-foreground border border-border"
className="bg-primary text-primary-foreground hover:bg-primary/90"
className="text-muted-foreground"
className="ring-ring focus-visible:ring-2"
```

component token이 필요한 경우:

```tsx
className="h-[var(--component-button-height-md)] px-[var(--component-button-padding-x-md)] rounded-[var(--component-button-radius)]"
```

피해야 할 방식:

```tsx
className="bg-[#ffffff] text-[#0f1115]"
className="rounded-[13px]"
className="px-[17px]"
className="shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
```

단, token에 없는 신규 값이 필요하면 먼저 `tokens/design-tokens.json`에 token을 추가하고, 그다음 `design-system.css`에 반영한다.

## Accessibility Rules

1. 텍스트 색상은 WCAG AA 수준의 대비를 목표로 한다.
2. disabled state는 opacity만 사용하지 않는다.
3. disabled state는 별도의 text, bg, border token을 사용한다.
4. focus state는 반드시 `--ring` 또는 component focus ring token을 사용한다.
5. hover, active, focus, disabled 상태는 가능한 한 component token으로 정의한다.
6. destructive, warning, success 색상은 light/dark mode 모두에서 구분 가능해야 한다.

## File Editing Rules

Codex가 디자인 시스템 관련 작업을 수행할 때 우선 확인할 파일:

1. `tokens/design-tokens.json`
2. `src/styles/design-system.css`
3. 전역 CSS 파일
   - `src/styles/globals.css`
   - `src/app/globals.css`
   - `src/index.css`
4. shadcn/ui component files
   - `components/ui/button.tsx`
   - `components/ui/input.tsx`
   - `components/ui/card.tsx`
   - `components/ui/dialog.tsx`
   - `components/ui/checkbox.tsx`
5. Tailwind 설정 파일이 존재하는 경우
   - `tailwind.config.ts`
   - `tailwind.config.js`

Tailwind v4 프로젝트에서는 `tailwind.config.*` 수정보다 CSS의 `@theme` 수정을 우선한다.

## Do Not

- 새 디자인 값을 컴포넌트에 hard-code하지 않는다.
- primitive token을 컴포넌트 className에 직접 매핑하지 않는다.
- Tailwind v3 방식의 설정을 새로 만들지 않는다.
- 불필요하게 `tailwind.config.ts`를 확장하지 않는다.
- `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`를 새로 추가하지 않는다.
- 기존 shadcn/ui variant API를 임의로 깨지 않는다.
- 접근성 상태인 focus, disabled, destructive 스타일을 제거하지 않는다.
