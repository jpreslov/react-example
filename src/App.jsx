import React, { Component } from "react";
import PizzaFlavor from './Components/PizzaFlavor'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: "",
    };
  }

  getFlavor = (e) => {
    this.setState({
      pizza: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>
            What's your favorite type of pizza, {this.props.name}, who is
            {this.props.age} years old?
          </h1>
          <input
            onChange={this.getFlavor}
            id="flavInput"
            placeholder="Type anything here"
            type="text"
          />
          <button>Submit</button>
        </div>
        <PizzaFlavor flavor={this.state.pizza}/>
      </React.Fragment>
    );
  }
}

export default App;
