import { createStore, combineReducers } from "redux";
import addReducer from "../reducers/addReducer";

//Store congifuration
export default () => {
    const store = createStore (
        combineReducers({
            add: addReducer
        }),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};