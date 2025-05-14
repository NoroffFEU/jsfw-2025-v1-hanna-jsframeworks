import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { TProduct } from "../../types/products";
import { Link } from "react-router-dom";

type ProductProps = {
  product: TProduct;
};

/**
 * Renders a single product card with image, title, description, and price.
 * If a discounted price is available, it is displayed alongside the original price (with line-through)
 * Includes a button that links to the detailed product view.
 *
 * @component
 * @param {Object} props
 * @param {TProduct} props.product - The product data to display
 * @returns {JSX.Element} A styled product card
 */
function Product({ product }: ProductProps) {
  const hasRating = product.rating > 0;

  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={product.image.url}
        alt={product.image.alt}
      />
      <CardContent sx={{ height: 200 }}>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body1" color="text.secondary">
          {hasRating ? `${product.rating.toFixed(1)} / 5 ⭐` : "No ratings yet"}
        </Typography>
        <Typography variant="subtitle1">
          {product.discountedPrice < product.price ? (
            <>
              <span
                style={{ textDecoration: "line-through", marginRight: "8px" }}
              >
                ${product.price}
              </span>
              <span style={{ color: "#00796b" }}>
                ${product.discountedPrice}
              </span>
            </>
          ) : (
            <span>${product.price}</span>
          )}
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to={`/product/${product.id}`}
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: "#001f3f",
            "&:hover": {
              backgroundColor: "#003366",
            },
          }}
        >
          More Info
        </Button>
      </CardContent>
    </Card>
  );
}

export { Product };
