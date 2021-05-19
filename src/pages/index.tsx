import React from 'react';
import { Card } from 'antd';

import styles from './index.less';

export default function IndexPage() {
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
      <Card className={styles.card} actions={[<a>操作1</a>, <a>操作2</a>]}>
        <Card.Meta
          avatar={
            <img
              className={styles.img_avatar}
              src="https://cn.bing.com/th?id=OHR.Alesund_EN-CN9406197372_1920x1200.jpg&ensearch=1&FORM=BEHPTB"
            />
          }
          title="生命周期"
          description="推荐用componentDidMount获取后台数据。生命周期函数是让我们在一个组件的各个阶段都提供一些钩子函数来让开发者在合适的时间点可以介入并进行一些操作。"
        />
      </Card>
    </div>
  );
}
