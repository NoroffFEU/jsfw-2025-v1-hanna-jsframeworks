import { useEffect, useState } from "react";
import { ONLINE_SHOP_API_URL } from "../../common/common";
import { TProduct } from "../../types/products";
import { ProductsList } from "../ProductsList/ProductsList";
import { PageLayout } from "../PageLayout/PageLayout";

/**
 * Fetches and displays a list of products from the online shop API.
 *
 * Uses useEffect to perform the fetch on mount and stores the products
 * in local state. Passes the data to the ProductsList component for rendering.
 *
 * @component
 * @returns {JSX.Element} Page layout containing the product list
 */

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
    <PageLayout>
      <ProductsList products={products} />
    </PageLayout>
  );
}

export { Products };
