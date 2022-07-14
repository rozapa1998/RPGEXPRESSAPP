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
            const indexLevel = state.levelsData.findIndex( levels => levels.id === levelId )
            if(indexLevel === -1) return state
        return {
            ...state,
            selected: state.levels[indexLevel]
        }
        default:
            return state
    }
}

export default LevelReducer