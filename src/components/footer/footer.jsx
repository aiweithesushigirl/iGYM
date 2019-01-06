import React, { Component } from 'react';
import './footer.css';

class FooterComponent extends Component {
	render() {
		return (
			<div className="footer">
				<div className="container-white">
					<h1 className="h1">iGYM is supported by</h1>
				</div>
				<div className="container">
					<p className="m-0 small"> &copy; 2018 iGYM Solutions</p>
				</div>
			</div>
		);
	}
}

export default FooterComponent;
