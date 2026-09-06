/* @ds-bundle: {"format":4,"namespace":"DesignSystem_2c1582","components":[{"name":"AppHeader","sourcePath":"components/app/AppHeader.jsx"},{"name":"BottomNav","sourcePath":"components/app/BottomNav.jsx"},{"name":"CreateTodoPrompt","sourcePath":"components/app/CreateTodoPrompt.jsx"},{"name":"ProfileSummary","sourcePath":"components/app/ProfileSummary.jsx"},{"name":"ProjectCard","sourcePath":"components/app/ProjectCard.jsx"},{"name":"TodoItem","sourcePath":"components/app/TodoItem.jsx"},{"name":"AlldayEventBar","sourcePath":"components/calendar/AlldayEventBar.jsx"},{"name":"CalendarEventItem","sourcePath":"components/calendar/CalendarEventItem.jsx"},{"name":"WeekStrip","sourcePath":"components/calendar/WeekStrip.jsx"},{"name":"WeeklyCalendar","sourcePath":"components/calendar/WeeklyCalendar.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Empty","sourcePath":"components/feedback/Empty.jsx"},{"name":"Loader","sourcePath":"components/feedback/Loader.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"InputGroup","sourcePath":"components/forms/InputGroup.jsx"},{"name":"InputGroupAddon","sourcePath":"components/forms/InputGroup.jsx"},{"name":"InputGroupInput","sourcePath":"components/forms/InputGroup.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"AlertModal","sourcePath":"components/overlays/AlertModal.jsx"},{"name":"Dialog","sourcePath":"components/overlays/Dialog.jsx"},{"name":"Popover","sourcePath":"components/overlays/Popover.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"CardTitle","sourcePath":"components/surfaces/Card.jsx"},{"name":"CardDescription","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/app/AppHeader.jsx":"cbf2b4731e2b","components/app/BottomNav.jsx":"a5c68a6b8777","components/app/CreateTodoPrompt.jsx":"0f8d6ef95b69","components/app/ProfileSummary.jsx":"e40dd594c1b2","components/app/ProjectCard.jsx":"2743605a02a2","components/app/TodoItem.jsx":"b15a442df964","components/calendar/AlldayEventBar.jsx":"ca735ee8fc6b","components/calendar/CalendarEventItem.jsx":"f9b6d7ba9cd0","components/calendar/WeekStrip.jsx":"6356c2bb3865","components/calendar/WeeklyCalendar.jsx":"daf8cadfa1da","components/feedback/Badge.jsx":"ade8957c1037","components/feedback/Empty.jsx":"1c4d034a348e","components/feedback/Loader.jsx":"57de864a9beb","components/feedback/Toast.jsx":"dc639cbf7dff","components/forms/Button.jsx":"95e502056867","components/forms/Checkbox.jsx":"0339448c4115","components/forms/Input.jsx":"310369fda976","components/forms/InputGroup.jsx":"6e17b00a4243","components/forms/Label.jsx":"20f6c047bb40","components/forms/Select.jsx":"57b13df4a957","components/forms/Switch.jsx":"55f542fb4b70","components/forms/Textarea.jsx":"e47b5ec34a06","components/icons/Icon.jsx":"96dc541631b9","components/overlays/AlertModal.jsx":"2ffccc373048","components/overlays/Dialog.jsx":"4b2c3c1123ca","components/overlays/Popover.jsx":"80c12f1eb5c5","components/surfaces/Card.jsx":"e333facc4a55","ui_kits/dansun-app/App.jsx":"7e97dc5c72ba","ui_kits/dansun-app/AuthScreen.jsx":"a5aa7cfda53e","ui_kits/dansun-app/CalendarScreen.jsx":"322d88e9a214","ui_kits/dansun-app/LandingScreen.jsx":"20d2be206c46","ui_kits/dansun-app/ProfileScreen.jsx":"acda117abf4d","ui_kits/dansun-app/ProjectScreen.jsx":"adb1d46e3b31","ui_kits/dansun-app/TodoScreen.jsx":"80b8785af6eb","ui_kits/dansun-app/data.js":"aa771d9db6ae"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_2c1582 = window.DesignSystem_2c1582 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/calendar/AlldayEventBar.jsx
try { (() => {
function AlldayEventBar({
  title,
  offsetDays = 0,
  spanDays = 1,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      width: "100%"
    },
    onClick: onClick
  }, Array.from({
    length: offsetDays
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: "14.2857%",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: spanDays / 7 * 100 + "%",
      background: "var(--brand)",
      color: "var(--brand-foreground)",
      borderRadius: "var(--radius-sm)",
      padding: "4px 8px",
      marginBottom: 4,
      fontSize: "var(--text-caption-size)",
      fontWeight: 600,
      cursor: "pointer",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title));
}
Object.assign(__ds_scope, { AlldayEventBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/calendar/AlldayEventBar.jsx", error: String((e && e.message) || e) }); }

// components/calendar/CalendarEventItem.jsx
try { (() => {
const HOUR_HEIGHT = 60;
function CalendarEventItem({
  title,
  startHour = 9,
  startMinute = 0,
  endHour = 11,
  endMinute = 0,
  columnIndex = 0,
  onClick
}) {
  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;
  const overlap = columnIndex === 0 ? {
    left: "15%",
    zIndex: 1
  } : {
    left: "50%",
    zIndex: 2
  };
  const pad = n => String(n).padStart(2, "0");
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      position: "absolute",
      right: 0,
      width: "100%",
      ...overlap,
      top: startMinutes * (HOUR_HEIGHT / 60),
      height: (endMinutes - startMinutes) * (HOUR_HEIGHT / 60),
      minHeight: "var(--calendar-event-min-height)",
      boxSizing: "border-box",
      background: "var(--calendar-event)",
      borderLeft: "3px solid var(--calendar-event-foreground)",
      borderRadius: "var(--radius-sm)",
      padding: "12px 8px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-body-sm-size)",
      fontWeight: 600,
      color: "var(--calendar-event-foreground)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: "var(--text-caption-size)",
      color: "var(--calendar-event-foreground)"
    }
  }, pad(startHour), ":", pad(startMinute), " ~ ", pad(endHour), ":", pad(endMinute)));
}
Object.assign(__ds_scope, { CalendarEventItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/calendar/CalendarEventItem.jsx", error: String((e && e.message) || e) }); }

// components/calendar/WeeklyCalendar.jsx
try { (() => {
function WeeklyCalendar({
  children,
  height = "var(--calendar-viewport-md)",
  startHour = 7
}) {
  const hours = Array.from({
    length: 24
  }, (_, i) => i);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.scrollTop = startHour * 60;
  }, [startHour]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      width: "100%",
      height,
      overflowY: "auto",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "var(--calendar-canvas-height)"
    }
  }, hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: "flex",
      height: "var(--calendar-hour-height)",
      width: "100%",
      borderBottom: "1px solid var(--calendar-grid-line)",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      width: "14.2857%",
      fontSize: "var(--text-caption-size)",
      color: "var(--text-muted)",
      padding: "2px 6px"
    }
  }, String(h).padStart(2, "0"), ":00"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "85.7143%"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      marginLeft: "14.2857%"
    }
  }, children)));
}
Object.assign(__ds_scope, { WeeklyCalendar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/calendar/WeeklyCalendar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const TONE_BG = {
  neutral: "var(--surface-muted)",
  brand: "var(--brand-subtle)",
  success: "var(--color-secondary-50)",
  outline: "transparent"
};
const TONE_FG = {
  neutral: "var(--text-secondary)",
  brand: "var(--brand-strong)",
  success: "var(--status-success)",
  outline: "var(--text-secondary)"
};
function Badge({
  tone = "neutral",
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      padding: "2px 8px",
      borderRadius: "var(--radius-sm)",
      background: TONE_BG[tone],
      color: TONE_FG[tone],
      border: tone === "outline" ? "1px solid var(--border-default)" : "1px solid transparent",
      fontSize: "var(--text-caption-size)",
      fontWeight: "var(--text-caption-weight)",
      lineHeight: "var(--text-caption-line)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Empty.jsx
try { (() => {
function Empty({
  title,
  description,
  action,
  illustration
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-3)",
      padding: "var(--space-10) var(--space-6)",
      textAlign: "center",
      color: "var(--text-muted)"
    }
  }, illustration ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-2)"
    }
  }, illustration) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-h5-size)",
      fontWeight: "var(--text-h5-weight)",
      color: "var(--text-secondary)"
    }
  }, title), description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body-sm-size)"
    }
  }, description) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, action) : null);
}
Object.assign(__ds_scope, { Empty });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Empty.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Loader.jsx
try { (() => {
function Loader({
  label = "데이터를 불러오는 중입니다.",
  size = 24
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-5)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    style: {
      animation: "dsSpin 1s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56"
  })), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body-sm-size)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("style", null, "@keyframes dsSpin{to{transform:rotate(360deg)}}"));
}
Object.assign(__ds_scope, { Loader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Loader.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  success: {
    color: "var(--status-success)",
    path: "M21.801 10A10 10 0 1 1 17 3.335"
  },
  error: {
    color: "var(--status-danger)",
    path: "m15 9-6 6M9 9l6 6"
  },
  warning: {
    color: "var(--status-warning)",
    path: "M12 9v4M12 17h.01"
  },
  info: {
    color: "var(--status-info)",
    path: "M12 16v-4M12 8h.01"
  }
};
function Toast({
  tone = "success",
  message,
  style
}) {
  const t = TONES[tone] || TONES.success;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "12px 16px",
      background: "var(--surface-elevated)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-popover)",
      fontSize: "var(--text-body-sm-size)",
      color: "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: t.color,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: t.path
  })), /*#__PURE__*/React.createElement("span", null, message));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: "var(--control-height-sm)",
    padding: "0 12px",
    fontSize: "0.8125rem",
    gap: 6
  },
  md: {
    height: "var(--control-height-md)",
    padding: "0 16px",
    fontSize: "var(--text-button-size)",
    gap: 8
  },
  lg: {
    height: "var(--control-height-lg)",
    padding: "0 20px",
    fontSize: "1rem",
    gap: 8
  }
};
const VARIANTS = {
  primary: {
    background: "var(--action-primary)",
    color: "var(--action-primary-foreground)",
    borderColor: "transparent"
  },
  secondary: {
    background: "var(--action-secondary)",
    color: "var(--action-secondary-foreground)",
    borderColor: "transparent"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-primary)",
    borderColor: "var(--action-ghost-border)"
  },
  brand: {
    background: "var(--brand)",
    color: "var(--brand-foreground)",
    borderColor: "transparent"
  },
  destructive: {
    background: "var(--status-danger)",
    color: "var(--text-inverse)",
    borderColor: "transparent"
  },
  link: {
    background: "transparent",
    color: "var(--brand-strong)",
    borderColor: "transparent",
    textDecoration: "underline",
    textUnderlineOffset: 4
  }
};
const HOVER = {
  primary: "var(--action-primary-hover)",
  secondary: "var(--action-secondary-hover)",
  ghost: "var(--action-ghost-hover)",
  brand: "var(--brand-hover)",
  destructive: "var(--status-danger)",
  link: "transparent"
};
function Button({
  variant = "primary",
  size = "md",
  disabled,
  fullWidth,
  iconOnly,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: iconOnly ? 0 : s.padding,
    width: fullWidth ? "100%" : iconOnly ? s.height : undefined,
    borderRadius: "var(--radius-md)",
    border: "1px solid " + v.borderColor,
    fontFamily: "var(--font-sans)",
    fontSize: s.fontSize,
    fontWeight: "var(--text-button-weight)",
    lineHeight: "var(--text-button-line)",
    whiteSpace: "nowrap",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "var(--transition-control)",
    background: v.background,
    color: v.color,
    textDecoration: v.textDecoration,
    textUnderlineOffset: v.textUnderlineOffset,
    ...(hover && !disabled ? {
      background: HOVER[variant],
      textDecoration: variant === "link" ? "underline" : v.textDecoration
    } : null),
    ...(press && !disabled ? {
      transform: "scale(var(--press-scale))"
    } : null),
    ...(disabled ? {
      background: "var(--action-disabled)",
      color: "var(--action-disabled-foreground)",
      borderColor: "transparent",
      pointerEvents: "none"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/app/ProfileSummary.jsx
try { (() => {
function ProfileSummary({
  avatarSrc,
  nickname,
  bio,
  editable,
  onEdit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: avatarSrc,
    alt: "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0",
    style: {
      width: 120,
      height: 120,
      borderRadius: "var(--radius-full)",
      objectFit: "cover",
      background: "var(--surface-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-h3-size)",
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, nickname), bio ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body-size)",
      color: "var(--text-muted)"
    }
  }, bio) : null), editable ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    onClick: onEdit
  }, "\uD504\uB85C\uD544 \uC218\uC815") : null);
}
Object.assign(__ds_scope, { ProfileSummary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/ProfileSummary.jsx", error: String((e && e.message) || e) }); }

// components/app/ProjectCard.jsx
try { (() => {
function ProjectCard({
  name,
  description,
  owner,
  joined,
  onJoin,
  onDelete,
  onClick
}) {
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      height: 160,
      boxSizing: "border-box",
      padding: "var(--space-6)",
      background: "var(--surface-muted)",
      borderRadius: "var(--radius-lg)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--text-h4-size)",
      fontWeight: 600,
      color: "var(--text-primary)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, onDelete ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    onClick: onDelete
  }, "\uC0AD\uC81C") : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: joined ? "secondary" : "primary",
    size: "sm",
    onClick: onJoin
  }, joined ? "입장" : "참여"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      flex: 1,
      fontSize: "var(--text-body-sm-size)",
      lineHeight: "var(--text-body-sm-line)",
      color: "var(--text-secondary)"
    }
  }, description), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "outline"
  }, owner)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  onChange,
  disabled,
  label,
  id
}) {
  const box = {
    width: 18,
    height: 18,
    flexShrink: 0,
    borderRadius: 5,
    display: "grid",
    placeItems: "center",
    border: "1px solid " + (checked ? "var(--action-primary)" : "var(--border-default)"),
    background: checked ? "var(--action-primary)" : "var(--surface-card)",
    color: "var(--action-primary-foreground)",
    transition: "var(--transition-control)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    },
    onClick: () => !disabled && onChange && onChange(!checked)
  }, /*#__PURE__*/React.createElement("span", {
    id: id,
    role: "checkbox",
    "aria-checked": !!checked,
    style: box
  }, checked ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body-size)",
      color: "var(--text-primary)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid,
  disabled,
  leadingIcon,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const wrap = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    height: "var(--control-height-md)",
    padding: "0 12px",
    background: disabled ? "var(--surface-muted)" : "var(--surface-card)",
    border: "1px solid " + (invalid ? "var(--border-danger)" : focus ? "var(--border-focus)" : "var(--border-default)"),
    borderRadius: "var(--radius-input)",
    boxShadow: focus ? "var(--focus-ring)" : "none",
    transition: "var(--transition-control)",
    ...style
  };
  const field = {
    flex: 1,
    minWidth: 0,
    border: 0,
    outline: "none",
    background: "transparent",
    font: "inherit",
    fontSize: "var(--text-body-size)",
    color: disabled ? "var(--text-disabled)" : "var(--text-primary)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, leadingIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--text-muted)"
    }
  }, leadingIcon) : null, /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    style: field,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function InputGroup({
  children,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    onFocusCapture: () => setFocus(true),
    onBlurCapture: () => setFocus(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      width: "100%",
      height: "var(--control-height-md)",
      padding: "0 12px",
      boxSizing: "border-box",
      background: "var(--surface-card)",
      border: "1px solid " + (focus ? "var(--border-focus)" : "var(--border-default)"),
      borderRadius: "var(--radius-input)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "var(--transition-control)",
      ...style
    }
  }, children);
}
function InputGroupAddon({
  children,
  align = "start"
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      color: "var(--text-muted)",
      order: align === "end" ? 2 : 0
    }
  }, children);
}
function InputGroupInput({
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    style: {
      flex: 1,
      order: 1,
      minWidth: 0,
      border: 0,
      outline: "none",
      background: "transparent",
      font: "inherit",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-body-size)",
      color: "var(--text-primary)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { InputGroup, InputGroupAddon, InputGroupInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function Label({
  children,
  htmlFor,
  muted,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-body-sm-size)",
      fontWeight: 500,
      lineHeight: 1,
      color: muted ? "var(--text-muted)" : "var(--text-secondary)",
      userSelect: "none",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  options = [],
  value,
  onChange,
  placeholder,
  disabled,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value ?? "",
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      height: "var(--control-height-md)",
      padding: "0 34px 0 12px",
      font: "inherit",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-body-size)",
      color: value ? "var(--text-primary)" : "var(--text-muted)",
      background: disabled ? "var(--surface-muted)" : "var(--surface-card)",
      border: "1px solid " + (focus ? "var(--border-focus)" : "var(--border-default)"),
      borderRadius: "var(--radius-input)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      outline: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--transition-control)"
    }
  }, placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      right: 10,
      pointerEvents: "none",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  disabled,
  id
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: id,
    role: "switch",
    "aria-checked": !!checked,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 56,
      height: 32,
      flexShrink: 0,
      padding: 2,
      borderRadius: "var(--radius-full)",
      border: "1px solid transparent",
      background: checked ? "var(--action-primary)" : "var(--border-default)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "var(--transition-control)",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: "var(--radius-full)",
      background: "var(--surface-card)",
      transform: checked ? "translateX(24px)" : "translateX(0)",
      transition: "transform var(--duration-fast) var(--ease-out)"
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid,
  disabled,
  rows = 3,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      minHeight: 64,
      padding: "10px 12px",
      boxSizing: "border-box",
      resize: "vertical",
      font: "inherit",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-body-size)",
      lineHeight: "var(--text-body-line)",
      color: disabled ? "var(--text-disabled)" : "var(--text-primary)",
      background: disabled ? "var(--surface-muted)" : "var(--surface-card)",
      border: "1px solid " + (invalid ? "var(--border-danger)" : focus ? "var(--border-focus)" : "var(--border-default)"),
      borderRadius: "var(--radius-input)",
      outline: "none",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE_BASE = "https://unpkg.com/lucide-static@0.542.0/icons/";

/** Renders a Lucide icon as a colourable mask, so it inherits currentColor without inlining SVG source. */
function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth,
  style,
  ...rest
}) {
  const url = "url(" + LUCIDE_BASE + name + ".svg)";
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    "data-icon": name,
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flexShrink: 0,
      background: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/app/BottomNav.jsx
try { (() => {
const ITEMS = [{
  key: "home",
  icon: "home",
  label: "소개"
}, {
  key: "project",
  icon: "folder",
  label: "프로젝트"
}, {
  key: "todo",
  icon: "list-todo",
  label: "일정"
}, {
  key: "calendar",
  icon: "calendar",
  label: "캘린더"
}];
function BottomNav({
  active = "project",
  onChange
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "var(--bottom-nav-height)",
      padding: "8px 4px",
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-default)",
      boxSizing: "border-box"
    }
  }, ITEMS.map(it => {
    const on = it.key === active;
    return /*#__PURE__*/React.createElement("div", {
      key: it.key,
      onClick: () => onChange && onChange(it.key),
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        cursor: "pointer",
        color: on ? "var(--text-primary)" : "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 20
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-caption-size)"
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/app/CreateTodoPrompt.jsx
try { (() => {
function CreateTodoPrompt({
  label = "어떤 일정을 만들까요?",
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--space-4)",
      background: "var(--surface-muted)",
      color: "var(--text-muted)",
      borderRadius: "var(--radius-lg)",
      cursor: "pointer",
      fontSize: "var(--text-body-size)"
    }
  }, /*#__PURE__*/React.createElement("div", null, label), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus-circle",
    size: 24
  }));
}
Object.assign(__ds_scope, { CreateTodoPrompt });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/CreateTodoPrompt.jsx", error: String((e && e.message) || e) }); }

// components/app/TodoItem.jsx
try { (() => {
function TodoItem({
  title,
  confirmed,
  onToggle,
  onEdit,
  onDelete
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: confirmed,
    onChange: onToggle
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body-size)",
      color: confirmed ? "var(--text-muted)" : "var(--text-primary)",
      textDecoration: confirmed ? "line-through" : "none",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      color: "var(--text-muted)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onEdit,
    style: {
      display: "flex",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "pencil",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    onClick: onDelete,
    style: {
      display: "flex",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "trash-2",
    size: 16
  }))));
}
Object.assign(__ds_scope, { TodoItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/TodoItem.jsx", error: String((e && e.message) || e) }); }

// components/calendar/WeekStrip.jsx
try { (() => {
const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
function WeekStrip({
  monthLabel,
  dates = [],
  selectedIndex = 0,
  onSelect,
  onPrev,
  onNext
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--space-4) var(--space-6)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onPrev,
    style: {
      cursor: "pointer",
      color: "var(--text-muted)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-h3-size)",
      fontWeight: "var(--text-h3-weight)",
      color: "var(--text-primary)"
    }
  }, monthLabel), /*#__PURE__*/React.createElement("span", {
    onClick: onNext,
    style: {
      cursor: "pointer",
      color: "var(--text-muted)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, DAYS.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      width: "14.2857%",
      padding: "var(--space-2)",
      textAlign: "center",
      fontSize: "var(--text-body-sm-size)",
      color: i === 0 || i === 6 ? "var(--text-muted)" : "var(--text-secondary)",
      borderLeft: i === 0 ? "none" : "1px solid var(--border-subtle)",
      boxSizing: "border-box"
    }
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      marginBottom: 4
    }
  }, dates.map((n, i) => {
    const selected = i === selectedIndex;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => onSelect && onSelect(i),
      style: {
        width: "14.2857%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-2)",
        cursor: "pointer",
        boxSizing: "border-box",
        borderLeft: i === 0 ? "none" : "1px solid var(--border-subtle)"
      }
    }, selected ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        width: 36,
        height: 36,
        borderRadius: "var(--radius-full)",
        background: "var(--brand)"
      }
    }) : null, /*#__PURE__*/React.createElement("span", {
      className: "tabular",
      style: {
        position: "relative",
        fontWeight: 600,
        color: selected ? "var(--brand-foreground)" : i === 0 || i === 6 ? "var(--text-muted)" : "var(--text-primary)"
      }
    }, n));
  })));
}
Object.assign(__ds_scope, { WeekStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/calendar/WeekStrip.jsx", error: String((e && e.message) || e) }); }

// components/overlays/AlertModal.jsx
try { (() => {
function AlertModal({
  open = true,
  title,
  description,
  confirmLabel = "확인",
  cancelLabel = "취소",
  onConfirm,
  onCancel
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      background: "var(--overlay)",
      padding: "var(--space-4)",
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "alertdialog",
    style: {
      width: "100%",
      maxWidth: 420,
      boxSizing: "border-box",
      background: "var(--surface-elevated)",
      borderRadius: "var(--radius-modal)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-modal)",
      padding: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-h4-size)",
      fontWeight: "var(--text-h4-weight)",
      color: "var(--text-primary)"
    }
  }, title), description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body-sm-size)",
      lineHeight: "var(--text-body-sm-line)",
      color: "var(--text-muted)"
    }
  }, description) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    onClick: onCancel
  }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: onConfirm
  }, confirmLabel))));
}
Object.assign(__ds_scope, { AlertModal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/AlertModal.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  onClose,
  footer,
  children,
  width = 480,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      background: "var(--overlay)",
      padding: "var(--space-4)",
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": title,
    style: {
      width: "100%",
      maxWidth: width,
      boxSizing: "border-box",
      background: "var(--surface-elevated)",
      borderRadius: "var(--radius-modal)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-modal)",
      padding: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-h4-size)",
      fontWeight: "var(--text-h4-weight)",
      lineHeight: 1.3,
      color: "var(--text-primary)"
    }
  }, title), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "\uB2EB\uAE30",
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)",
      padding: 4,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Popover.jsx
try { (() => {
function Popover({
  trigger,
  items = [],
  align = "end",
  width = 160
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(!open),
    style: {
      display: "inline-flex",
      cursor: "pointer"
    }
  }, trigger), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      right: align === "end" ? 0 : undefined,
      left: align === "start" ? 0 : undefined,
      width,
      background: "var(--surface-elevated)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-popover)",
      overflow: "hidden",
      zIndex: 40
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    onClick: () => {
      setOpen(false);
      it.onSelect && it.onSelect();
    },
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 16px",
      fontSize: "var(--text-body-sm-size)",
      color: "var(--text-primary)",
      cursor: "pointer"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--surface-muted)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("span", null, it.label), it.selected ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })) : null))) : null);
}
Object.assign(__ds_scope, { Popover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Popover.jsx", error: String((e && e.message) || e) }); }

// components/app/AppHeader.jsx
try { (() => {
function AppHeader({
  variant = "global",
  title = "단순여행",
  avatarSrc,
  onBack,
  theme = "light",
  onThemeChange,
  onProfile,
  onSignOut
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-3)",
      height: "var(--header-height)",
      padding: "0 var(--space-4)",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-default)",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      minWidth: 0
    }
  }, variant === "project" ? /*#__PURE__*/React.createElement("span", {
    onClick: onBack,
    style: {
      display: "flex",
      cursor: "pointer",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 22
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      fontFamily: variant === "global" ? "var(--font-brand)" : "var(--font-sans)",
      fontSize: variant === "global" ? "1.25rem" : "1rem",
      fontWeight: 700,
      letterSpacing: variant === "global" ? "0.01em" : 0,
      color: variant === "project" ? "var(--brand-strong)" : "var(--text-primary)"
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Popover, {
    align: "end",
    width: 140,
    trigger: /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        padding: 8,
        borderRadius: "var(--radius-full)",
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "sun",
      size: 20
    })),
    items: ["system", "light", "dark"].map(t => ({
      label: t,
      selected: t === theme,
      onSelect: () => onThemeChange && onThemeChange(t)
    }))
  }), avatarSrc ? /*#__PURE__*/React.createElement(__ds_scope.Popover, {
    align: "end",
    width: 160,
    trigger: /*#__PURE__*/React.createElement("img", {
      src: avatarSrc,
      alt: "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0",
      style: {
        width: 26,
        height: 26,
        borderRadius: "var(--radius-full)",
        objectFit: "cover",
        cursor: "pointer"
      }
    }),
    items: [{
      label: "프로필",
      onSelect: onProfile
    }, {
      label: "로그아웃",
      onSelect: onSignOut
    }]
  }) : null));
}
Object.assign(__ds_scope, { AppHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/AppHeader.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  accentColor,
  muted,
  padding = "var(--space-4)",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: muted ? "var(--surface-muted)" : "var(--surface-card)",
      borderRadius: "var(--radius-card)",
      padding,
      border: "1px solid var(--border-subtle)",
      boxShadow: muted ? "none" : "var(--shadow-card)",
      borderLeft: accentColor ? "4px solid " + accentColor : undefined,
      boxSizing: "border-box",
      ...style
    }
  }, rest), children);
}
function CardTitle({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-h4-size)",
      fontWeight: "var(--text-h4-weight)",
      lineHeight: "var(--text-h4-line)",
      color: "var(--text-primary)",
      ...style
    }
  }, children);
}
function CardDescription({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body-sm-size)",
      lineHeight: "var(--text-body-sm-line)",
      color: "var(--text-muted)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card, CardTitle, CardDescription });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dansun-app/App.jsx
try { (() => {
const {
  AppHeader,
  BottomNav,
  Toast
} = window.DesignSystem_2c1582;
const DATA = {
  me: {
    id: "u1",
    nickname: "지민",
    bio: "계획은 단순하게",
    avatar: "../../assets/avatar-dog-yellow.png"
  },
  projects: [{
    id: 1,
    name: "제주 3박 4일",
    description: "친구 5명 · 11월 12일 출발",
    owner: "지민",
    joined: true
  }, {
    id: 2,
    name: "속초 주말 워케이션",
    description: "노트북 챙기고 바다 보면서 일하기",
    owner: "현우",
    joined: false
  }, {
    id: 3,
    name: "부산 먹방 원정대",
    description: "돼지국밥부터 밀면까지 코스 정리",
    owner: "예린",
    joined: false
  }],
  todos: [{
    owner: "지민",
    avatar: "../../assets/avatar-dog-yellow.png",
    items: [{
      id: 11,
      title: "성산일출봉 일출 보기",
      confirmed: true
    }, {
      id: 12,
      title: "렌터카 예약",
      confirmed: true
    }, {
      id: 13,
      title: "흑돼지 저녁 예약",
      confirmed: false
    }]
  }, {
    owner: "현우",
    avatar: "../../assets/avatar-dog.png",
    items: [{
      id: 21,
      title: "숙소 최종 확정",
      confirmed: false
    }, {
      id: 22,
      title: "카페 리스트 정리",
      confirmed: false
    }]
  }],
  events: [{
    id: 11,
    title: "성산일출봉 일출",
    startHour: 6,
    endHour: 8
  }, {
    id: 12,
    title: "우도 자전거",
    startHour: 10,
    endHour: 12
  }, {
    id: 13,
    title: "흑돼지 저녁",
    startHour: 18,
    endHour: 20
  }]
};
function App() {
  const [theme, setTheme] = React.useState("light");
  const [route, setRoute] = React.useState("landing");
  const [authMode, setAuthMode] = React.useState("sign-in");
  const [projects, setProjects] = React.useState(DATA.projects);
  const [groups, setGroups] = React.useState(DATA.todos);
  const [project, setProject] = React.useState(DATA.projects[0]);
  const [dialog, setDialog] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  const flash = message => {
    setToast(message);
    setTimeout(() => setToast(null), 2200);
  };
  const openProject = p => {
    setProject(p);
    setRoute("todo");
  };
  const toggleTodo = (owner, id) => setGroups(gs => gs.map(g => g.owner !== owner ? g : {
    ...g,
    items: g.items.map(it => it.id === id ? {
      ...it,
      confirmed: !it.confirmed
    } : it)
  }));
  const isProjectRoute = route === "todo" || route === "calendar";
  const bare = route === "landing" || route === "auth";
  const activeTab = route === "profile" ? "project" : route === "landing" ? "home" : route;
  let body = null;
  if (route === "landing") body = /*#__PURE__*/React.createElement(LandingScreen, {
    onStart: () => setRoute("auth")
  });else if (route === "auth") body = /*#__PURE__*/React.createElement(AuthScreen, {
    mode: authMode,
    onSignIn: () => {
      setRoute("project");
      flash("환영해요! 프로젝트를 만들어 보세요.");
    },
    onSwitch: () => setAuthMode(authMode === "sign-in" ? "sign-up" : "sign-in")
  });else if (route === "project") body = /*#__PURE__*/React.createElement(ProjectScreen, {
    projects: projects,
    onOpenProject: openProject,
    onCreate: () => setDialog("project")
  });else if (route === "todo") body = /*#__PURE__*/React.createElement(TodoScreen, {
    groups: groups,
    onToggle: toggleTodo,
    onCreate: () => setDialog("todo")
  });else if (route === "calendar") body = /*#__PURE__*/React.createElement(CalendarScreen, {
    events: DATA.events
  });else if (route === "profile") body = /*#__PURE__*/React.createElement(ProfileScreen, {
    me: DATA.me,
    projects: projects.filter(p => p.owner === "지민"),
    onOpenProject: openProject
  });
  const padded = !(route === "landing" || route === "calendar");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--app-shell-max-width)",
      margin: "0 auto",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      boxShadow: "0 0 40px rgba(0,0,0,0.10)"
    }
  }, !bare ? /*#__PURE__*/React.createElement(AppHeader, {
    variant: isProjectRoute ? "project" : "global",
    title: isProjectRoute ? project.name : "단순여행",
    avatarSrc: DATA.me.avatar,
    theme: theme,
    onThemeChange: setTheme,
    onBack: () => setRoute("project"),
    onProfile: () => setRoute("profile"),
    onSignOut: () => setRoute("landing")
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      padding: padded ? "var(--space-6) var(--space-4)" : 0
    }
  }, body), route === "landing" ? /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "var(--space-10) 0",
      textAlign: "center",
      color: "var(--text-muted)",
      borderTop: "1px solid var(--border-default)",
      fontSize: "var(--text-body-sm-size)"
    }
  }, "@join0life") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      bottom: 0,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement(BottomNav, {
    active: activeTab,
    onChange: k => setRoute(k === "home" ? "landing" : k)
  })), dialog === "project" ? /*#__PURE__*/React.createElement(ProjectCreateDialog, {
    onClose: () => setDialog(null),
    onSubmit: p => {
      setProjects([{
        id: Date.now(),
        owner: "지민",
        joined: true,
        ...p
      }, ...projects]);
      setDialog(null);
      flash("프로젝트를 만들었어요.");
    }
  }) : null, dialog === "todo" ? /*#__PURE__*/React.createElement(TodoEditorDialog, {
    onClose: () => setDialog(null),
    onSubmit: title => {
      setGroups(gs => gs.map((g, i) => i === 0 ? {
        ...g,
        items: [...g.items, {
          id: Date.now(),
          title,
          confirmed: false
        }]
      } : g));
      setDialog(null);
      flash("일정이 저장되었습니다.");
    }
  }) : null, toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: 16,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "center",
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    message: toast
  })) : null);
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dansun-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dansun-app/AuthScreen.jsx
try { (() => {
const {
  Button,
  Input,
  Icon
} = window.DesignSystem_2c1582;
function AuthScreen({
  mode = "sign-in",
  onSignIn,
  onSwitch
}) {
  const signUp = mode === "sign-up";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-h3-size)",
      fontWeight: 700
    }
  }, signUp ? "회원가입" : "로그인"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "Email",
    style: {
      height: 52
    }
  }), /*#__PURE__*/React.createElement(Input, {
    type: "password",
    placeholder: "Password",
    style: {
      height: 52
    }
  }), signUp ? /*#__PURE__*/React.createElement(Input, {
    type: "password",
    placeholder: "Password \uD655\uC778",
    style: {
      height: 52
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: onSignIn
  }, signUp ? "가입하기" : "로그인"), !signUp ? /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    fullWidth: true,
    onClick: onSignIn
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/google-symbol.png",
    alt: "\uAD6C\uAE00 \uB85C\uACE0",
    style: {
      width: 16,
      height: 16
    }
  }), "Google \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontSize: "var(--text-body-size)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: "pointer"
    },
    onClick: onSwitch
  }, signUp ? "이미 계정이 있으신가요? 로그인" : "아직 계정이 없으신가요? 회원가입"), !signUp ? /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: "pointer"
    }
  }, "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC5B4\uBC84\uB838\uB098\uC694?") : null));
}
Object.assign(window, {
  AuthScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dansun-app/AuthScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dansun-app/CalendarScreen.jsx
try { (() => {
const {
  WeekStrip,
  WeeklyCalendar,
  CalendarEventItem,
  AlldayEventBar,
  Dialog,
  Button,
  Label,
  Switch,
  Input,
  Textarea,
  Badge
} = window.DesignSystem_2c1582;
function CalendarScreen({
  events
}) {
  const [sel, setSel] = React.useState(2);
  const [viewing, setViewing] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(WeekStrip, {
    monthLabel: "2026\uB144 9\uC6D4",
    dates: [6, 7, 8, 9, 10, 11, 12],
    selectedIndex: sel,
    onSelect: setSel
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-muted)",
      borderBottom: "1px dashed var(--border-default)",
      padding: "4px 0",
      minHeight: 30
    }
  }, /*#__PURE__*/React.createElement(AlldayEventBar, {
    title: "\uC81C\uC8FC \uC5EC\uD589",
    offsetDays: 1,
    spanDays: 4,
    onClick: () => setViewing({
      title: "제주 여행",
      allday: true
    })
  })), /*#__PURE__*/React.createElement(WeeklyCalendar, {
    height: "var(--calendar-viewport-sm)",
    startHour: 6
  }, events.map((e, i) => /*#__PURE__*/React.createElement(CalendarEventItem, {
    key: e.id,
    title: e.title,
    startHour: e.startHour,
    endHour: e.endHour,
    columnIndex: 0,
    onClick: () => setViewing(e)
  }))), viewing ? /*#__PURE__*/React.createElement(Dialog, {
    title: "\uC77C\uC815 \uC0C1\uC138",
    onClose: () => setViewing(null),
    footer: /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: () => setViewing(null)
    }, "\uD655\uC778")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, null, "\uC81C\uBAA9"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body-size)"
    }
  }, viewing.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, null, "\uD558\uB8E8\uC885\uC77C"), /*#__PURE__*/React.createElement(Switch, {
    checked: !!viewing.allday
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, null, "\uC2DC\uC791"), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: "var(--text-body-size)"
    }
  }, viewing.allday ? "2026. 09. 07" : `2026. 09. 08 ${String(viewing.startHour).padStart(2, "0")}:00`)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, null, "\uC885\uB8CC"), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: "var(--text-body-size)"
    }
  }, viewing.allday ? "2026. 09. 10" : `2026. 09. 08 ${String(viewing.endHour).padStart(2, "0")}:00`)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, null, "\uC704\uCE58"), /*#__PURE__*/React.createElement(Input, {
    readOnly: true,
    defaultValue: "\uC81C\uC8FC \uC11C\uADC0\uD3EC\uC2DC"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, null, "\uBA54\uBAA8"), /*#__PURE__*/React.createElement(Textarea, {
    readOnly: true,
    rows: 2,
    defaultValue: ""
  }))) : null);
}
Object.assign(window, {
  CalendarScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dansun-app/CalendarScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dansun-app/LandingScreen.jsx
try { (() => {
const {
  Button
} = window.DesignSystem_2c1582;
function LandingScreen({
  onStart
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-5)",
      background: "var(--brand)",
      padding: "var(--space-12) var(--space-6)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-brand)",
      fontSize: "1.75rem",
      fontWeight: 400,
      color: "var(--brand-foreground)"
    }
  }, "\uC5EC\uD589\uC744 \uB2E8\uC21C\uD558\uAC8C"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-brand)",
      fontSize: "3.5rem",
      lineHeight: 1.1,
      fontWeight: 400,
      color: "var(--brand-foreground)"
    }
  }, "\uB2E8\uC21C\uC5EC\uD589"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: onStart,
    style: {
      background: "var(--surface-card)",
      borderColor: "transparent",
      color: "var(--brand-strong)",
      padding: "0 32px"
    }
  }, "\uC2DC\uC791\uD558\uAE30")));
}
Object.assign(window, {
  LandingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dansun-app/LandingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dansun-app/ProfileScreen.jsx
try { (() => {
const {
  ProfileSummary,
  ProjectCard,
  Dialog,
  Input,
  Label,
  Button
} = window.DesignSystem_2c1582;
function ProfileScreen({
  me,
  projects,
  onOpenProject
}) {
  const [editing, setEditing] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(ProfileSummary, {
    avatarSrc: me.avatar,
    nickname: me.nickname,
    bio: me.bio,
    editable: true,
    onEdit: () => setEditing(true)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--border-default)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-h3-size)",
      fontWeight: 600
    }
  }, "\uB0B4 \uD504\uB85C\uC81D\uD2B8"), projects.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.id,
    name: p.name,
    description: p.description,
    owner: p.owner,
    onDelete: () => {},
    onClick: () => onOpenProject(p)
  }))), editing ? /*#__PURE__*/React.createElement(Dialog, {
    title: "\uD504\uB85C\uD544 \uC218\uC815",
    onClose: () => setEditing(false),
    width: 420,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true,
      onClick: () => setEditing(false)
    }, "\uCDE8\uC18C"), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: () => setEditing(false)
    }, "\uD655\uC778"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: me.avatar,
    alt: "",
    style: {
      width: 88,
      height: 88,
      borderRadius: "var(--radius-full)",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "nn"
  }, "\uB2C9\uB124\uC784"), /*#__PURE__*/React.createElement(Input, {
    id: "nn",
    defaultValue: me.nickname
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "bi"
  }, "\uD55C \uC904 \uC18C\uAC1C"), /*#__PURE__*/React.createElement(Input, {
    id: "bi",
    defaultValue: me.bio
  }))) : null);
}
Object.assign(window, {
  ProfileScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dansun-app/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dansun-app/ProjectScreen.jsx
try { (() => {
const {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Icon,
  ProjectCard,
  Button,
  Empty,
  Dialog,
  Input,
  Label,
  AlertModal
} = window.DesignSystem_2c1582;
function ProjectScreen({
  projects,
  onOpenProject,
  onCreate
}) {
  const [q, setQ] = React.useState("");
  const list = projects.filter(p => p.name.includes(q) || (p.description || "").includes(q));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(InputGroupAddon, null, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16
  })), /*#__PURE__*/React.createElement(InputGroupInput, {
    placeholder: "\uD0A4\uC6CC\uB4DC \uC785\uB825...",
    value: q,
    onChange: e => setQ(e.target.value)
  })), list.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    title: "\uB4F1\uB85D\uB41C \uD504\uB85C\uC81D\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",
    description: "\uCCAB \uBC88\uC9F8 \uD504\uB85C\uC81D\uD2B8\uB97C \uB4F1\uB85D\uD574 \uBCF4\uC138\uC694."
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      paddingBottom: 80
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.id,
    name: p.name,
    description: p.description,
    owner: p.owner,
    joined: p.joined,
    onClick: () => onOpenProject(p),
    onJoin: () => onOpenProject(p)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      bottom: 16,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: onCreate,
    style: {
      maxWidth: "var(--project-create-action-max-width)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus-circle",
    size: 20
  }), "\uC0C8 \uD504\uB85C\uC81D\uD2B8 \uCD94\uAC00")));
}
function ProjectCreateDialog({
  onClose,
  onSubmit
}) {
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [confirmClose, setConfirmClose] = React.useState(false);
  const tryClose = () => name || pw ? setConfirmClose(true) : onClose();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Dialog, {
    title: "\uC0C8 \uD504\uB85C\uC81D\uD2B8 \uB9CC\uB4E4\uAE30",
    onClose: tryClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true,
      onClick: tryClose
    }, "\uCDE8\uC18C"), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: () => name.trim() && onSubmit({
        name,
        description: desc || "설명이 없습니다."
      })
    }, "\uD655\uC778"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "pn"
  }, "\uD504\uB85C\uC81D\uD2B8 \uC774\uB984"), /*#__PURE__*/React.createElement(Input, {
    id: "pn",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "\uC5B4\uB514\uB85C \uB5A0\uB0A0\uAE4C\uC694?"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "pd"
  }, "\uC790\uC138\uD55C \uC124\uBA85"), /*#__PURE__*/React.createElement(Input, {
    id: "pd",
    value: desc,
    onChange: e => setDesc(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "pp"
  }, "\uBE44\uBC00\uBC88\uD638"), /*#__PURE__*/React.createElement(Input, {
    id: "pp",
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value)
  }))), confirmClose ? /*#__PURE__*/React.createElement(AlertModal, {
    title: "\uAC8C\uC2DC\uAE00 \uC791\uC131\uC774 \uB9C8\uBB34\uB9AC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",
    description: "\uC774 \uD654\uBA74\uC5D0\uC11C \uB098\uAC00\uBA74 \uC791\uC131 \uC911\uC774\uB358 \uB0B4\uC6A9\uC774 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4.",
    onCancel: () => setConfirmClose(false),
    onConfirm: onClose
  }) : null);
}
Object.assign(window, {
  ProjectScreen,
  ProjectCreateDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dansun-app/ProjectScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dansun-app/TodoScreen.jsx
try { (() => {
const {
  CreateTodoPrompt,
  TodoItem,
  Dialog,
  Input,
  Textarea,
  Label,
  Switch,
  Button,
  Empty,
  Toast
} = window.DesignSystem_2c1582;
function TodoScreen({
  groups,
  onToggle,
  onCreate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(CreateTodoPrompt, {
    onClick: onCreate
  }), groups.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    title: "\uB4F1\uB85D\uB41C \uC77C\uC815\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.",
    description: "\uCCAB \uBC88\uC9F8 \uC77C\uC815\uC744 \uB4F1\uB85D\uD574 \uBCF4\uC138\uC694."
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.owner,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: g.avatar,
    alt: "",
    style: {
      width: 24,
      height: 24,
      borderRadius: "var(--radius-full)",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-body-sm-size)",
      fontWeight: 600
    }
  }, g.owner)), g.items.map(it => /*#__PURE__*/React.createElement(TodoItem, {
    key: it.id,
    title: it.title,
    confirmed: it.confirmed,
    onToggle: () => onToggle(g.owner, it.id)
  }))))));
}
function TodoEditorDialog({
  onClose,
  onSubmit
}) {
  const [title, setTitle] = React.useState("");
  const [allday, setAllday] = React.useState(false);
  const [location, setLocation] = React.useState("");
  const [memo, setMemo] = React.useState("");
  return /*#__PURE__*/React.createElement(Dialog, {
    title: "\uC0C8 \uC77C\uC815 \uB9CC\uB4E4\uAE30",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true,
      onClick: onClose
    }, "\uCDE8\uC18C"), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: () => title.trim() && onSubmit(title)
    }, "\uD655\uC778"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "tt"
  }, "\uC81C\uBAA9"), /*#__PURE__*/React.createElement(Input, {
    id: "tt",
    value: title,
    onChange: e => setTitle(e.target.value),
    placeholder: "\uBB34\uC5C7\uC744 \uD560\uAE4C\uC694?"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "ta"
  }, "\uD558\uB8E8\uC885\uC77C"), /*#__PURE__*/React.createElement(Switch, {
    id: "ta",
    checked: allday,
    onChange: setAllday
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, null, "\uC2DC\uC791"), /*#__PURE__*/React.createElement(Input, {
    defaultValue: allday ? "2026. 09. 08" : "2026. 09. 08 09:00"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, null, "\uC885\uB8CC"), /*#__PURE__*/React.createElement(Input, {
    defaultValue: allday ? "2026. 09. 08" : "2026. 09. 08 11:00"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "tl"
  }, "\uC704\uCE58"), /*#__PURE__*/React.createElement(Input, {
    id: "tl",
    value: location,
    onChange: e => setLocation(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "tm"
  }, "\uBA54\uBAA8"), /*#__PURE__*/React.createElement(Textarea, {
    id: "tm",
    rows: 2,
    value: memo,
    onChange: e => setMemo(e.target.value)
  })));
}
Object.assign(window, {
  TodoScreen,
  TodoEditorDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dansun-app/TodoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dansun-app/data.js
try { (() => {
window.DANSUN_DATA = {
  me: {
    id: "u1",
    nickname: "지민",
    bio: "계획은 단순하게",
    avatar: "../../assets/avatar-dog-yellow.png"
  },
  projects: [{
    id: 1,
    name: "제주 3박 4일",
    description: "친구 5명 · 11월 12일 출발",
    owner: "지민",
    joined: true
  }, {
    id: 2,
    name: "속초 주말 워케이션",
    description: "노트북 챙기고 바다 보면서 일하기",
    owner: "현우",
    joined: false
  }, {
    id: 3,
    name: "부산 먹방 원정대",
    description: "돼지국밥부터 밀면까지 코스 정리",
    owner: "예린",
    joined: false
  }],
  todos: [{
    owner: "지민",
    avatar: "../../assets/avatar-dog-yellow.png",
    items: [{
      id: 11,
      title: "성산일출봉 일출 보기",
      confirmed: true
    }, {
      id: 12,
      title: "렌터카 예약",
      confirmed: true
    }, {
      id: 13,
      title: "흑돼지 저녁 예약",
      confirmed: false
    }]
  }, {
    owner: "현우",
    avatar: "../../assets/avatar-dog.png",
    items: [{
      id: 21,
      title: "숙소 최종 확정",
      confirmed: false
    }, {
      id: 22,
      title: "카페 리스트 정리",
      confirmed: false
    }]
  }],
  events: [{
    id: 11,
    title: "성산일출봉 일출",
    startHour: 6,
    endHour: 8
  }, {
    id: 12,
    title: "우도 자전거",
    startHour: 10,
    endHour: 12
  }, {
    id: 13,
    title: "흑돼지 저녁",
    startHour: 18,
    endHour: 20
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dansun-app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.AppHeader = __ds_scope.AppHeader;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.CreateTodoPrompt = __ds_scope.CreateTodoPrompt;

__ds_ns.ProfileSummary = __ds_scope.ProfileSummary;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.TodoItem = __ds_scope.TodoItem;

__ds_ns.AlldayEventBar = __ds_scope.AlldayEventBar;

__ds_ns.CalendarEventItem = __ds_scope.CalendarEventItem;

__ds_ns.WeekStrip = __ds_scope.WeekStrip;

__ds_ns.WeeklyCalendar = __ds_scope.WeeklyCalendar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Empty = __ds_scope.Empty;

__ds_ns.Loader = __ds_scope.Loader;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.InputGroup = __ds_scope.InputGroup;

__ds_ns.InputGroupAddon = __ds_scope.InputGroupAddon;

__ds_ns.InputGroupInput = __ds_scope.InputGroupInput;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.AlertModal = __ds_scope.AlertModal;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Popover = __ds_scope.Popover;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

})();
