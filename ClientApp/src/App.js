import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Profile } from './components/QuizApp/Profile'
import { Product } from './components/QuizApp/Product'
import { Company } from './components/QuizApp/Company'
// import { Collaboration, Company, Product, Profile} from './components/QuizApp/*'


import './custom.css'
import { Collaboration } from './components/QuizApp/Collaboration';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/'>
          <Redirect to="/q1" />
        </Route>
        <Route exact path='/q1' component={Home} />
        <Route path='/q1/profile' component={Profile} />
        <Route path='/q1/company' component={Company} />
        <Route path='/q1/product' component={Product} />
        <Route path='/q1/collaboration' component={Collaboration} />
      </Layout>
    );
  }
}
