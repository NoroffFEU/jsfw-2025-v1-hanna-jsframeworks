import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TProduct } from "../../types/products";
import { ONLINE_SHOP_API_URL } from "../../common/common";
import { Loader } from "../Loader/Loader";
import { PageLayout } from "../PageLayout/PageLayout";
import { ProductInfo } from "../ProductInfo/ProductInfo";

/**
 * Fetches and displays detailed information about a single product
 * based on the product ID from the URL.
 *
 * Shows a loading spinner while fetching, handles errors with a user-facing alert,
 * and displays either the product info, a not-found message, or a loader.
 *
 * @component
 * @returns {JSX.Element} The detailed product page
 */

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<TProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${ONLINE_SHOP_API_URL}/${id}`);
        const json = await response.json();
        setProduct(json.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <PageLayout>
      {loading ? (
        <Loader />
      ) : product ? (
        <ProductInfo product={product} />
      ) : (
        <p>Product not found</p>
      )}
    </PageLayout>
  );
}

export { ProductDetails };
