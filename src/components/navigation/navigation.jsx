import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
	state = {
		value: 0
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { value } = this.state;

		return (
			<BottomNavigation value={value} onChange={this.handleChange} showlabels>
				<BottomNavigationAction label="About" value="About">
					<Link to="/"> About </Link>
				</BottomNavigationAction>
				<BottomNavigationAction label="Team" value="Team" />
				<BottomNavigationAction label="Contact" value="Contact" />
			</BottomNavigation>
		);
	}
}

export default Navigation;
