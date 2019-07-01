import React, {Component} from 'react';
import Header from "./header/Header";
import MainContent from "./mainContent/MainContent";
import Footer from "./footer/Footer";
import {BrowserRouter, Route} from 'react-router-dom';
import Android from './mainContent/Android';
import ComputerScience from './mainContent/ComputerScience';
import UXDesign from './mainContent/UXDesign';
import IOS from './mainContent/IOS';
import FullStack from './mainContent/FullStack';
import DataScience from './mainContent/DataScience';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div> 
          <Route exact path="/" render={() => 
            <div>
              <Header />
              <MainContent />
              {/* <Footer /> */}
            </div>
          } /> 

          <Route exact path="/android_development" render={() =>
            <div>
              <Header />
              <Android />
            </div> 
            }/>

          <Route exact path="/computer_science" render={() =>  
            <div>
              <Header />
              <ComputerScience />
            </div>
          } /> 

          <Route exact path="/data_science" render={() =>  
            <div>
              <Header />
              <DataScience />
            </div>
          } /> 

          <Route exact path="/full_stack" render={() =>  
            <div>
              <Header />
              <FullStack />
            </div>
          } /> 

          <Route exact path="/ios_development" render={() =>  
            <div>
              <Header />
              <IOS />
            </div>
          } /> 

          <Route exact path="/uxdesign" render={() =>  
            <div>
              <Header />
              <UXDesign />
            </div>
          } /> 
      </div>
      </BrowserRouter>
    );
  }
}

export default App;