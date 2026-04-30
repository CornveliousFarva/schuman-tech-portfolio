type LogoSelectorProps = {
  variant?: "full" | "compact";
};

export default function LogoSelector({
  variant = "full",
}: LogoSelectorProps) {
  return (
    <a
      href="#"
      className="group inline-flex items-center gap-3 transition"
    >
      {/* Logo Mark */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10">
        <span className="text-sm font-semibold text-emerald-400">GS</span>
      </div>

      {/* Logo Text */}
      {variant === "full" && (
        <div className="leading-tight">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            Gregory Schuman™
          </p>

          <p className="text-sm text-neutral-300 transition group-hover:text-white">
            Technical Systems & Documentation
          </p>
        </div>
      )}
    </a>
  );
}