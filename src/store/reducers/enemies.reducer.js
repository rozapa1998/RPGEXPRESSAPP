import { Enemies } from "../../constants/data/enemies";
import { enemyTypes } from "../../types/enemy.types";

const { FILTRED_ENEMIES } = enemyTypes

const initialState = {
    Enemies,
    filtredEnemies: [],
    selected: null
}

const EnemyReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTRED_ENEMIES:
        return{
                ...state,
                filtredEnemies: state.Enemies.filter( item => item.levelId === action.levelId )
            }
        default:
            return state
    }
         
}

export default EnemyReducer