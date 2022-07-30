import { statsType } from "../../types/stats.types";

const { CREATE_STATS } = statsType

const Randomize = (max , min) => {
    return Math.floor((Math.random() * max) + min)
  }

export const createStats = () => ({
    type: CREATE_STATS,
});