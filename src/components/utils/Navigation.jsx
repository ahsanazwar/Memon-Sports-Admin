import React from 'react';
import {
	EyeFilled , IdcardFilled, MobileFilled, AreaChartOutlined
  } from '@ant-design/icons';
import { Menu } from 'antd';
import {Link} from 'react-router-dom';


const Navigation = () => {
    return (
        <Menu theme="dark" mode="inline" selectedKeys={["dashboard"]}>
            <Menu.Item key="dashboard" className="condensed">
                <Link to="/dashboard"><EyeFilled />Overview</Link>
            </Menu.Item>
            <Menu.Item key="user-management" className="condensed">
                <IdcardFilled /> User Management
            </Menu.Item>
            <Menu.Item key="app-management" className="condensed">
                <MobileFilled /> App Management
            </Menu.Item>
            <Menu.Item key="services-management" className="condensed">
                <AreaChartOutlined /> Services Management
            </Menu.Item>
        </Menu>
    )
};


export default Navigation; 