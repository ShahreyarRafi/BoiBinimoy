import { createStore, compose, combineReducers, applyMiddleware } from "redux";

import thunkMiddleware from "redux-thunk";
import { messengerReducer } from "./reducers/messangerReducer";

// import { authReducer } from "./reducers/authReducer";

// const rootReducer = combineReducers({
//   // auth: authReducer,
//   messenger: messengerReducer,
// });

let middleware = [thunkMiddleware];

const store = createStore(
  // rootReducer,
  compose(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
