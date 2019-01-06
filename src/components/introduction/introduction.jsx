import React, { Component } from 'react';
import './introduction.css';

class IntroductionComponent extends Component {
	render() {
		return (
			<div className="introduction">
				<h1 className="h1">
					Building a future where play and exercise are inclusive and fun for people of all abilities.
				</h1>
				<p>iGYM is an augmented reality system for inclusive play and exercise.</p>
				<p>
					It is designed for school and community-based sport or recreation facilities seeking to provide
					novel and accessible ways for people with motor disabilities and their non-disabled peers to play
					and exercise together.
				</p>
			</div>
		);
	}
}

export default IntroductionComponent;
