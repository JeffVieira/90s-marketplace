import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { useCartContext } from "../CartContext/CartContext";

const AddToCartButton = ({ product }) => {
  const { addProduct } = useCartContext();

  return (
    <Button
      onClick={() => addProduct(product)}
      type="primary"
      icon={<ShoppingCartOutlined />}
      size="large"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
