import React, {Component} from 'react';
import Header from "./header/Header";
import MainContent from "./mainContent/MainContent";
import Footer from "./footer/Footer";
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div> 
          <Route exact path="/" render={() => 
            <div>
              {/* <Header /> */}
              <MainContent />
              {/* <Footer /> */}
            </div>
          } /> 

          {/* <Route exact path="/" render={() =>
            <div>
          
            </div> 
            }/>

          <Route exact path="/" render={() =>  
            <div>
    
            </div>
          } />  */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;