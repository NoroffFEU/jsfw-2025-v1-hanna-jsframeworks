import { useEffect, useState } from "react";
import { ONLINE_SHOP_API_URL } from "../../common/common";
import { TProduct } from "../../types/products";
import { ProductsList } from "../ProductsList/ProductsList";

function Products() {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(ONLINE_SHOP_API_URL);
        const json = await response.json();
        setProducts(json.data);
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, []);

  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
}

export { Products };
