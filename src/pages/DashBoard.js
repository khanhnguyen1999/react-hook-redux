import React,{useEffect} from 'react';
import {  Space } from 'antd';
// import Button from 'antd/es/button'
import { Table, Tag } from 'antd';
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {actLogout} from '../store/user/actions'
import {Button} from 'antd'
import {LIST_BLOGS } from '../fetchData/listblog'
import {Row,Col} from 'antd'
import {Link} from 'react-router-dom';

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
  console.log("LIST: ",LIST_BLOGS)
  return (
      <div className="container">
        <Row>
          {
            LIST_BLOGS.objects.map(blog=>{
              return (<Col key={blog.id} xs={6}>
                        <Link to={`/Blog/${blog.id}`}>{blog.title}</Link>
                    </Col>)
            })
          }    
        </Row>
      </div>
  );
}
