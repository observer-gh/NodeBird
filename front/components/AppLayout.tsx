import React, { FC, ReactNode, useState } from "react";
import Link from "next/link";
import { Menu, Input, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";


const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;


const AppLayout:FC<{}> = ({children}) => {
    /* dummy data */
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href='/'><a href="">NodeBird</a></Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link href='/profile'><a href="">Profile</a></Link>
                </Menu.Item>
                <Menu.Item key="mail">
                    <SearchInput enterButton/>
                </Menu.Item>    
                
                
            </Menu>
            <Link href="/signup">
                <a><Button>회원가입</Button></a>
            </Link>
            {/* reactive grid design. remember 24 */}
            <Row gutter={8}>
            <Col xs={24} md={6}>
                {isLoggedIn? <UserProfile /> : <LoginForm />}
            </Col>
            <Col xs={24} md={12}>{children}</Col>
            <Col xs={24} md={6}>
                <a 
                href="https://www.notion.so/a5528077c670496fac48df1e2309e1f3"
                target="_blank"
                rel="noreferrer noopener">
                    TK@Whoyaho
                </a>
            </Col>
            </Row>
            
        </div>
    )

}


export default AppLayout;