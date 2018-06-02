import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Provider } from 'react-fela';
import { createRenderer } from 'fela';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route, Switch} from 'react-router-dom';

const renderer = createRenderer();

class App extends Component {
  render () {
    return (
      <Provider renderer={renderer}>
        <Switch>
            <Layout>
              <Route  path="/checkout" component={Checkout}/>
              <Route exact path="/" component={BurgerBuilder}/>
            </Layout>
          </Switch>
      </Provider>
    );
  }
}

export default App;
