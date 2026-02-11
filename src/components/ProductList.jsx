import products from "../assets/data.json";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="product-list-container">
      {products.map((product, idx) => (
        <ProductCard {...product} key={idx} />
      ))}
    </div>
  );
};

export default ProductList;
