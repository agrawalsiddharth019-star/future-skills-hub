import { Link } from "@tanstack/react-router";

export function Brand() {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="NewEra Solution home">
      <span className="brand-mark" aria-hidden="true"><span>N</span></span>
      <span className="truncate font-display text-[1.05rem] font-semibold tracking-normal text-foreground">NewEra <span className="text-primary">Solution</span></span>
    </Link>
  );
}
