import { Products } from "./components/Products/Products";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div>
          <Header />
          <Products />
          <Footer />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
