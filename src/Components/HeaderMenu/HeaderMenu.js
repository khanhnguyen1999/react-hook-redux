import React,{useEffect} from 'react';
import { Menu } from 'antd';
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import {HeaderMenuContainer} from './HeaderMenu.styled'
import {
  useLocation,
  Link
} from "react-router-dom";
import Text from '../../ui-kits/Text/index'
function HeaderMenu() {
  const location = useLocation();
  const token = useSelector(state=>state.User.token)
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #ff7675;
  `;
  
  return (
    <HeaderMenuContainer widthProps="100%">
      <Text tag="p">Khanh dep trai</Text>
        <Menu  mode="horizontal">
          <Menu.Item>
                <Link to="/"><Title>Home</Title></Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/Menu"><Title>Menu</Title></Link>  
          </Menu.Item>
          <Menu.Item>
            <Link to="/DashBoard"><Title>DashBoard</Title></Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/Login"><Title>Login</Title></Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/Register"><Title>Register</Title></Link>
          </Menu.Item>
        </Menu>
    </HeaderMenuContainer>
  );
}
export default HeaderMenu;
