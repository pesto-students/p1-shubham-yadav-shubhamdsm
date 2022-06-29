import logo from "./logo.svg";
import "./App.css";
import { incrementSteps, resetSteps } from "./redux";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const steps = useSelector((steps) => steps);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>You have walked {steps} today!</h1>
      <button onClick={() => dispatch(incrementSteps())}>Add a step</button>
      <button onClick={() => dispatch(resetSteps())}>Reset Steps</button>
    </div>
  );
}

export default App;
