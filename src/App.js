import React, {Component} from 'react';
import 'roboto-npm-webfont';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import scrollToComponent from 'react-scroll-to-component';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HeaderComponent from './components/header/header';
import IntroductionComponent from './components/introduction/introduction';
import ContactComponent from './components/contact/contact';
import FooterComponent from './components/footer/footer';
import Navigation from './components/navigation/navigation';
import ControlledCarousel from './components/slider/slider';

class App extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }
  render() {
    const { value } = this.state;
    return (
      <Router>
        <div className="App">
          <div className="section">
            <div className="section navigation">
              <BottomNavigation value={value} onChange={this.handleChange} showLabels>
                <BottomNavigationAction label="About" value="About" onClick={() => scrollToComponent(this.HeaderComponent, { offset: 0, align: 'top', duration: 1000})}/>
                <BottomNavigationAction label="Team" value="Team" />
                <BottomNavigationAction label="Contact" value="Contact" onClick={() => scrollToComponent(this.ContactComponent, { offset: 0, align: 'top', duration: 1000})} />
              </BottomNavigation>            
            </div>
            <section className="section-container">
              <HeaderComponent></HeaderComponent>
            </section> 
          </div>
          <div className="section colored" ref={(section) => { this.HeaderComponent = section; }}>
            <div className="section-container">
              <IntroductionComponent></IntroductionComponent>
            </div>  
          </div>
          
          <div className="section">
            <section className="section-container" ref={(section) => { this.ContactComponent = section; }}>
              <ContactComponent></ContactComponent>
            </section>
          </div>

          <div className="section colored">
            <div className="section-container footer-component">
              <FooterComponent></FooterComponent>
            </div>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
