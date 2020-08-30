import React from 'react';
import './App.less';
import {Layout} from 'antd'
import ROUTERS from './routers/index'
import HeaderMenu from './Components/HeaderMenu'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
   <Router>
      <HeaderMenu/>
     <Layout>
        <Switch>
          {
            ROUTERS.map((v)=>{
              return  <Route key={v} exact={v.exact} path={v.path} component={v.component}/>
            })
          }
        </Switch>
      </Layout>
   </Router>
  );
}

export default App;
