import React,{Component} from 'react';
import { Layout, Menu, Breadcrumb, Typography, Input, Space } from 'antd';
import 'antd/dist/antd.css';
import './Search.css'
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Search } = Input;



//自定义组件SiderDemo
class SearchPage extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">Search</Menu.Item>
                        <Menu.Item key="3">Cart</Menu.Item>
                        <Menu.Item key="4">My Account</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Search</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content" style={{ textAlign: 'center' }}>
                        <Typography>

                        <Title>Search</Title>
                        </Typography>
                        <Search
                            ref= "searchBar"
                            placeholder="Please type your keyword"
                            enterButton="Search"
                            size="large"
                            allowClear
                        />

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Dalhousie University BookStore</Footer>
            </Layout>
        );
    }
}

//输出组件
export default SearchPage;