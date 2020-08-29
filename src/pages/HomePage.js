import React from 'react';
import { DatePicker } from 'antd';
// import Button from 'antd/es/button'
import {useSelector} from 'react-redux'


function HomePage() {
  const state = useSelector(state=>state)
  console.log(state)
  return (
    <div className="HomePage">
        <DatePicker/>
    </div>
  );
}

export default HomePage;
