import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Cart } from "./pages";
import { CartProvider } from "./components";

import "antd/dist/antd.css";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
