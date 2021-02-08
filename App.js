import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './Navigation/Nav';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Nav/>
      </NavigationContainer>
    );
  }
}


export default App;