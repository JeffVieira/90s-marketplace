import {
  Breadcrumb,
  PageHeader,
  Empty,
  Button,
  Table,
  Space,
  Card,
  Divider,
  notification,
} from "antd";

import { ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { Layout, useCartContext } from "../../components";

import style from "./Cart.module.css";

const Cart = () => {
  const { cartProducts, removeProduct } = useCartContext();

  const openNotification = () => {
    const args = {
      message: "Payment Feature",
      description: "Sorry, this feature has not yet been implemented.",
      duration: 3,
    };
    notification.open(args);
  };

  const columns = [
    {
      title: "Product",
      key: "product",
      render: (_, product) => product.title,
    },
    {
      title: "Quantity",
      key: "quantity",
      render: () => "1",
    },
    {
      title: "Price",
      key: "price",
      render: (_, product) => product.price,
    },
    {
      title: "Action",
      key: "action",
      render: (_, __, index) => (
        <Space size="middle">
          <Button onClick={() => removeProduct(index)} type="link" danger>
            Remove
          </Button>
        </Space>
      ),
    },
  ];

  const isEmpty = cartProducts.length === 0;

  return (
    <Layout>
      <Breadcrumb className={style.breadcrumb}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Cart</Breadcrumb.Item>
      </Breadcrumb>
      <div className={style.pageContent}>
        <PageHeader
          title="My cart"
          subTitle="check your products and proceed to payments"
        />

        {isEmpty ? (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="There is no product on you cart"
          >
            <Link to="/">
              <Button size="large" icon={<ShoppingOutlined />} type="primary">
                keep shopping
              </Button>
            </Link>
          </Empty>
        ) : (
          <div className={style.cartProducts}>
            <Table
              rowKey={(product) => product.id}
              dataSource={cartProducts}
              columns={columns}
              className={style.productTable}
            />
            <Card title="Order Summary">
              <div>
                <div className={style.summaryInfo}>
                  <span>products</span>
                  <span>{cartProducts.length}</span>
                </div>
                <div className={style.summaryInfo}>
                  <span>shipping</span>
                  <span>-</span>
                </div>
                <Divider />
                <div className={`${style.summaryInfo} ${style.summaryTotal}`}>
                  <span>Total</span>
                  <span>
                    {cartProducts.reduce(
                      (accum, product) => accum + product.price,
                      0
                    )}
                  </span>
                </div>

                <Button
                  type="primary"
                  block
                  size="large"
                  onClick={openNotification}
                >
                  Proceed to payment
                </Button>

                <Link to="/">
                  <Button type="link" block size="small">
                    Add more products?
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
