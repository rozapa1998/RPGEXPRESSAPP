import { levelsData } from "../../constants/data/levelsData";
import { LevelTypes } from "../../types/level.types";

const {SELECTED_LEVEL} = LevelTypes;

const initialState = {
    levelsData,
    selected: null
}

const LevelReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_LEVEL:
            const indexLevel = state.levelsData.findIndex( level => level.id === action.levelId )
            if(indexLevel === -1) return state
        return {
            ...state,
            selected: state.levelsData[indexLevel]
        }
        default:
            return state
    }
}

export default LevelReducer