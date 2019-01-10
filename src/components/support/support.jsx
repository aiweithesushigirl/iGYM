import React, { Component } from 'react';
import './support.css';

class SupportComponent extends Component {
	render() {
		return (
			<div className="support">
				<div className="text">
					<h1>iGYM is supported by</h1>
				</div>
				<div className="logo">
					<img
						src={require('/Users/wuaiwei/Desktop/personal-portfolio/src/components/support/logo.jpg')}
						alt="1"
					/>
				</div>
			</div>
		);
	}
}

export default SupportComponent;
