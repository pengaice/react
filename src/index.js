import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import Login from './components/login'
import Main from './components/main'
import Register from './containers/register'
import store from './redux/store'
ReactDOM.render(
  (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route component={Main}></Route>
        <Route path='/register' component={Register}></Route>
      </Switch>
    </HashRouter>
  </Provider>
  )
  , document.getElementById('root'));


