import redux, { createStore } from "redux";

export function switchTheme() {
  return {
    type: "THEME",
    payload: {},
  };
}

function reducer(initialState = false, action) {
  switch (action.type) {
    case "THEME":
      return !initialState;
    default:
      return initialState;
  }
}
const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
export default store;
