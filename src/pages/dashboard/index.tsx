import { Breadcrumb, Col, Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import * as React from "react";
import { useState } from "react";
import Board from "./board";
import BoardCreateForm from "./create/boardCreateForm";
import './index.module.scss';

const { Header, Content, Footer } = Layout;

const CreateBoard = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const initBoards: string | null = localStorage.getItem('boards');
  if (initBoards == null) {
    localStorage.setItem('boards', '');
  }
  const initialBoards = (initBoards as string).split(',');
  // const [boards, setBoards] = useState<string[]>(initialBoards);

  const showAddBoard = () => {
    setIsActive(!isActive);
  };

  const boardList = initialBoards.map((board, index) => {
    return (
      <Col span={6} key={`${board}${index}`}>
        <Board title={board} />
      </Col>
    );
  });

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
        <div style={{ background: '#fff', padding: 24, minHeight: 650 }}>
          Boards
          <div>
            <button onClick={showAddBoard} className={'button'}>
              create board
            </button>
          </div>
          {isActive && <BoardCreateForm />}
          {boardList}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Muzrea ©2019 Created</Footer>
    </Layout>
  );
};

export default CreateBoard;
