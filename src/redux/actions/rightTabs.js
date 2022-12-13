import { ActionTypes } from "../constants/action-type";

export const setTabs = (rightTabs) => {
    return async (dispatch) => {
      dispatch({
        type: ActionTypes.SET_TAB,
        payload: rightTabs,
      });
    };
  };
  