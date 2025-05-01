import { TProduct } from "../../types/products";

type ProductProps = {
  product: TProduct;
};

function Product({ product }: ProductProps) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <div>Price: <p>{product.price}</p></div>
    </div>
  )
};

export { Product };