import DashBoard from '../pages/DashBoard';
import Menu from '../pages/Menu';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import React from 'react'
import Register from '../pages/Register'
import BlogDetail from '../pages/BlogDetail'
const ROUTERS = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/Menu',
        exact: true,
        component: Menu
    },
    {
        path: '/Blog/:id',
        exact: true,
        component: ()=> <BlogDetail/>
    },
    {
        path: '/DashBoard',
        exact: true,
        component: ()=> <DashBoard/>
    },
    {
        path: '/Register',
        exact: true,
        component: Register
    },
    {
        path: '/Login',
        exact: true,
        component: Login
    }
]
export default ROUTERS