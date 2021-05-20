import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Chart } from '@antv/g2';
import { Button } from 'antd';

import styles from './index.less';

const mapStateToProps = (state) => ({
  info: state.graph.info,
  infoPoster: state.graph.infoPoster,
});

const mapDispatchToProps = (dispatch) => ({
  onDidMount: () => {
    dispatch({ type: 'graph/getData' });
  },
});

@connect(mapStateToProps, mapDispatchToProps)
class Graph extends PureComponent {
  containerRef = React.createRef();
  posterRef = React.createRef();

  componentDidMount() {
    this.props.onDidMount();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  handlePoster = () => {
    // 定义画布
    this.chart = new Chart({
      container: this.posterRef.current,
      width: 650,
      height: 400,
    });

    // 注入绘图所需数据
    this.chart.data(this.props.infoPoster);
    // 画柱状图
    this.chart.interval().position('name*count');
    // 翻转为横向
    this.chart.coord().transpose();
    // 柱状图转饼图
    // this.chart.coord('theta', {
    //   radius: 1,
    // });
    // 画图
    this.chart.render();
  };

  handleGraph = () => {
    // 定义画布
    this.chart = new Chart({
      container: this.containerRef.current,
      width: 650,
      height: 400,
    });

    // 注入绘图所需数据
    this.chart.data(this.props.info);
    // 自定义坐标轴尺寸
    this.chart
      .scale({ time: { min: 600, max: 1800 } })
      .scale({ yValue: { min: 0, max: 1, tickCount: 6 } });
    // 画离散点图
    this.chart
      .point()
      .position('time*yValue')
      .color('name', ['#1890ff', '#5AD8A6'])
      .size('size', (size) => size / 3)
      .label('name', { offset: -10 })
      .shape('url', (url) => ['image', url]);

    // 画图
    this.chart.render();
  };

  render() {
    return (
      <div>
        <div className={styles.btns}>
          <Button className={styles.btn_item} onClick={this.handleGraph}>
            绘图
          </Button>
          <Button className={styles.btn_item} onClick={this.handlePoster}>
            海报
          </Button>
        </div>
        <div ref={this.containerRef} />
        <div ref={this.posterRef} />
      </div>
    );
  }
}

export default Graph;
