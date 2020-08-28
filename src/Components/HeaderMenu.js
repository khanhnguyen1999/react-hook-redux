import React from 'react';
import { Menu } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function HeaderMenu() {
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
        </Menu>
  );
}
export default HeaderMenu;
