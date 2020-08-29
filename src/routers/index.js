import DashBoard from '../pages/DashBoard';
import Menu from '../pages/Menu';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import Register from '../pages/Register'
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
        path: '/DashBoard',
        exact: true,
        component: DashBoard
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