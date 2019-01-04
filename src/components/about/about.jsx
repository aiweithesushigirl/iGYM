import React, { Component } from 'react';
import './introduction.css';
import Button from '@material-ui/core/Button';

class About extends Component {
	render() {
		return (
			<div className="about" align="left">
				<h1 className="h1">testing about page</h1>
				<Button variant="contained" color="primary">
					Learn More
				</Button>
			</div>
		);
	}
}

export default About;
