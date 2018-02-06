import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import RotatingGreeter from '../src/Components/RotatingGreeting/';
import{ MusicContext } from '../src/Components/MusicSectionContext/';
import { About } from '../src/Components/About/';
import { Contact } from '../src/Components/Contact/';
import { Helmet } from "react-helmet";


class App extends Component {
  render() {
    return (
      <div className="App">  
        <Helmet>
          <meta charSet="utf-8" />
          <title>HR Imagination</title>
        </Helmet>
        <RotatingGreeter />
        <MusicContext />
        <About />  
        <Contact />  

      </div>
    );
  }
}

export default App;
