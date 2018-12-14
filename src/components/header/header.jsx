import React, { Component } from 'react';

import './header.css';

class HeaderComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: props.height,
			scrollTo: props.height
		};
	}

	render() {
		return (
			<div className="header-wrapper" style={{ height: this.state.height }}>
				<div className="header">
					<h1>
						<b>iGYM</b>
					</h1>
					<h3>Play Together</h3>
				</div>
			</div>
		);
	}
}

export default HeaderComponent;
