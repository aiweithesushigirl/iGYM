import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// const styles = {
//   root: {
//     width: 500,
//   },
// };

class Navigation extends React.Component {
  state = {
    value: 0,

  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} showLabels>
        <BottomNavigationAction label="About iGYM" value="About_iGYM"  />
        <BottomNavigationAction label="The Team" value="The_Team" />
        <BottomNavigationAction label="Publications" value="Publications" />
        <BottomNavigationAction label="Contact" value="Contact"  />
      </BottomNavigation>
    );
  }
}


export default (Navigation);
