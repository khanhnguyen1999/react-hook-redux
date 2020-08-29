import React,{useEffect} from 'react';
import { Menu } from 'antd';
import {useSelector} from 'react-redux'
import {
  useLocation,
  Link
} from "react-router-dom";

function HeaderMenu() {
  const location = useLocation();
  const token = useSelector(state=>state.User.token)
  useEffect(()=>{
    
  },[location])
  return (
        <Menu  mode="horizontal">
          <Menu.Item>
                <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/Menu">Menu</Link>  
          </Menu.Item>
          <Menu.Item>
            <Link to="/DashBoard">DashBoard</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/Login">Login</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/Register">Register</Link>
          </Menu.Item>
        </Menu>
  );
}
export default HeaderMenu;
