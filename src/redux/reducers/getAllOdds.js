import {ActionTypes} from "../constants/action-type";

const initialState ={
    allOddsData:{},
    loading:true,
    error:""
}

export const getAllReducer = (state= initialState ,{type, payload})=>{
    console.log("chala",payload);
    switch(type){
        case ActionTypes.GET_ODDS:
            return {
                ...state,
                allOdds:payload
            }
            case ActionTypes.BET_SLIP:
                return {
                    ...state,
                    betSlip:payload
                }
                case ActionTypes.BET_PARLAY_SLIP:
                    return {
                        ...state,
                        betParlaySlip:payload
                    }
                case ActionTypes.GET_LEAGUES_GAMES:
                    console.log("55555")
                    return {
                        ...state,
                        leaguesDataById:payload
                    }
                    case ActionTypes.GET_UPCOMING_LEAGUES_GAMES:
                        return {
                            ...state,
                            leaguesUpcomingDataById:payload
                        }
                        case ActionTypes.GET_BALANCE:
                            return {
                                ...state,
                                balance:payload
                            }
        default:
             return {
            state
      };
    }
}