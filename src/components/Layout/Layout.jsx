import React from "react";
import { Layout as AntLayout, Menu, Badge } from "antd";
import { Link } from "react-router-dom";

import { useCartContext } from "../CartContext/CartContext";

import style from "./Layout.module.css";

const { Header, Footer, Content } = AntLayout;

const Layout = ({ children }) => {
  const { cartProducts } = useCartContext();

  return (
    <AntLayout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="cart">
            <Badge count={cartProducts.length} size="small" offset={[10, -5]}>
              <Link className={style.link} to="/cart">
                Cart
              </Link>
            </Badge>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className={style.content}>{children}</Content>
      <Footer className={style.footer}>
        90s-Marketplace ©2021 Created by Jeff Vieira
      </Footer>
    </AntLayout>
  );
};

export default Layout;
