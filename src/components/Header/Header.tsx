import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";

/**
 * Displays the top navigation bar with a logo link and cart icon.
 *
 * @component
 * @returns {JSXElement} The header navigation component
 */
function Header() {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#001f3f" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box component={Link} to="/" sx={{ textDecoration: "none" }}>
          <Typography variant="h5" sx={{ color: "white" }}>
            Logo
          </Typography>
        </Box>
        <IconButton
          component={Link}
          to="/cart"
          color="inherit"
          sx={{
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "white",
            },
          }}
        >
          <Badge badgeContent={totalQuantity}>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export { Header };
