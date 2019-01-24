import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import isEmail from 'validator/lib/isEmail';
import { FormGroup, ControlLabel, FormControl, HelpBlock, FieldGroup } from 'react-bootstrap';
import './contact.css';

class ContactComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			message: '',
			email: '',
			errorMessage: null,
			successMessage: null,
			messageAlreadySent: false,
			loading: false
		};
	}

	async componentDidMount() {}

	validateString(str) {
		if (!str || str < 1) return false;
		return true;
	}

	/**
     * @throws
     */
	validateForm() {
		if (!this.validateString(this.state.name)) throw new Error('Please enter your name.');
		if (!isEmail(this.state.email)) throw new Error('Please enter a valid e-mail address.');
		if (!this.validateString(this.state.message)) throw new Error('Please enter a message.');
	}

	async onSubmit() {
		this.setState({ successMessage: null });
		this.setState({ errorMessage: null });
		this.displayLoadingBar();
		try {
			if (this.state.messageAlreadySent) throw new Error('Your message has been already sent.');
			this.validateForm();
			await this.submitData();
			this.setState({ successMessage: 'Your message has been sent.' });
			this.setState({ messageAlreadySent: true });
		} catch (err) {
			this.setState({ errorMessage: err.toString() });
			this.setState({ successMessage: null });
		}
		this.displayLoadingBar(false);
	}

	submitData() {
		return fetch(
			'https://docs.google.com/forms/d/e/1FAIpQLScU72PJhoUPG5DMHmksPcT697d2QZsNXybfm0_Ll5j8tmOlDg/formResponse',
			{
				method: 'POST',
				body: JSON.stringify({ name: this.state.name, email: this.state.email, message: this.state.message })
			}
		)
			.then((res) => console.dir(res))
			.catch((e) => console.dir(e));
	}

	onUpdateField(field, event) {
		this.setState({ [field]: event.target.value });
	}
	displayLoadingBar(to = true) {
		this.setState({ loading: to });
	}

	render() {
		return (
			<div className="contact">
				<h1 className="h1">Contact</h1>
				<div className="recuit-text">
					<p align="center">
						Please <a href="mailto:helloigym@umich.edu?subject=igym">email us</a> if you are interested to learn more about iGYM or sign up below for one
						of our next playtests.
					</p>
				</div>
				<div className="form-box">
					<div className="image">
						<img
							src={require('/Users/wuaiwei/Desktop/personal-portfolio/src/components/slider/images/Slideshow_1.jpg')}
							alt="1"
						/>
					</div>
					<div className="recruit-form">
						<h1 className="align-left">Play with us</h1>
						<p className="second-text">
							We are looking for playtesters to try our prototype. Please fill out the form if you are
							interested and we will follow up with more details soon.
						</p>
						<form
							action="https://docs.google.com/forms/d/e/1FAIpQLScU72PJhoUPG5DMHmksPcT697d2QZsNXybfm0_Ll5j8tmOlDg/formResponse"
							target="_self"
							method="POST"
							id="mG61Hd"
						>
						
							<input type="text" id="name" name="entry.1464806371" placeholder="Full Name" />
							<br />
						
							<input type="text" id="email" name="entry.1269394426" placeholder="Email Address" />
							<br />
						
							<input type="text" id="phone" name="entry.998788472" placeholder="Phone Number" />
							<br />
					
							<input type="text" id="message" name="entry.423682773" placeholder="Message" />
							<br />
							<input type="submit" value="Submit" id="contained-button-file" />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactComponent;
