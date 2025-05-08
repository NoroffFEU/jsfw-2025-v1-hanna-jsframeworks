import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TProduct } from "../../types/products";
import { ONLINE_SHOP_API_URL } from "../../common/common";
import { Loader } from "../Loader/Loader";
import { PageLayout } from "../PageLayout/PageLayout";
import { ProductInfo } from "../ProductInfo/ProductInfo";

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
        alert("Failed to load product.");
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
