import { Products } from "./components/Products/Products";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCartPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { Routes, Route } from "react-router-dom";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
