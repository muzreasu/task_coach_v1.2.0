import 'antd/dist/antd.css';
import * as React from "react";

import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const Board = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Create Boards</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>Boards</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 650 }}>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Muzrea ©2019 Created</Footer>
    </Layout>
  )
};

export default Board;
