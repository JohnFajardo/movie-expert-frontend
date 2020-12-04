import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './SCSS/styles.scss';
import MovieList from './components/MovieList/MovieList';
import ShowMovie from './components/ShowMovie/ShowMovie';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
          <Route path='/movies/:id' component={ShowMovie} />
          <Route path='/'component={MovieList} exact />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);