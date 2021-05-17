import React, { FC } from 'react';
import { connect, item2ModelState, ConnectProps } from 'umi';
import { Row, Col } from 'antd';

import styles from './item2.less';

interface item2Props extends ConnectProps {
  item2: item2ModelState;
}

const item2: FC<item2Props> = (props) => {
  const info = props.item2.info;
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

export default connect(({ item2 }: { item2: item2ModelState }) => ({ item2 }))(
  item2,
);
