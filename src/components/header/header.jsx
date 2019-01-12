import React, { Component } from 'react';
import Slider from '../slider/slider';
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
					<Slider />
				</div>
			</div>
		);
	}
}

export default HeaderComponent;
