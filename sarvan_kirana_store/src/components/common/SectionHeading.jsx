/**
 * SectionHeading — consistent heading block for all sections.
 * Renders a badge label, main heading, and optional subtext.
 */

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}) {
  const alignClass = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  }[align] || "text-center items-center";

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {badge && (
        <span className={`badge-green ${light ? "bg-white/15 text-white border-white/25" : ""}`}>
          <span aria-hidden="true">✦</span>
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight tracking-tight ${
          light ? "text-white" : "text-[#1a5c2a]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
            light ? "text-white/80" : "text-[#6b7280]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
