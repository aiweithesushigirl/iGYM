import React, {Component} from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import 'roboto-npm-webfont';
import './App.css';

import HeaderComponent from './components/header/header';
import IntroductionComponent from './components/introduction/introduction';
import ContactComponent from './components/contact/contact';
import FooterComponent from './components/footer/footer';
// import Navigation from './components/navigation/navigation';
// import AppRouter from './AppRouter';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="section header-section">
            <div className="section-container header-component">
              <HeaderComponent></HeaderComponent>
            </div>
            
          </div>
          <div className="section navigation">
              {/* <Navigation></Navigation> */}
              {/* <AppRouter /> */}
            </div>
          <div className="section colored">
            <div className="section-container">
              <IntroductionComponent></IntroductionComponent>
            </div>
            
          </div>
          
          <div className="section">
            <div className="section-container">
              <ContactComponent></ContactComponent>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container footer-component">
              <FooterComponent></FooterComponent>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
