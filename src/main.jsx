import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./store/CartContext";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
);
