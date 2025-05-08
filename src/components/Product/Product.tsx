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
