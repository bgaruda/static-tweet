import React, {Component} from 'react';
import './index.css';
import NavItem from './NavItem';

class NavBar extends Component{
	navItemsRender=(children)=>{
		let items = React.Children.toArray(children);
		let error = null;
		for (var i = items.length - 1; i >= 1; i--) {
			if(items[i].type !== NavItem){
				error= new Error('Wrong Child typehas been added'+ items[i].type);
			}else{
				items.splice(i,0, <span key={i} className='separator'>|</span>);
			}
		}
		if(error){
			return error;
		}else{
			return items;
		}
		
	}

	render(){
		return(
				<div>
					<div>{this.navItemsRender(this.props.children)}</div>
					<div></div>
				</div>
			);
	}
	
}

export default NavBar;