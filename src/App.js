import React, {Component} from 'react';
import './App.css';
import './reset.css';

//components
import UserNavigation from "./components/UserNavigation";

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return(
      <div className="page">
        <div className="header">
          <div className="home">Home</div>
        </div>
        <UserNavigation />
      </div>
    )
  }
}

export default App;