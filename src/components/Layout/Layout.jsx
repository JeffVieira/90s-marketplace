import React from "react";
import { Layout as AntLayout, Menu, Breadcrumb } from "antd";

import "./Layout.css";

const { Header, Footer, Content } = AntLayout;

const Layout = ({ children }) => {
  return (
    <AntLayout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="cart">Cart</Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{ padding: "0 50px", height: "calc(100vh - 70px - 64px)" }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        90s-Marketplace ©2021 Created by Jeff Vieira
      </Footer>
    </AntLayout>
  );
};

export default Layout;
