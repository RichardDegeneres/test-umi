import React, { FC } from 'react';
import { connect, Item1ModelState, ConnectProps } from 'umi';
import { Row, Col, Card, Radio } from 'antd';

import styles from './item1.less';

const RadioGroup = Radio.Group;

const heroType = [
  { key: 0, value: '全部' },
  { key: 1, value: '战士' },
  { key: 2, value: '法师' },
  { key: 3, value: '坦克' },
  { key: 4, value: '刺客' },
  { key: 5, value: '射手' },
  { key: 6, value: '辅助' },
];

interface Item1Props extends ConnectProps {
  item1: Item1ModelState;
}

const Item1: FC<Item1Props> = (props) => {
  const { item1, dispatch } = props;
  const { info, curRadio } = item1;

  if (!info) return null;

  const onChange = (e: any) => {
    dispatch!({ type: 'item1/save', payload: { curRadio: e.target.value } });
  };

  const curInfo = !!curRadio
    ? info.filter((item) => item.hero_type === curRadio)
    : info;

  return (
    <div>
      <Card>
        <RadioGroup onChange={onChange} value={curRadio}>
          {heroType.map((item) => (
            <Radio value={item.key} key={`hero-radio-${item.key}`}>
              {item.value}
            </Radio>
          ))}
        </RadioGroup>
      </Card>
      <Row>
        {curInfo.map((item) => (
          <Col key={item.cname} span={3} className={styles.item}>
            <img
              src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`}
            />
            <p className={styles.item_name}>{item.cname}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default connect(({ item1 }: { item1: Item1ModelState }) => ({ item1 }))(
  Item1,
);
