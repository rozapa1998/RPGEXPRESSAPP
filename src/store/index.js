import { createStore, combineReducers } from "redux";

import EnemiesReducer from "./reducers/enemies.reducer"
import LevelReducer from "./reducers/level.reducer"

const rootReducer = combineReducers({
    enemies: EnemiesReducer,
    levels: LevelReducer
});

export default createStore(rootReducer);