import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import isEmail from 'validator/lib/isEmail';
import LinearProgress from '@material-ui/core/LinearProgress';
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

	componentWillUnmount() {}

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
		return fetch('https://docs.google.com/forms/d/e/1FAIpQLScU72PJhoUPG5DMHmksPcT697d2QZsNXybfm0_Ll5j8tmOlDg/formResponse', {
			method: 'POST',
			body: JSON.stringify({ name: this.state.name, email: this.state.email, message: this.state.message })
		})
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
				<p className="headline">Play with us</p>
				<form action="https://docs.google.com/forms/d/e/1FAIpQLScU72PJhoUPG5DMHmksPcT697d2QZsNXybfm0_Ll5j8tmOlDg/formResponse" target="_self" method="POST" id="mG61Hd">
	
				Name:<br/>
				<TextField type="text" name="entry.1464806371" />
				<br/>

				Email:<br/>
				<TextField type="text" name="entry.1269394426" />
				<br/>

				Message:<br/>
				<TextField type="text" name="entry.423682773" />
				<br/>
				<input type="submit" value="Submit" id="contained-button-file"/>
			
				</form>
			</div>
		);
	}
}

export default ContactComponent;
