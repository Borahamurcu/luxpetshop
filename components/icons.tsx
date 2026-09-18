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

export function BedIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="18" y="48" width="64" height="26" rx="8" />
      <path d="M18 48 Q18 26 40 26 L60 26 Q82 26 82 48" />
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
  "Yatak & Mobilya": BedIcon,
  Seyahat: ToteIcon,
  Bakım: BrushIcon,
};
