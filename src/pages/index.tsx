import React from 'react';
import { Card } from 'antd';

import styles from './index.less';

export default function IndexPage() {
  // const style = {
  //   // width: '400px',
  //   // margin: '30px',
  //   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  //   border: '1px solid #e8e8e8',
  // };

  return (
    <div>
      <Card className={styles.card} actions={[<a>操作1</a>, <a>操作2</a>]}>
        <Card.Meta
          avatar={
            <img
              className={styles.img_avatar}
              src="https://cn.bing.com/th?id=OHR.AltaFloresta_EN-CN9994227561_1920x1200.jpg"
            />
          }
          title="组件"
          description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
        />
      </Card>
      <Card className={styles.card} actions={[<a>操作1</a>, <a>操作2</a>]}>
        <Card.Meta
          avatar={
            <img
              className={styles.img_avatar}
              src="https://cn.bing.com/th?id=OHR.ShikisaiBiei_EN-CN3440279290_1920x1200.jpg"
            />
          }
          title="受控 & 非受控"
          description="“受控”与“非受控”两个概念，区别在于这个组件的状态是否可以被外部修改。一个设计得当的组件应该同时支持“受控”与“非受控”两种形式，即当开发者不控制组件属性时，组件自己管理状态，而当开发者控制组件属性时，组件该由属性控制。而开发一个复杂组件更需要注意这点，以避免只有部分属性受控，使其变成一个半受控组件。"
        />
      </Card>
      <Card className={styles.card} actions={[<a>操作1</a>, <a>操作2</a>]}>
        <Card.Meta
          avatar={
            <img
              className={styles.img_avatar}
              src="https://cn.bing.com/th?id=OHR.GrinnellGlacier_EN-CN0188706004_1920x1200.jpg"
            />
          }
          title="首屏请求"
          description="在 React 16 中，页面初始化时的异步请求必须只能在 componentDidMount 中做，不能在 constructor, UNSAFE_componentWillMount, UNSAFE_componentWillReceiveProps, getDerivedStateFromProps 中做。"
        />
      </Card>
    </div>
  );
}
