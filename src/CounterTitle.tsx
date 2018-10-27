import * as React from "react";

const CounterTitle = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(
    () => {
      // Update the document title to the current count
      document.title = `You clicked ${count} times`;

      // Cleanup the effect so that the document title is properly restored
      return () => {
        document.title = "React TypeScript Hooks";
      };
    },
    [count]
  );

  return (
    <div className="counter">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default CounterTitle;
