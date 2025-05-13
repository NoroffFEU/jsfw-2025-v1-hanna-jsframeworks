import {
  Typography,
  TextField,
  Card,
  Box,
  CardMedia,
  CardContent,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
import { useCart } from "../CartContext/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined } from "@mui/icons-material";

function ShoppingCart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () =>
    cartItems.reduce((acc, { product, quantity }) => {
      const price = product.discountedPrice ?? product.price;
      return acc + price * quantity;
    }, 0);

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
    toast.info("Item removed from cart");
  };

  const handleCheckout = () => {
    toast.success("Checkout was successful! Redirecting....");
    setTimeout(() => {
      clearCart();
      navigate("/checkout-success");
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flex: "column",
          justifyContent: "center",
          textAlign: "center",
          mt: 4,
        }}
      >
        <Card sx={{ p: 4 }}>
          <Typography variant="h5" align="center" sx={{ mt: 2, mb: 2 }}>
            Your cart is empty.
          </Typography>
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            color="primary"
            sx={{
              mb: 2,
              backgroundColor: "#001f3f",
              "&:hover": {
                backgroundColor: "#003366",
              },
            }}
          >
            Go Shopping
          </Button>
        </Card>
      </Box>
    );
  }

  return (
    <>
      {cartItems.map(({ product, quantity }) => (
        <Card
          key={product.id}
          sx={{
            maxWidth: { xs: 300, sm: 550 },
            margin: "auto",
            mt: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: 300,
                height: 300,
                objectFit: "cover",
                margin: "auto",
              }}
              image={product.image.url}
              alt={product.image.alt}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h5">{product.title}</Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Quantity: {quantity}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Price: ${product.discountedPrice ?? product.price}
              </Typography>

              <Box>
                <TextField
                  type="number"
                  label="Qty"
                  variant="outlined"
                  size="small"
                  value={quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    if (val > 0) updateQuantity(product.id, val);
                  }}
                  inputProps={{ min: 1, style: { textAlign: "center" } }}
                  sx={{ width: 80, mr: 2 }}
                />
                <IconButton
                  onClick={() => handleRemove(product.id)}
                  aria-label="Remove Item"
                >
                  <DeleteOutlined />
                </IconButton>
              </Box>
              <Divider sx={{ my: 2 }} />
            </CardContent>
          </Box>
        </Card>
      ))}

      <Box sx={{ maxWidth: 550, margin: "auto", mt: 4, textAlign: "center" }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Total: ${calculateTotal().toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          onClick={handleCheckout}
          sx={{
            backgroundColor: "#001f3f",
            "&:hover": { backgroundColor: "#003366" },
          }}
        >
          Checkout
        </Button>
      </Box>
    </>
  );
}
export { ShoppingCart };
