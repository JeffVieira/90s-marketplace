import React from "react";
import { Layout as AntLayout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";

import "./Layout.css";

const { Header, Footer, Content } = AntLayout;

const Layout = ({ children }) => {
  return (
    <AntLayout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="cart">
            <Link to="/cart">Cart</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{ padding: "0 50px", height: "calc(100vh - 70px - 64px)" }}
      >
        {children}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        90s-Marketplace ©2021 Created by Jeff Vieira
      </Footer>
    </AntLayout>
  );
};

export default Layout;
