import React from "react";

const SIZES = {
  sm: { height: "var(--control-height-sm)", padding: "0 12px", fontSize: "0.8125rem", gap: 6 },
  md: { height: "var(--control-height-md)", padding: "0 16px", fontSize: "var(--text-button-size)", gap: 8 },
  lg: { height: "var(--control-height-lg)", padding: "0 20px", fontSize: "1rem", gap: 8 },
};

const VARIANTS = {
  primary: { background: "var(--action-primary)", color: "var(--action-primary-foreground)", borderColor: "transparent" },
  secondary: { background: "var(--action-secondary)", color: "var(--action-secondary-foreground)", borderColor: "transparent" },
  ghost: { background: "transparent", color: "var(--text-primary)", borderColor: "var(--action-ghost-border)" },
  brand: { background: "var(--brand)", color: "var(--brand-foreground)", borderColor: "transparent" },
  destructive: { background: "var(--status-danger)", color: "var(--text-inverse)", borderColor: "transparent" },
  link: { background: "transparent", color: "var(--brand-strong)", borderColor: "transparent", textDecoration: "underline", textUnderlineOffset: 4 },
};

const HOVER = {
  primary: "var(--action-primary-hover)",
  secondary: "var(--action-secondary-hover)",
  ghost: "var(--action-ghost-hover)",
  brand: "var(--brand-hover)",
  destructive: "var(--status-danger)",
  link: "transparent",
};

export function Button({ variant = "primary", size = "md", disabled, fullWidth, iconOnly, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    gap: s.gap, height: s.height, padding: iconOnly ? 0 : s.padding,
    width: fullWidth ? "100%" : iconOnly ? s.height : undefined,
    borderRadius: "var(--radius-md)", border: "1px solid " + v.borderColor,
    fontFamily: "var(--font-sans)", fontSize: s.fontSize, fontWeight: "var(--text-button-weight)",
    lineHeight: "var(--text-button-line)", whiteSpace: "nowrap", cursor: disabled ? "not-allowed" : "pointer",
    transition: "var(--transition-control)", background: v.background, color: v.color,
    textDecoration: v.textDecoration, textUnderlineOffset: v.textUnderlineOffset,
    ...(hover && !disabled ? { background: HOVER[variant], textDecoration: variant === "link" ? "underline" : v.textDecoration } : null),
    ...(press && !disabled ? { transform: "scale(var(--press-scale))" } : null),
    ...(disabled ? { background: "var(--action-disabled)", color: "var(--action-disabled-foreground)", borderColor: "transparent", pointerEvents: "none" } : null),
    ...style,
  };
  return (
    <button type="button" disabled={disabled} style={base}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)} {...rest}>
      {children}
    </button>
  );
}
