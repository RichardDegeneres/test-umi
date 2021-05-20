import React from 'react';
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  DashboardOutlined,
  SmileFilled,
  SmileOutlined,
  SmileTwoTone,
  OrderedListOutlined,
  PictureOutlined,
} from '@ant-design/icons';
import { Link } from 'umi';

import styles from './index.less';

const { Sider, Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;

function BasicLayout(props: any) {
  const routeUrl = props.location.pathname;

  return (
    <Layout className={styles.box}>
      <Sider theme="dark">
        <div className={styles.sider}>
          <Menu
            className={styles.menu}
            theme="dark"
            mode="inline"
            selectedKeys={[routeUrl]}
          >
            <Menu.Item key="/">
              <PieChartOutlined />
              <Link to="/">果坑</Link>
            </Menu.Item>
            {/* TODO: 当页面的url改变后导航要能够根据url路径的不同展开对应的导航菜单;https://github.com/ant-design/ant-design-pro/ */}
            <SubMenu
              title={
                <span>
                  <DashboardOutlined />
                  <span>Dashboard</span>
                </span>
              }
            >
              <Menu.Item key="/dashboard/item1">
                <Link to="/dashboard/item1">
                  <SmileFilled />
                  item1
                </Link>
              </Menu.Item>
              <Menu.Item key="/dashboard/item2">
                <Link to="/dashboard/item2">
                  <SmileOutlined />
                  item2
                </Link>
              </Menu.Item>
              <Menu.Item key="/dashboard/item3">
                <Link to="/dashboard/item3">
                  <SmileTwoTone />
                  item3
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="/puzzlecards">
              <Link to="/puzzlecards">
                <OrderedListOutlined />
                puzzlecards
              </Link>
            </Menu.Item>
            <Menu.Item key="/graph">
              <Link to="/graph">
                <PictureOutlined />
                graph
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Layout>
        <Header className={styles.header}> headers </Header>
        <Content className={styles.content}>{props.children}</Content>
        <Footer className={styles.footer}>Yeah!~~~~~</Footer>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
