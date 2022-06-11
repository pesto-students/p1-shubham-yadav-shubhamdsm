import redux, { createStore } from "redux";

export function incrementSteps() {
  return {
    type: "INCREMENTSTEPS",
  };
}
export function resetSteps() {
  return {
    type: "RESETSTEPS",
  };
}
function reducer(steps = 0, action) {
  switch (action.type) {
    case "INCREMENTSTEPS":
      return steps + 1;
    case "RESETSTEPS":
      return (steps = 0);
    default:
      return steps;
  }
}

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
export default store;
