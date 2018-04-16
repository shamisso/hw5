import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Pokemon from '../components/Pokemon';

export default class PokemonContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            id: +this.props.match.params.id + 1,
            pokemon: {}
        }
    }

    componentWillMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.id}/`)
        .then(res => res.json())
        .then(pokemon => {
            this.setState({
                pokemon: pokemon
            });
        })
    }

    
    render() {
        return (
            <div>
            <ul>
              <li>Имя: {this.state.pokemon.name}</li>
              <li><img src={`http://localhost:8080/img/${this.state.id}.png`} /></li>
            </ul>
          </div>
        );
    }
}