import * as React from "react";
import "./App.css";
import Counter from "./Counter";

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <div className="app">
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
