import React from 'react';
import './App.css';
import NavBar from './components/02-Organisms/NavBar';
import Contato from './components/02-Organisms/Contato'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    }
    console.log('constructor');
  }

  componentDidMount() {
    console.log("Component did mout?");
  }

  componentDidUpdate() {
    console.log("component did update?");
  }

  render() {
    return (
      <div>
        <NavBar />
        <Contato style="background-color: black;"/>
      </div>
    );
  }
  
}

export default App;
