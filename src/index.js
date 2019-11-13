import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import Home from './containers/home'
import Sponsor from './containers/sponsor'
import firebase from 'firebase';

import 'sanitize.css/sanitize.css'

const target = document.querySelector('#root')
var firebaseConfig = {
  apiKey: "AIzaSyCeX5lUZUmQxXsWNO8gNXVHqfJs-kQmSaY",
  authDomain: "shpe-ucf.firebaseapp.com",
  databaseURL: "https://shpe-ucf.firebaseio.com",
  projectId: "shpe-ucf",
  storageBucket: "shpe-ucf.appspot.com",
  messagingSenderId: "974032317047",
  appId: "1:974032317047:web:0a4a2ad01ac705b90ff472"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" render={() => (<Home/>)}/>
          <Route path="/Sponsor" render={() => (<Sponsor/>)}/>
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
