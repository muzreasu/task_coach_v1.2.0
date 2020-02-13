import { Card } from 'antd';
import * as React from "react";

const { Meta } = Card;

interface Props {
  title: string;
}

const Board = (props: Props) => {
  const { title } = props;
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <Meta
        title={title}
      />
    </Card>
  );
};

export default Board;

