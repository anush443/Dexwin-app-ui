import { ActionTypes } from "../constants/action-type";




export const getBalanceAction = (balance) => {

  
    return async (dispatch) => {
      dispatch({
        type: ActionTypes.GET_BALANCE,
        payload: balance,
      });
    };
  };