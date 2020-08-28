import React from 'react';
import logo from './logo.svg';
import './App.less';
import { Button } from 'antd';
// import Button from 'antd/es/button'
import {DownloadOutlined} from '@ant-design/icons'

function App() {
  return (
    <div className="App">
        <Button type="default" loading={true} type="primary">Primary Button</Button>
        <Button icon={<DownloadOutlined/>}>Button</Button>
    </div>
  );
}

export default App;
