import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import MainMenu from './Menu';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
        <div>
          <MainMenu/>
            <Container>
              {this.props.children}
            </Container>
            <Footer />
        </div>
    );
  }
}

export default App;
