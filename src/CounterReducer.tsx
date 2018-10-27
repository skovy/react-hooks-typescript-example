import * as React from "react";

interface State {
  count: number;
}

type Actions = "reset" | "increment" | "decrement";

interface Action {
  type: Actions;
}

const initialState: State = { count: 0 };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = React.useReducer<State, Action>(
    reducer,
    initialState
  );

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
};

export default CounterReducer;
