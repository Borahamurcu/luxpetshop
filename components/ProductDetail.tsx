"use client";

import { useState } from "react";
import Image from "next/image";
import { formatPrice, type Product } from "@/data/products";

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(
    product.colorOptions?.[0]?.name
  );

  const activeColor = product.colorOptions?.find(
    (color) => color.name === selectedColor
  );
  const activeImage = activeColor?.image ?? product.image;
  const activeAlt = activeColor
    ? `${product.name} – ${activeColor.name}`
    : product.name;

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
      <div className="relative aspect-[4/5] overflow-hidden bg-beige lg:sticky lg:top-28 lg:h-fit">
        <Image
          key={activeImage}
          src={activeImage}
          alt={activeAlt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div>
        <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-bronze">
          {product.category}
        </p>
        <h1 className="mt-4 font-display text-3xl text-charcoal sm:text-4xl">
          {product.name}
        </h1>
        <p className="mt-4 text-2xl text-charcoal">
          {formatPrice(product.price, product.currency)}
        </p>

        <p className="mt-8 text-base leading-relaxed text-charcoal/70">
          {product.description}
        </p>

        {product.colorOptions && product.colorOptions.length > 0 && (
          <div className="mt-8">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal/50">
              Renk Seçenekleri
              {activeColor && (
                <span className="ml-2 normal-case tracking-normal text-charcoal/40">
                  — {activeColor.name}
                </span>
              )}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-5">
              {product.colorOptions.map((color) => {
                const isSelected = color.name === selectedColor;
                return (
                  <li key={color.name} className="flex flex-col items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedColor(color.name)}
                      aria-pressed={isSelected}
                      aria-label={color.name}
                      title={color.name}
                      className={`h-9 w-9 rounded-full border transition-shadow ${
                        isSelected
                          ? "border-charcoal/20 ring-2 ring-bronze ring-offset-2 ring-offset-ivory"
                          : "border-charcoal/15 ring-1 ring-transparent hover:ring-charcoal/20 hover:ring-offset-2 hover:ring-offset-ivory"
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                    <span
                      className={`text-[11px] transition-colors ${
                        isSelected ? "text-charcoal" : "text-charcoal/60"
                      }`}
                    >
                      {color.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <a
          href={product.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex w-full items-center justify-center border border-bronze bg-bronze px-8 py-4 text-[13px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:bg-transparent hover:text-bronze sm:w-auto"
        >
          Ürünü Görüntüle
        </a>
        <p className="mt-3 text-xs text-charcoal/50">
          Satın alma işlemini tamamlamak için ortak butiğimize yönlendirir.
        </p>

        <div className="mt-12 border-t border-charcoal/10 pt-8">
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal/50">
            Özellikler
          </h2>
          <dl className="mt-6 divide-y divide-charcoal/10">
            {product.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between gap-6 py-3 text-sm"
              >
                <dt className="text-charcoal/50">{spec.label}</dt>
                <dd className="text-right text-charcoal">{spec.value}</dd>
              </div>
            ))}
            <div className="flex justify-between gap-6 py-3 text-sm">
              <dt className="text-charcoal/50">Malzemeler</dt>
              <dd className="text-right text-charcoal">{product.materials}</dd>
            </div>
            <div className="flex justify-between gap-6 py-3 text-sm">
              <dt className="text-charcoal/50">Menşei</dt>
              <dd className="text-right text-charcoal">{product.origin}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
