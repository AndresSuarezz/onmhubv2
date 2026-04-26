import AsteriskMark from "./AsteriskMark";

interface LogoProps {
  size?: number;
  mono?: boolean;
}

export default function Logo({ size = 28, mono = false }: LogoProps) {
  const color = mono ? "currentColor" : "var(--cream)";
  return (
    <a
      href="#top"
      aria-label="OMN HUB — inicio"
      style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
    >
      <AsteriskMark size={size} color={color} strokeWidth={14} />
      <span
        style={{
          fontFamily: "'General Sans', sans-serif",
          fontWeight: 700,
          fontSize: size * 0.78,
          letterSpacing: "-0.02em",
          color,
          lineHeight: 1,
        }}
      >
        OMN HUB
      </span>
    </a>
  );
}
