type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "rounded-xl px-5 py-3 font-medium transition";

  const variants = {
    primary: "bg-emerald-400 text-neutral-950 hover:bg-emerald-300",
    secondary:
      "border border-neutral-700 text-neutral-200 hover:border-emerald-400",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}