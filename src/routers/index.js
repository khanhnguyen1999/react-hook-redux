import DashBoard from '../pages/DashBoard';
import Menu from '../pages/Menu';
import HomePage from '../pages/HomePage';
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
    }
]
export default ROUTERS