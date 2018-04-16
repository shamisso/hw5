import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Pokemon from './Pokemon';

export default class PokemonList extends PureComponent {
    static propTypes = {
        pokemons: PropTypes.arrayOf(
            PropTypes.shape(
                {
                url: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
                }
            )
        ),
        extendList: PropTypes.func.isRequired
    };
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        pokemons: [],
    };

    scrollHandler = () => {
        const { extendList } = this.props;
        extendList();
    }

    render() {
        let  pokemons = []; 
        pokemons = this.props.pokemons;
        return (
            <div onWheel={this.scrollHandler} >
                {pokemons.map((pokemon, index) => <Pokemon name={pokemon.name} url={pokemon.url} id={index} />)}
            </div>
        );
    }
}