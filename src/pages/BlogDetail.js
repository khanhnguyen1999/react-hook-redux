import React from 'react'
import uuidv4 from 'uuid'
import {useParams,Link} from 'react-router-dom'
import {LIST_BLOGS} from '../fetchData/listblog'
import { notification,Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

// ListBlogs -> render ra danh sách bài viết bằng hàm map của array 
//  - Trong mỗi bài viết sẽ có link trỏ id qua Blogdetail

// BlogDetail -> Dùng useParams lấy id về
// Khi có trong tay id rồi -> Truyền lên server lấy nối dung chi tiết của bài viết đó

// id lấy từ params là string
// id lưu trong listblog là number
function findBlogById(id){
    let listBlogServer = LIST_BLOGS.objects;
    let findData = listBlogServer.find((blog)=>{
        return blog.id==id
    })
    return findData;
}
export default function BlogDetail(){
    const data = useParams()
    console.log(useParams())
    const blog = findBlogById(data.id)
    console.log("blog",blog)
    if(!blog){
        notification["error"]({
            message: 'Notification Title',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          });
          return (<div></div>)
    }
    return(
        <div className="container">
            <Breadcrumb>
                <Breadcrumb.Item href="">
                <Link to="/"><HomeOutlined /></Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                    <Link to="/DashBoard">
                    <UserOutlined />
                    <span>Application List</span>
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{blog.title}</Breadcrumb.Item>
            </Breadcrumb>
            <h1>TITLE:{blog.title}  - ID : {data.id}</h1>
            <div dangerouslySetInnerHTML={{
                __html: blog.post_body
            }}></div>
        </div>
    )
}