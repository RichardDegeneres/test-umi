import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';

import styles from './index.less';

const { Header, Content, Footer } = Layout;

function BasicLayout(props: any) {
  const routeUrl = props.location.pathname;

  return (
    <Layout className={styles.box}>
      <Header>
        <div className={styles.header}>
          <div className={styles.header_l}>果坑</div>
          <Menu
            className={styles.header_r}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[routeUrl]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="/item1">
              <Link to="/item1">item1</Link>
            </Menu.Item>
            <Menu.Item key="/item2">
              <Link to="/item2">item2</Link>
            </Menu.Item>
            <Menu.Item key="/item3">
              <Link to="/item3">item3</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content className={styles.content}>{props.children}</Content>
      <Footer className={styles.footer}>Yeah!~~~~~</Footer>
    </Layout>
  );
}

export default BasicLayout;
