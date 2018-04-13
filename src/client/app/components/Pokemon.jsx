import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default class Pokemon extends PureComponent {
  
  constructor(props){
    super(props);
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  static defaultProps = {
    name: 'Имя не указано',
  };

  render() {
    console.log('here: ', this.props.route);
    const { name, url} = this.props; 
    let pic = url.split('/')[url.split('/').length - 2];
    pic = +pic;
    let picWay = 'img/' + `${pic}` + `.png`
    
    return (
      <Link to='/pokemon'>
        <div>
        <ul>
          <li>Имя: {name}</li>
          <li>url: {url}</li>
          <li><img src= { picWay } /></li>
        </ul>
      </div>
      </Link>
    );
  }
}