import {ActionTypes} from "../constants/action-type";

const initialState ={
    allOddsData:{},
    loading:true,
    error:"",
    rightTabs:""
}

export const getAllReducer = (state= initialState ,{type, payload})=>{
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
                            case ActionTypes.SET_TAB:
                                return {
                                    ...state,
                                    rightTabs:payload
                                }
        default:
             return {
            state
      };
    }
}