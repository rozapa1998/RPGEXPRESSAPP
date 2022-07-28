import { enemyTypes } from "../../types/enemy.types"

const {FILTRED_ENEMIES} = enemyTypes

export const filtredEnemy = ( id ) => ({
    type: FILTRED_ENEMIES,
    levelId: id,
})