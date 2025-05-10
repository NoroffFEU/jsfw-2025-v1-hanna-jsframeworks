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
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={product.image.url}
        alt={product.image.alt}
      />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="subtitle1">
          {product.discountedPrice ? (
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
          sx={{ mt: 2 }}
        >
          More Info
        </Button>
      </CardContent>
    </Card>
  );
}

export { Product };
