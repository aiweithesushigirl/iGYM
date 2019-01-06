import React, { Component } from 'react';
import 'roboto-npm-webfont';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import scrollToComponent from 'react-scroll-to-component';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HeaderComponent from './components/header/header';
import IntroductionComponent from './components/introduction/introduction';
import ContactComponent from './components/contact/contact';
import FooterComponent from './components/footer/footer';
import TeamComponent from './components/team/team';

const styles = {
	label: {
		textTransform: 'capitalize',
		fontSize: '50px'
	}
};

const StyledButton = withStyles({
	root: {
		borderRadius: 3,
		border: 0,
		height: 48,
		padding: '0 30px',
		flex: 1
	},
	label: {
		textTransform: 'capitalize',
		fontSize: '20px',
		textColor: 'grey'
	}
})(Button);

class App extends Component {
	state = {
		value: 0
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	componentDidMount() {
		scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
	}
	render() {
		const { value } = this.state;
		return (
			<div className="App">
				<nav>
					<StyledButton
						label="About"
						value="About"
						onClick={() =>
							scrollToComponent(this.HeaderComponent, {
								offset: 0,
								align: 'top',
								duration: 1000
							})}
					>
						About
					</StyledButton>
					<StyledButton
						label="Team"
						value="Team"
						onClick={() =>
							scrollToComponent(this.TeamComponent, {
								offset: 0,
								align: 'top',
								duration: 1000
							})}
					>
						Team
					</StyledButton>
					<StyledButton
						label="Contact"
						value="Contact"
						onClick={() =>
							scrollToComponent(this.ContactComponent, {
								offset: 0,
								align: 'top',
								duration: 1000
							})}
					>
						Contact
					</StyledButton>
				</nav>

				<div className="section header-section">
					<div className="section-container header-component">
						<HeaderComponent />
					</div>
				</div>

				<div
					className="section"
					ref={(section) => {
						this.HeaderComponent = section;
					}}
				>
					<div className="section-container">
						<IntroductionComponent />
					</div>
				</div>

				<div
					className="section colored"
					ref={(section) => {
						this.TeamComponent = section;
					}}
				>
					<div className="section-container">
						<TeamComponent />
					</div>
				</div>

				<div className="section">
					<section
						className="section-container"
						ref={(section) => {
							this.ContactComponent = section;
						}}
					>
						<ContactComponent />
					</section>
				</div>

				<div className="section colored">
					<div className="section-container footer-component">
						<FooterComponent />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
