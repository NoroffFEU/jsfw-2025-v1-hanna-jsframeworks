import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function Header() {
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
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export { Header };
