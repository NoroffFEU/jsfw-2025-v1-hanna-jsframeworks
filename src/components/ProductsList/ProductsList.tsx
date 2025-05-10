import { TProduct } from "../../types/products";
import { Product } from "../Product/Product";
import { Grid } from "@mui/material";

type TProductListProps = {
  products: TProduct[];
};

/**
 * Displays a responsive grid of product cards using Material UI.
 *
 * @component
 * @param {Object} props
 * @param {TProduct[]} props.products - Array of product objects to display
 * @returns {JSX.Element} Grid layout of product cards
 */
function ProductsList({ products }: TProductListProps) {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export { ProductsList };
