import { useEffect, useState } from "react";
import { ONLINE_SHOP_API_URL } from "../../common/common";
import { TProduct } from "../../types/products";
import { ProductsList } from "../ProductsList/ProductsList";
import { Loader } from "../Loader/Loader";
import { PageLayout } from "../PageLayout/PageLayout";
import { Typography } from "@mui/material";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(ONLINE_SHOP_API_URL);
        const json = await response.json();

        if (json.data && Array.isArray(json.data)) {
          setProducts(json.data);
        } else {
          throw new Error("No data returned");
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  return (
    <PageLayout>
      {loading && <Loader />}
      {!loading && error && (
        <Typography textAlign="center">
          Failed to load products. Please try again later.
        </Typography>
      )}
      {!loading && !error && <ProductsList products={products} />}
    </PageLayout>
  );
}

export { Products };
