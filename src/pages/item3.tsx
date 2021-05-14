import React, { FC } from 'react';
import { connect, item3ModelState, ConnectProps } from 'umi';
import { Row, Col } from 'antd';

import styles from './item3.less';

interface item3Props extends ConnectProps {
  item3: item3ModelState;
}

const item3: FC<item3Props> = (props) => {
  const info = props.item3.info;
  if (!info) return null;

  return (
    <Row>
      {info.map((item) => (
        <Col key={item.cname} span={3} className={styles.item}>
          <img
            src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`}
          />
          <p className={styles.item_name}>{item.cname}</p>
        </Col>
      ))}
    </Row>
  );
};

export default connect(({ item3 }: { item3: item3ModelState }) => ({ item3 }))(
  item3,
);
