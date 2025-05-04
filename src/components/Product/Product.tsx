import { TProduct } from "../../types/products";

type ProductProps = {
  product: TProduct;
};

function Product({ product }: ProductProps) {
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image.url} alt={product.image.alt} />
      <p>Price: {product.price}</p>
      <p>Discounted Price: ${product.discountedPrice}</p>
      <p>Rating: {product.rating}/5</p>
    </div>
  );
}

export { Product };
