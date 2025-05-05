import { Products } from "./components/Products/Products";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCartPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div>
          <Header />
          <Box sx={{ margin: "0 auto", padding: "2rem" }}>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
          </Box>
          <Footer />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
