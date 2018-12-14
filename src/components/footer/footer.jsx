import React, { Component } from 'react';
import './footer.css';
import Button from '@material-ui/core/Button';
const scrollTo = require('scroll-to');

class FooterComponent extends Component {
	onScrollToTop() {
		scrollTo(0, 0, {
			ease: 'out-bounce',
			duration: 2000
		});
	}

	render() {
		return (
			<div className="footer">
				<Button
					labelstyle={{
						color: 'rgba(0, 0, 0, 0.65)'
					}}
					label="Back to top"
					onClick={this.onScrollToTop}
				/>
				<div className="container">
					<p className="m-0 small">Copyright &copy; iGYM Solutions</p>
				</div>
			</div>
		);
	}
}

export default FooterComponent;
