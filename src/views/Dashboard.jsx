import React from "react";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';



import {
	Link
  } from "react-router-dom";

const { Sider, Content, notification } = Layout;
import Header from '../components/Header';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import { withCookies } from 'react-cookie';


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           
        }; 
    }

    componentDidMount(){

       
    }
    

    
    openNotification = (type, title, description) => {
        notification[type]({
            placement: 'topRight',
            bottom: 50,
            message: title,
            description: description
        });
    }

      

    render(){
        return(
            <div className="height flex flex-column" >
            <Header />

            <Layout className="">
                <Sider trigger={null} >
                {/* <div className="logo" /> */}
                
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <Link to="/dashboard/players">Player List</Link>
                    </Menu.Item>
                    {/* <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                    </Menu.Item> */}
                </Menu>
                </Sider>
                <Layout className="site-layout">
                
                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    }}
                >
                    {this.props.children}
                </Content>
                </Layout>
            </Layout>
      </div>
        )
    }
}


const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ ...userActions }, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withCookies(Dashboard));

