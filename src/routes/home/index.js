import React, {useState} from 'react';
import { connect } from 'dva';
import styles from './index.css';
import { Layout, Col, Row } from 'antd'
import ReactCanvasNest from 'react-canvas-nest';
import HeaderMenu from './Header';
import ArticalCard from './Artical'

const {Header, Content} = Layout;
function IndexPage() {
  const [articalList] = useState([
    {'id': 1, 'title': '这是一个title', 'intro': '这是一个intro', 'classify': ['css','html'], 'author': 'llz', 'time': '2010-7-14'},
    {'id': 1, 'title': '这是一个title', 'intro': '这是一个intro', 'classify': ['css','html']}
  ])
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <Header className={styles.header}>
          <HeaderMenu />
        </Header>
        <Content className={styles.content}>
          <Row style={{marginTop: 40}}>
            <Col span={12}>
              {
                articalList.map(item => {
                  return <ArticalCard artical={item}></ArticalCard>
                })
              }
            </Col>
            <Col span={8} offset={4}>
              
            </Col>
          </Row>
        </Content>
      </div>
      <ReactCanvasNest className = 'canvasNest' config = {{ pointColor: ' 255, 255, 255 ' }} style = {{ zIndex: -1}} />
    </React.Fragment>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
