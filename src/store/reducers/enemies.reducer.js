import { Enemies } from "../../constants/data/enemies";

const initialState = {
    Enemies,
    filtredEnemies: [],
    selected: null
}

const EnemyReducer = (state = initialState, action) => {
    return state
}

export default EnemyReducer