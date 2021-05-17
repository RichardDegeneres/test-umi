import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Button } from 'antd';

import styles from './index.less';

const mapStateToProps = (state) => ({
  info: state.puzzlecards,
});

const mapDispatchToProps = (dispatch) => ({
  onClickAdd: (newCard) => {
    dispatch({ type: 'puzzlecards/addNewCard', payload: newCard });
  },
  onDidMount: () => {
    dispatch({ type: 'puzzlecards/queryInitCards' });
  },
});

// TODO: 转 ts
@connect(mapStateToProps, mapDispatchToProps)
class Puzzlecards extends PureComponent {
  componentDidMount() {
    this.props.onDidMount();
  }

  render() {
    const { info, onClickAdd } = this.props;

    return (
      <div className={styles.box}>
        {info.data.map((item) => (
          <Card key={item.id}>
            <div>Q: {item.setup}</div>
            <div>
              <strong>A: {item.punchline}</strong>
            </div>
          </Card>
        ))}
        <div>
          <Button
            className={styles.btn_add}
            onClick={() =>
              onClickAdd({
                setup:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                punchline:
                  'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              })
            }
          >
            添加卡片
          </Button>
        </div>
      </div>
    );
  }
}

export default Puzzlecards;
