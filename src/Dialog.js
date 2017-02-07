import React, {Component} from 'react';
import './index.css';
import Title from './Title';
import Body from './Body';
import Footer from './Footer';

class Dialog extends Component{


	validateChildren= (items) =>{
		let error = null;
		let children = React.Children.toArray(items);
		for (var i = children.length - 1; i >= 1; i--) {
			if(items[i].type !== Title || items[i].type !== Body || items[i].type !== Footer){
				error= new Error('Wrong Child type has been added'+ items[i].type);
			}/*else{
				items.splice(i,0, <span key={i} className='separator'>|</span>);
			}*/
		}
		if(error){
			return error;
		}else{
			return items;
		}
		
	}

	render() {
		return(<div className='dialogCss'>
				<div className='TitleCss'> This is important</div>
				<div className='BodyCss'> Here is some important text error or something</div>
				<div className='FooterCss'>
				< div class = "btn-group"
				role = "group"
				aria-label = "..." >
				 < button type = "button"
				class = "btn btn-default" > Right < /button> < /div>
				 </div>
			</div>);
	}
}

export default Dialog;