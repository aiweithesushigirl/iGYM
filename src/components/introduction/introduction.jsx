import React, { Component } from 'react';
import './introduction.css';
import Button from '@material-ui/core/Button';

class IntroductionComponent extends Component {
	render() {
		return (
			<div className="introduction" align="left">
				<h1 className="h1">iGYM begins at Univeristy of Michigan</h1>
				<Button variant="contained" color="primary">
					Learn More
				</Button>
			</div>
		);
	}
}

export default IntroductionComponent;
