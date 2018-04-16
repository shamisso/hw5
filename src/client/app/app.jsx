import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route} from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Pokemon from './components/Pokemon';
import PokemonListContainer from './containers/PokemonListContainer';
import PokemonContainer from './containers/PokemonContainer';
export default class App extends Component {
  render() {
    return <div>
        <Header />
        <Switch>
            <Route exact path="/" component={PokemonListContainer}  />
            <Route path="/pokemon/:id" component={PokemonContainer} />
        </Switch>
      <Footer />
    </div>;
  }
}


