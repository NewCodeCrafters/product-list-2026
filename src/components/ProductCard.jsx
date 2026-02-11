import React from "react";

const ProductCard = ({ image, category, price, name }) => {
  return (
    <article className="product-card">
      <figure className="product-img">
        <picture>
          <source media="(min-width:650px)" srcSet={image.desktop} />
          <source media="(min-width:465px)" srcSet={image.tablet} />
          <img src={image.mobile} alt={name} />
        </picture>
      </figure>
      <button type="button" className="add-cart-btn">
        <img src="/images/icon-add-to-cart.svg" alt="" />
        <span>Add to Cart</span>
      </button>
      <p className="product-category">{category}</p>
      <p className="product-name">{name}</p>
      <p className="product-price">${price.toFixed(2)}</p>
    </article>
  );
};

export default ProductCard;
