import { toast } from "react-toastify";
import { TProduct } from "../../types/products";
import { useCart } from "../CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  Box,
  Typography,
  CardContent,
  Divider,
  Button,
  Stack,
  Chip,
} from "@mui/material";

type Props = {
  product: TProduct;
};

/**
 * Displays detailed infor a single product, including:
 *
 * - Image, title, description, tags, and pricing
 * - Add to cart button with toast notification
 * - Navigation back to the main shopping page
 * - Optional review section if reviews are present
 *
 * Uses responsive layout via Material UI and shows pricing with
 * discount styling when applicable.
 * @component
 * @param {Object} props - The component props
 * @param {TProduct} props.product - The product object containing all the displayed information
 * @returns {JSX.Element} A styled card displayin full product details
 */

function ProductInfo({ product }: Props) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  /**
   * Adds the product to the cart using the CartContext and displays a success toast notification
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
          <Typography variant="h4">{product.title}</Typography>
          {product.tags.length > 0 && (
            <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: "wrap" }}>
              {product.tags.map((tag) => (
                <Chip key={tag} label={tag} variant="outlined" />
              ))}
            </Stack>
          )}
          <Typography variant="body1" color="text.secondary">
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
              mr: 1,
              backgroundColor: "#001f3f",
              "&:hover": {
                backgroundColor: "#003366",
              },
            }}
          >
            Add to Cart
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/")}
            sx={{
              mb: 2,
              color: "#001f3f",
              borderColor: "#001f3f",
              backgroundColor: "#ffffff",
              "&:hover": {
                backgroundColor: "#aad8ff",
                borderColor: "#aad8ff",
              },
            }}
          >
            More Shopping
          </Button>

          {product.reviews?.length > 0 && (
            <>
              <Divider sx={{ my: 3 }} />
              <Typography variant="h6">Reviews</Typography>
              {product.reviews.map((review) => (
                <Box key={review.id} sx={{ mb: 2 }}>
                  <Typography variant="subtitle2">
                    {review.username} – {review.rating} ⭐
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
