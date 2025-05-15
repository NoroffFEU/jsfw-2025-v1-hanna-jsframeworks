import { useEffect, useState } from "react";
import { ONLINE_SHOP_API_URL } from "../../common/common";
import { TProduct } from "../../types/products";
import { ProductsList } from "../ProductsList/ProductsList";
import { Loader } from "../Loader/Loader";
import { PageLayout } from "../PageLayout/PageLayout";
import { SearchBar } from "../SearchBar/SearchBar";
import { Typography, Box } from "@mui/material";

/**
 * Landing page component that fetches and displays products from the API.
 *
 * Fetches data on mount using useEffect.
 * Allows users to search for products via the SearchBar component.
 * Filters products in real time based on search input.
 * Displays a loader, error state, and empty state as needed.
 *
 * @component
 * @returns {JSX.Element} A full page layout with search and filtered product list
 */

function Products() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [filtered, setFiltered] = useState<TProduct[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(ONLINE_SHOP_API_URL);
        const json = await response.json();
        setProducts(json.data);
        setFiltered(json.data);
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  useEffect(() => {
    const lower = search.toLowerCase();
    const matches = products.filter((product) =>
      product.title.toLowerCase().includes(lower),
    );
    setFiltered(matches);
  }, [search, products]);

  return (
    <PageLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ color: "#001f3f" }}>
            Showing Products
          </Typography>
        </Box>
        <SearchBar value={search} onChange={setSearch} />
      </Box>

      {loading && <Loader />}

      {!loading && error && (
        <Typography textAlign="center">
          Failed to load products. Please try again later.
        </Typography>
      )}

      {!loading && !error && filtered.length === 0 && (
        <Typography textAlign="center" mt={4}>
          No products match your search.
        </Typography>
      )}

      {!loading && !error && <ProductsList products={filtered} />}
    </PageLayout>
  );
}

export { Products };
