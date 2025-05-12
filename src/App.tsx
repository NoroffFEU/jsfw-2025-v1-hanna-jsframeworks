import { Products } from "./components/Products/Products";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCartPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { Routes, Route } from "react-router-dom";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { CheckOutSuccess } from "./components/CheckOutSuccessPage/CheckOutSuccessPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout-success" element={<CheckOutSuccess />} />
        </Routes>
        <Footer />
        <ToastContainer autoClose={2000} closeOnClick />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
