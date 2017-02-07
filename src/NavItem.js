import React, {Component} from 'react';
import './index.css';

class NavItem extends Component{
	render(){
		return(<span><a href={this.props.url}>{this.props.children}</a></span> );
	}
}

export default NavItem;