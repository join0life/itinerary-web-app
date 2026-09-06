Modal form surface — 20px radius, dimmed `--overlay` behind it. Position the parent `relative` (it renders absolutely inside).

```jsx
<Dialog title="새 일정 만들기" onClose={close}
  footer={<><Button variant="ghost" fullWidth>취소</Button><Button fullWidth>확인</Button></>}>
  …fields…
</Dialog>
```

On mobile the product presents the same content as a bottom sheet with only the top corners rounded.
