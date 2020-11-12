import React from "react";

class Helloworld extends React.Component {
  state = {
    who: "World",
  };
  clickWorld = () => {
    this.setState({ who: "World" });
  };
  clickFriend = () => {
    this.setState({ who: "Friend" });
  };
  clickReact = () => {
    this.setState({ who: "React" });
  };
  render() {
    return (
      <div>
        <p>Hello {this.state.who}!</p>
        <button onClick={this.clickWorld}>World</button>
        <button onClick={this.clickFriend}>Friend</button>
        <button onClick={this.clickReact}>React</button>
      </div>
    );
  }
}

export default Helloworld;
