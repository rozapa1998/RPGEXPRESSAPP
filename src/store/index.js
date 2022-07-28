import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import EnemiesReducer from "./reducers/enemies.reducer"
import LevelReducer from "./reducers/level.reducer"

const rootReducer = combineReducers({
    enemies: EnemiesReducer,
    levels: LevelReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));