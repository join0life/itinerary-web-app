A tappable action; coral `primary` is reserved for the single most important action on a screen.

```jsx
<Button variant="primary" size="lg" fullWidth>일정 등록</Button>
<Button variant="ghost">취소</Button>
```

Sizes are 32 / 44 / 52px tall (md is the default and meets the 44px touch target). Hover darkens the fill, press adds `scale(0.98)`, disabled swaps to a neutral fill + muted text (never opacity).
