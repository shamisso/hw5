import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default class Pokemon extends PureComponent {
  
  constructor(props){
    super(props);
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
    id: PropTypes.number.isRequired,
    
  };

  static defaultProps = {
    name: 'Имя не указано',
  };

  render() {
    
    const { name, url, id} = this.props; 
    let pic = url.split('/')[url.split('/').length - 2];
    pic = +pic;
    let picWay = 'img/' + `${pic}` + `.png`
    
    return (
      <Link to={`/pokemon/${this.props.id}`}>
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