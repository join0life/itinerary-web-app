import React from "react";

const LUCIDE_BASE = "https://unpkg.com/lucide-static@0.542.0/icons/";

/** Renders a Lucide icon as a colourable mask, so it inherits currentColor without inlining SVG source. */
export function Icon({ name, size = 20, color = "currentColor", strokeWidth, style, ...rest }) {
  const url = "url(" + LUCIDE_BASE + name + ".svg)";
  return (
    <span aria-hidden="true" data-icon={name} style={{ display: "inline-block", width: size, height: size, flexShrink: 0,
      background: color, WebkitMaskImage: url, maskImage: url, WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat",
      WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskPosition: "center", maskPosition: "center", ...style }} {...rest} />
  );
}
