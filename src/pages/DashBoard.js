import React,{useEffect} from 'react';
import {  Space } from 'antd';
// import Button from 'antd/es/button'
import { Table, Tag } from 'antd';
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {actLogout} from '../store/user/actions'
import {Button} from 'antd'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="/#">{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a href="/#">Invite {record.name}</a>
        <a href="/#">Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default function DashBoard() {
  const history = useHistory();
  const state = useSelector(state=>state)
  const token = useSelector(state=>state.User.token)
  const dispatch = useDispatch();
  useEffect(()=>{
      if(!token) history.push("/Login")
      else{
          console.log("chưa đăng nhập")
      }
  },[token,history])
  var handleLogout = ()=>{
    console.log("dispatch: ",dispatch,actLogout)
    dispatch(actLogout());
    console.log("state: ",state)
  }
  return (
      <div className="container">
        <Table columns={columns} dataSource={data}/>
        <Button onClick={handleLogout} type="primary">Logout</Button>
      </div>
  );
}
