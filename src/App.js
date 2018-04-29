import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Provider } from 'react-fela';
import { createRenderer } from 'fela';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

const renderer = createRenderer();

class App extends Component {
  render () {
    return (
      <Provider renderer={renderer}>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </Provider>
    );
  }
}

export default App;
