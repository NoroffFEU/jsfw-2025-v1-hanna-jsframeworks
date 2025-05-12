import { toast } from "react-toastify";
import { TProduct } from "../../types/products";
import { useCart } from "../CartContext/CartContext";
import {
  Card,
  CardMedia,
  Box,
  Typography,
  CardContent,
  Divider,
  Button,
} from "@mui/material";

type Props = {
  product: TProduct;
};

/**
 * Displays detailed information for a single product, including its image, title, description, pricing and reviews
 *
 * @component
 * @param {Object} props - The component props
 * @param {TProduct} props.product - The product object containing all the displayed information
 * @returns {JSX.Element} A styled card displayin full product details
 */

function ProductInfo({ product }: Props) {
  const { addToCart } = useCart();

  /**
   * Handles adding the product to the cart and shows a toast notification.
   */
  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success("Product added to cart!");
    }
  };
  return (
    <Card sx={{ maxWidth: 1200, margin: "auto", mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", md: 400 },
            height: { xs: 300, md: "auto" },
            objectFit: "cover",
          }}
          image={product.image.url}
          alt={product.image.alt}
        />

        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
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
            color="primary"
            onClick={handleAddToCart}
            sx={{
              mb: 2,
              backgroundColor: "#001f3f",
              "&:hover": {
                backgroundColor: "#003366",
              },
            }}
          >
            Add to Cart
          </Button>

          {product.reviews?.length > 0 && (
            <>
              <Divider sx={{ my: 3 }} />
              <Typography variant="h6" gutterBottom>
                Reviews
              </Typography>
              {product.reviews.map((review) => (
                <Box key={review.id} sx={{ mb: 2 }}>
                  <Typography variant="subtitle2">
                    {review.username} – ⭐ {review.rating}
                  </Typography>
                  <Typography variant="body2">{review.description}</Typography>
                </Box>
              ))}
            </>
          )}
        </CardContent>
      </Box>
    </Card>
  );
}

export { ProductInfo };
