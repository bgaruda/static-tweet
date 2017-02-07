import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBox from './ErrorBox';
import NavBar from './NavBar';
import NavItem from './NavItem';
import Dialog from './Dialog';

import './index.css';




var AddressCompo = React.createClass({
	propTypes: {
		fullName: React.PropTypes.string.isRequired,
		street: React.PropTypes.string.isRequired,
		city: React.PropTypes.string.isRequired,
		state: React.PropTypes.string.isRequired
	},
	render: function(){
		var dataObj = this.props.addressObj;
		return( <span >
			<div> {dataObj.fullName} </div>
			<div> {dataObj.street} </div>
			<div> {dataObj.city}, {dataObj.state} - {dataObj.code}. </div>
			</span>);
	}
});

var testFromAddressObj = {
	fullName:'Bucky Roberts',
	street:'123 Fake Street',
	city:'Burlington',
	state:'MA',
	code:'018053'
}

var testToAddressObj = {
	fullName:'Micky Roberts',
	street:'123 Fake Street',
	city:'Arlington',
	state:'MA',
	code:'01859'
}

var Envelope = React.createClass({
	render: function () {
		return(<div className='envelope'>
			<div>
			<span className='sender'><AddressCompo addressObj={testFromAddressObj} /></span>
			<span className='stamp'><span className='StampData'>STAMP</span></span>
			</div>
			<div className='to'><AddressCompo addressObj={testToAddressObj} /></div>

			</div>);
	}
});

ReactDOM.render(
  <Dialog></Dialog>,
  document.getElementById('root')
);


