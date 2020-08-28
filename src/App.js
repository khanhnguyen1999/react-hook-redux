import React from 'react';
import './App.less';
import {Layout} from 'antd'
import ROUTERS from './routers/index'
import HeaderMenu from './Components/HeaderMenu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
   <Router>
     <Layout>
        <HeaderMenu/>
        <Switch>
          {
            ROUTERS.map((v)=>{
              return  <Route exact={v.exact} path={v.path}>
                        <v.component />
                      </Route>
            })
          }
        </Switch>
      </Layout>
   </Router>
  );
}

export default App;
