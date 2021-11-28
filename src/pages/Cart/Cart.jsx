import { Breadcrumb } from "antd";

import { Layout } from "../../components";

const Cart = () => {
  return (
    <Layout>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Cart</div>
    </Layout>
  );
};

export default Cart;
