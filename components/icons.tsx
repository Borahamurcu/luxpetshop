import type { SVGProps } from "react";
import type { Category } from "@/data/products";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function CollarIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="50" cy="50" r="32" />
      <circle cx="50" cy="18" r="3" fill="currentColor" />
      <circle cx="27" cy="27" r="2" fill="currentColor" />
      <circle cx="73" cy="27" r="2" fill="currentColor" />
    </Base>
  );
}

export function CatIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M25 75 C25 45 35 20 50 20 C65 20 75 45 75 75 Z" />
      <path d="M35 22 L27 6 L47 18 Z" strokeLinejoin="round" />
      <path d="M65 22 L73 6 L53 18 Z" strokeLinejoin="round" />
      <circle cx="42" cy="48" r="2.5" fill="currentColor" />
      <circle cx="58" cy="48" r="2.5" fill="currentColor" />
    </Base>
  );
}

export function SweaterIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M25 32 L42 18 L50 26 L58 18 L75 32 L64 46 L58 40 L58 82 L42 82 L42 40 L36 46 Z" />
    </Base>
  );
}

export function BowlIcon(props: IconProps) {
  return (
    <Base {...props}>
      <ellipse cx="50" cy="38" rx="30" ry="9" />
      <path d="M20 38 Q20 68 50 68 Q80 68 80 38" />
    </Base>
  );
}

export function HammockIcon(props: IconProps) {
  return (
    <Base {...props}>
      <line x1="15" y1="16" x2="85" y2="16" />
      <line x1="31" y1="16" x2="39" y2="60" />
      <line x1="69" y1="16" x2="61" y2="60" />
      <path d="M39 60 Q50 80 61 60" />
    </Base>
  );
}

export function RanzaIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="20" y="18" width="60" height="22" rx="4" />
      <rect x="20" y="60" width="60" height="22" rx="4" />
      <line x1="20" y1="40" x2="20" y2="60" />
      <line x1="80" y1="40" x2="80" y2="60" />
    </Base>
  );
}

export function BombeliIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M20 68 A30 30 0 0 1 80 68" />
      <line x1="20" y1="68" x2="20" y2="82" />
      <line x1="80" y1="68" x2="80" y2="82" />
      <line x1="20" y1="82" x2="80" y2="82" />
      <path d="M40 82 Q40 64 50 64 Q60 64 60 82" />
    </Base>
  );
}

export function GlassIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="28" y="34" width="44" height="48" rx="8" />
      <rect x="38" y="17" width="24" height="19" rx="4" />
      <line x1="28" y1="55" x2="72" y2="55" opacity="0.5" />
    </Base>
  );
}

export function ToteIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M28 34 L28 80 L72 80 L72 34 Z" strokeLinejoin="round" />
      <path d="M38 34 C38 18 62 18 62 34" />
    </Base>
  );
}

export function BrushIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="38" y="10" width="24" height="42" rx="10" />
      <rect x="22" y="52" width="56" height="34" rx="6" />
    </Base>
  );
}

export const CATEGORY_ICONS: Record<
  Category,
  (props: IconProps) => React.JSX.Element
> = {
  "Köpek Aksesuarları": CollarIcon,
  "Kedi Aksesuarları": CatIcon,
  Giyim: SweaterIcon,
  "Kaplar & Beslenme": BowlIcon,
  Seyahat: ToteIcon,
  Bakım: BrushIcon,
  Salıncak: HammockIcon,
  Ranza: RanzaIcon,
  Bombeli: BombeliIcon,
  "Cam Ürünler": GlassIcon,
};
