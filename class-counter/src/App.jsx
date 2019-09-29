import React, {Component} from 'react';
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button"

class App extends Component {

  state = {
    counter: 0,
  };

  handleClick = e => {
    this.setState({counter: this.state.counter+2});
  }

  componentDidMount() {
    console.log('Hey Root component mounted');
  }

  componentDidUpdate() {
    console.log('Counter Updated!');
  }

  render() {
    const {counter} = this.state;
    return<>
    <Header title="See Button Counter"/>
      <main><div className="btn-container"><Button onClick={this.handleClick} value={counter} /></div></main>
    </>
    
  }
}

export default App;
