import React, { useState, useEffect } from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import getDashboard from '@/services/dashboard';

function DashBoard() {
  let [data, setData] = useState({});

  useEffect(async () => {
    const resData = await getDashboard();
    setData(resData);
    //console.log(resData)
  }, []);

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="商品数"
              value={data.goods_count}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="用户数"
              value={data.users_count}
              precision={0}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="订单数"
              value={data.order_count}
              precision={0}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default DashBoard;
