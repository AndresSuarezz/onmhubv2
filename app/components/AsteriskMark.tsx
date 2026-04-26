interface AsteriskMarkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export default function AsteriskMark({
  size = 32,
  color = "currentColor",
  strokeWidth = 14,
  className = "",
}: AsteriskMarkProps) {
  const spokes = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i * 45 * Math.PI) / 180;
    const x1 = 50 + Math.cos(angle) * 14;
    const y1 = 50 + Math.sin(angle) * 14;
    const x2 = 50 + Math.cos(angle) * 46;
    const y2 = 50 + Math.sin(angle) * 46;
    spokes.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    );
  }
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{ display: "block", flexShrink: 0, width: size, height: size }}
      aria-hidden="true"
    >
      {spokes}
      <circle
        cx="50"
        cy="50"
        r="6"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth * 0.7}
      />
    </svg>
  );
}
