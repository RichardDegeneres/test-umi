// 装包 @antv/g2, 编译慢了 1.2s
// TODO: 待 js => ts
// TODO: calss => function
import React, { PureComponent } from 'react';
import { Chart } from '@antv/g2';

class SampleChart extends PureComponent {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    this.chart = new Chart({
      container: this.containerRef.current,
      width: 450,
      height: 300,
    });

    this.refreshChart();
  }

  componentDidUpdate() {
    this.refreshChart();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  refreshChart = () => {
    this.chart.data(this.props.data);
    this.chart.interval().position('genre*sold').color('genre');
    this.chart.render();
  };

  render() {
    return <div ref={this.containerRef} />;
  }
}

export default SampleChart;
