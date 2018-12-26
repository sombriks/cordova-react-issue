import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: "" };
  }

  takepic = ev => {
    if (window.cordova) {
      navigator.camera.getPicture(image => {
        this.setState({
          image
        });
        console.log(this.state);
      }, console.log);
    } else console.log("please run the cordova project");
  }

  render() {
    return (
      <div>
        <img src={this.state.image} alt="picture" />
        <button onClick={this.takepic}>Take picture</button>
      </div>
    );
  }
}

export default App;
