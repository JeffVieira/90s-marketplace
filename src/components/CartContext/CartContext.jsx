import { createContext, useContext, useState } from "react";
import { notification } from "antd";

const openNotification = () => {
  const args = {
    message: "Product add with sucess",
    description: "The product was add to your cart",
    duration: 3,
    placement: "bottomRight",
  };
  notification.open(args);
};

const CartContext = createContext();

const CartProvider = ({ defaultProducts = [], children }) => {
  const [cartProducts, SetCardProducts] = useState(defaultProducts);

  const addProduct = (product) => {
    SetCardProducts([...cartProducts, product]);
    openNotification();
  };

  const removeProduct = (productId) => {
    const removedProducts = cartProducts.filter(
      (product, index) => index !== productId
    );

    SetCardProducts(removedProducts);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { useCartContext, CartProvider };
