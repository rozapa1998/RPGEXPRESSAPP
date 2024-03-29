import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import EnemiesReducer from "./reducers/enemies.reducer"
import LevelReducer from "./reducers/level.reducer"
import AuthReducer from "./reducers/auth.reducer";
import StatsReducer from "./reducers/stats.reducer";

const rootReducer = combineReducers({
    enemies: EnemiesReducer,
    levels: LevelReducer,
    auth: AuthReducer,
    stats: StatsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));