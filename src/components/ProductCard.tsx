import React from "react";
import type { Product } from "../data.products";

type Props = {
  product: Product;
  onOpen: (p: Product) => void;
};

export default function ProductCard({ product, onOpen }: Props) {
  return (
    <article className="card" aria-labelledby={`${product.id}-title`}>
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ objectFit: "fill" }}
        loading="lazy"
      />
      <div className="card-body">
        <h3 id={`${product.id}-title`} className="card-title">
          {product.name}
        </h3>
        <p className="card-sub">{product.tagline}</p>
        <p className="card-sub">{product.description}</p>
        {!!product.tags?.length && (
          <div className="card-tags" aria-label="Теги">
            {product.tags.map((t) => (
              <span key={t} className="tag">
                #{t}
              </span>
            ))}
          </div>
        )}
        <div className="card-actions">
          <button
            className="btn btn-ghost"
            onClick={() => onOpen(product)}
            aria-label={`Подробнее о ${product.name}`}
          >
            Подробнее
          </button>
        </div>
      </div>
    </article>
  );
}
