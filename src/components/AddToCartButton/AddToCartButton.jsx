import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const AddToCartButton = ({ id }) => {
  return (
    <Button type="primary" icon={<ShoppingCartOutlined />} size="large">
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
