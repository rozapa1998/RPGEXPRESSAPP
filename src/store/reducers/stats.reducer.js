import { statsType } from "../../types/stats.types";
import { createStats } from "../actions/stats.action";

const { CREATE_STATS } = statsType;

const defaultStats = {title:"",HP:0,DEF:0,ATQ:0,EXP:0,ORO:0,img:""}

const Randomize = (max , min) => {
    return Math.floor((Math.random() * max) + min)
  }

const initialState = {
    defaultStats,
}

const StatsReducer = (state= initialState, action) => {
    switch (action.type){
        case CREATE_STATS:
        const newStats = {
            HP: Randomize(30 , 10) ,
            DEF: Randomize(10 , 2),
            ATQ: Randomize(10 , 2),
            EXP: 0,
            ORO: 0
        }
            return newStats
        default:
            return state;
    }
}

export default StatsReducer