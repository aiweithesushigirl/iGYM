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
import SupportComponent from './components/support/support';

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
	constructor(props) {
		super(props);

		this.state = {};

		this.handleScroll = this.handleScroll.bind(this);
	}

	state = {
		value: 0
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleScroll() {
		this.setState({ scroll: window.scrollY });
	}

	componentDidMount() {
		const el = document.querySelector('nav');
		this.setState({ top: el.offsetTop, height: el.offsetHeight });
		window.addEventListener('scroll', this.handleScroll);
		scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
	}

	componentDidUpdate() {
		this.state.scroll > this.state.top
			? (document.body.style.paddingTop = `${this.state.height}px`)
			: (document.body.style.paddingTop = 0);
	}
	render() {
		const { value } = this.state;
		return (
			<div className="App">
				<nav className={this.state.scroll > this.state.top ? 'fixed-nav' : ''}>
					<button
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
					</button>
					<button
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
					</button>
					<button
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
					</button>
				</nav>

				<div className="section header-section">
					<div className="section-container header-component">
						<HeaderComponent />
					</div>
				</div>

				<div className="section">
					<div
						className="section-container"
						ref={(section) => {
							this.HeaderComponent = section;
						}}
					>
						<IntroductionComponent />
					</div>
				</div>

				<div className="section colored">
					<div
						className="section-container"
						ref={(section) => {
							this.TeamComponent = section;
						}}
					>
						<TeamComponent />
					</div>
				</div>

				<div className="section">
					<div
						className="section-container"
						ref={(section) => {
							this.ContactComponent = section;
						}}
					>
						<ContactComponent />
					</div>
				</div>

				<div className="section">
					<div className="section-container">
						<SupportComponent />
					</div>
				</div>

				<div className="section blue">
					<div className="section-container footer-component">
						<FooterComponent />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
