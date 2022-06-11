import logo from "./logo.svg";
import "./App.css";
import { switchTheme } from "./redux";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const theme = useSelector((backgroundColor) => backgroundColor);
  const dispatch = useDispatch();
  return (
    <div className="App" style={{ backgroundColor: theme ? "#000" : "#fff" }}>
      <h1 style={{ color: theme ? "#fff" : "#000" }}>
        the room is {theme ? "dark" : "lit"}
      </h1>
      <button onClick={() => dispatch(switchTheme())}>flip</button>
    </div>
  );
}

export default App;
