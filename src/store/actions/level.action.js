import { LevelTypes } from "../../types/level.types";

const { SELECTED_LEVEL } = LevelTypes;

export const SelectedLevel = (id) => ({
    type: SELECTED_LEVEL,
    levelId: id,
})