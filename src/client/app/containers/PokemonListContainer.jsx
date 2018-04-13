import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PokemonList from '../components/PokemonList';
import Pokemon from '../components/Pokemon';

export default class PokemonListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: [],
            loading: false
        };
    }

    componentWillMount() {
        this.setState({
        loading: true
    });


    fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
        .then(res => res.json())
        .then(pokemons => {
            this.setState({
            loading: false,
            pokemons: pokemons.results
            });
        });
    }

    loadNextPokemons = () => {
        let pokesCount = this.state.pokemons.length + 10;
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${pokesCount}`)
            .then(res => res.json())
            .then(pokes => { 
                const { pokemons } = this.state;
                this.setState((prevState) => {
                    return {
                      pokemons: pokemons.concat(pokes.results),
                      loading: false
                    }
                })
            });
    }
  
  

  render() {
    const { loading, pokemons } = this.state;
    return (
      <div>
        { loading ? 'Идет загрузка' : <PokemonList pokemons={pokemons} extendList={this.loadNextPokemons} /> }
      </div>
    );
  }
}