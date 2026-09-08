/**
 * Button — reusable CTA button component.
 * Variants: primary | secondary | outline | ghost | accent
 * Sizes: sm | md | lg
 */

const variantClasses = {
  primary:
    "bg-[#1a5c2a] text-white hover:bg-[#1f7033] active:bg-[#0d3318] shadow-sm hover:shadow-md",
  secondary:
    "bg-[#2d8a4e] text-white hover:bg-[#258541] active:bg-[#1a5c2a] shadow-sm hover:shadow-md",
  accent:
    "bg-[#f59e0b] text-[#1c1c1e] hover:bg-[#fbbf24] active:bg-[#d97706] font-bold shadow-sm hover:shadow-md",
  outline:
    "border-2 border-[#1a5c2a] text-[#1a5c2a] bg-transparent hover:bg-[#f0faf3] active:bg-[#d1f0da]",
  "outline-white":
    "border-2 border-white text-white bg-transparent hover:bg-white/10 active:bg-white/20",
  ghost:
    "bg-transparent text-[#1a5c2a] hover:bg-[#f0faf3] active:bg-[#d1f0da]",
  white:
    "bg-white text-[#1a5c2a] hover:bg-[#f0faf3] font-semibold shadow-sm hover:shadow-md",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-5 py-2.5 text-base gap-2",
  lg: "px-7 py-3.5 text-base gap-2.5",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  className = "",
  icon: Icon,
  iconPosition = "left",
  onClick,
  type = "button",
  ariaLabel,
  disabled = false,
}) {
  const baseClasses = [
    "inline-flex items-center justify-center font-semibold rounded-full",
    "transition-all duration-200 ease-in-out",
    "focus-visible:outline-2 focus-visible:outline-[#f59e0b] focus-visible:outline-offset-2",
    "select-none min-h-[44px]",
    variantClasses[variant] || variantClasses.primary,
    sizeClasses[size] || sizeClasses.md,
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer",
    className,
  ].join(" ");

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon size={size === "sm" ? 15 : size === "lg" ? 20 : 17} aria-hidden="true" />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon size={size === "sm" ? 15 : size === "lg" ? 20 : 17} aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        aria-label={ariaLabel}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
