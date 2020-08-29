import React from 'react';
import { DatePicker } from 'antd';
// import Button from 'antd/es/button'
import locale from 'antd/es/date-picker/locale/vi_VN';

const { RangePicker } = DatePicker;

function Menu() {
  return (
        <RangePicker locale={locale} picker="week" bordered={false} />
  );
}

export default Menu;
