import {
  Typography,
  Card,
  Box,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import { useCart } from "../CartContext/CartContext";

function ShoppingCart() {
  const { cartItems } = useCart();

  return (
    <>
      {cartItems.map(({ product, quantity }) => (
        <Card
          key={product.id}
          sx={{
            maxWidth: { xs: 300, sm: "100%", md: 400 },
            margin: "auto",
            mt: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
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

              <Typography variant="h6" sx={{ mb: 2 }}>
                {product.discountedPrice ? (
                  <>
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginRight: "8px",
                      }}
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
              <Divider sx={{ my: 2 }} />
            </CardContent>
          </Box>
        </Card>
      ))}
      ,
    </>
  );
}
export { ShoppingCart };
