/**
 * Container — responsive centered layout wrapper.
 * Provides consistent horizontal padding and max-width.
 */

export default function Container({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
