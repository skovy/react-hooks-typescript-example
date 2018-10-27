import * as React from "react";
import "./App.css";
import Counter from "./Counter";
import CounterTitle from "./CounterTitle";
import GitHubLogo from "./GitHubLogo";

// An object of all possible example components that can be rendered
const EXAMPLES = {
  Counter,
  CounterTitle
};

type Examples = keyof typeof EXAMPLES;

const App = () => {
  // Use state to keep track of the current displayed example component
  const [example, setExample] = React.useState<Examples>("Counter");

  // The currently selected example component that should be rendered
  const ExampleComponent = EXAMPLES[example];

  // A list of buttons for all examples to render
  const exampleButtons = Object.keys(EXAMPLES).map((name: Examples) => (
    <button
      key={name}
      onClick={() => setExample(name)}
      className={name === example ? "active" : ""}
    >
      &lt;
      {name} /&gt;
    </button>
  ));

  return (
    <>
      <div className="container">
        <div className="app">
          {exampleButtons}
          <div className="separator" />
          <ExampleComponent />
        </div>
      </div>
      <GitHubLogo />
    </>
  );
};

export default App;
