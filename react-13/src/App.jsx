import React from 'react';
import './App.scss';
import TopBar from '../src/components/Topbar';
import Filters from '../src/components/Filters';
import Contacts from '../src/components/Contacts';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        
        <TopBar />
        <Filters />
        <Contacts />
        
      </React.Fragment>
    )
  }
}

export default App;
