import { TProduct } from "../../types/products";
import { Product } from "../Product/Product";
import { Grid } from "@mui/material";

type TProductListProps = {
  products: TProduct[];
};

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
