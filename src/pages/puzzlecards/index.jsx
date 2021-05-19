import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Button, Table, Modal, Form, Input, message, Upload } from 'antd';
import { UploadOutlined, DownloadOutlined } from '@ant-design/icons';

import SampleChart from '../../components/SampleChart';
import styles from './index.less';

const mapStateToProps = (state) => ({
  cardsList: state.puzzlecards.data,
  cardsFormList: state.puzzlecards.dataForm,
  statistic: state.puzzlecards.dataStastic,
  cardsLoading: state.loading.effects['puzzlecards/queryInitCards'],
});

const mapDispatchToProps = (dispatch) => ({
  onClickAdd: (newCard) => {
    dispatch({ type: 'puzzlecards/addNewCard', payload: newCard });
  },
  onClickOk: (newCardForm) => {
    dispatch({ type: 'puzzlecards/addNewCardForm', payload: newCardForm });
  },
  onDidMount: () => {
    dispatch({ type: 'puzzlecards/queryInitCards' });
  },
  onGetStastic: (id) => {
    dispatch({ type: 'puzzlecards/getStatistic', payload: id });
  },
});

// TODO: 转 ts
@connect(mapStateToProps, mapDispatchToProps)
class Puzzlecards extends PureComponent {
  state = {
    visible: false,
    id: null,
    statisticVisibile: false,
  };

  formRef = React.createRef();

  componentDidMount() {
    this.props.onDidMount();
  }

  handleShowModal = () => {
    this.setState({ visible: true });
  };

  handleCloseModal = () => {
    this.setState({ visible: false });
  };

  handleShowStastic = (id) => {
    this.props.onGetStastic(id);
    this.setState({ id, statisticVisibile: true });
  };

  handleCloseStatistic = () => {
    this.setState({ statisticVisibile: false });
  };

  // handleUpload = () => {
  //   const formData = new FormData();
  //   const fileField = document.querySelector("input[type='file']");

  //   formData.append('username', '123');
  //   formData.append('avatar', fileField.files[0]);

  //   fetch('https://example.com/profile/avatar', {
  //     method: 'PUT',
  //     body: formData,
  //   }).then(res => console.log(res))
  // }

  handelDownload = () => {
    fetch(
      'https://cn.bing.com/th?id=OHR.Alesund_EN-CN9406197372_1920x1200.jpg&ensearch=1&FORM=BEHPTB',
    )
      .then((res) => res.blob())
      .then((blob) => {
        const a = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        const filename = 'pic';
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      });
  };

  // FIXME: 多次点击节流
  handelSubmit = () => {
    const name = this.formRef.current.getFieldValue('name');
    if (!name) {
      // TODO: 如何封装全局 toast 提示的
      message.warning('name 不能为空');
    }

    this.handleCloseModal();

    this.props.onClickOk({
      setup: 'FOOOOOOOOM ipsum dolor sit amet, consectetur adipiscing elit,',
      punchline:
        'FOOOOOOOOM sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: 'https://cn.bing.com/th?id=OHR.Alesund_EN-CN9406197372_1920x1200.jpg',
    });
  };

  columns = [
    { title: 'name', dataIndex: 'setup' },
    { title: 'desc', dataIndex: 'punchline' },
    {
      title: 'url',
      dataIndex: 'url',
      render: (value) => (
        <a className={styles.link} href={value}>
          {value}
        </a>
      ),
    },
    {
      title: '',
      dataIndex: '_',
      render: (_, { id }) => (
        <Button
          onClick={() => {
            this.handleShowStastic(id);
          }}
        >
          图标
        </Button>
      ),
    },
  ];

  render() {
    const { cardsList, cardsFormList, cardsLoading, onClickAdd, statistic } =
      this.props;
    const { visible, statisticVisibile } = this.state;

    return (
      <div className={styles.box}>
        <Button className={styles.btn_create} onClick={this.handleShowModal}>
          新建
        </Button>
        <Table
          columns={this.columns}
          dataSource={cardsFormList}
          loading={cardsLoading}
          rowKey="id"
        />
        <Modal
          title="新建记录"
          visible={visible}
          onCancel={this.handleCloseModal}
          onOk={this.handelSubmit}
          destroyOnClose
        >
          <Form preserve={false} ref={this.formRef} name="record">
            <Form.Item label="name" name="name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="desc" name="desc">
              <Input />
            </Form.Item>
            <Form.Item label="url" name="url" rules={[{ type: 'url' }]}>
              <Input />
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          visible={statisticVisibile}
          footer={null}
          onCancel={this.handleCloseStatistic}
        >
          <SampleChart data={statistic.result} />
        </Modal>
        <div className={styles.bg} />
        <div className={styles.upload}>
          <Upload>
            <Button>
              文件上传
              <UploadOutlined />
            </Button>
          </Upload>
          <Button className={styles.btn_download} onClick={this.handelDownload}>
            文件下载
            <DownloadOutlined />
          </Button>
        </div>
        <div className={styles.bg} />
        {cardsList.map((item) => (
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
                url: 'https://cn.bing.com/th?id=OHR.AltaFloresta_EN-CN9994227561_1920x1200.jpg',
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
