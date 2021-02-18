import React, {useState} from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Menu, Card } from 'antd';
import { HomeOutlined, TeamOutlined, NotificationOutlined, SettingOutlined, ExperimentTwoTone } from '@ant-design/icons'
import ReactCanvasNest from 'react-canvas-nest';


const { Content, Header } = Layout;
const { Meta } = Card;

function IndexPage() {
  const [articalList] = useState([{'author': 'llz','description': '112'}])
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <Layout className={styles.layout}>
          <Header style={{padding: 0, backgroundColor: '#fff'}}>
            <ExperimentTwoTone />
            <Menu theme="light" mode="horizontal" style={{display: 'inline-block', float: 'right'}}>
              <Menu.Item key="1" icon={<HomeOutlined />}>首页</Menu.Item>
              <Menu.Item key="2" icon={<TeamOutlined />}>我的团队</Menu.Item>
              <Menu.Item key="3" icon={<NotificationOutlined />}>我的通知</Menu.Item>
              <Menu.Item key="4" icon={<SettingOutlined />}>设置</Menu.Item>
            </Menu>
          </Header>
          <ReactCanvasNest className = 'canvasNest' config = {{ pointColor: ' 255, 255, 255 ' }} style = {{ zIndex: 99 }} />
          <Content style={{backgroundColor: '#fff', paddingTop: '40px'}}>
            {
              articalList.map((artical) => {
                return (
                  <Card
                    hoverable
                  >
                    <Meta 
                      title={artical.author}
                      description={artical.description}
                    ></Meta>
                  </Card>
                )
              })
            }
          </Content>
        </Layout>
      </div>   
    </React.Fragment>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
