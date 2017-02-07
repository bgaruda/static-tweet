import React, { Component } from 'react';
import './index.css';

class ErrorBox extends Component{

	render(){
		return(<div className='errorBox alert alert-danger'>
				<i className='fa fa-exclamation-triangle fa-3x' />
				{this.props.children}
			</div>);
	}
}

export default ErrorBox;