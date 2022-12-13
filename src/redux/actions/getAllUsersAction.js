import { ActionTypes } from "../constants/action-type";
import { GET_ALL_ODDS } from "../constants/endpoints";
import {
  GET_LEAGUES_GAMES,
  GET_UPCOMING_LEAGUES_GAMES,
  GET_LEAGUES_GAMES_BY_ID,
  GET_UPCOMING_LEAGUES_GAMES_BY_ID,
} from "../constants/endpoints";
import axios from "axios";

export const getAllOdds = (id) => {
  return async (dispatch) => {
    try {
      let data;
      const res = await axios(`${GET_ALL_ODDS}${id}`, {
        method: "GET",
      });

      data = res.data.data;

      dispatch({
        type: ActionTypes.GET_ODDS,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getBetSlip = (
  data,
  sumOdds,
  sumTotalStake,
  sumTotalPayout,
  checkLeague
) => {
  const betData = {
    data: data,
    totalOdds: sumOdds,
    totalStake: sumTotalStake,
    totalPayout: sumTotalPayout,
    checkLeague: checkLeague,
  };

  return async (dispatch) => {
    dispatch({
      type: ActionTypes.BET_SLIP,
      payload: betData,
    });
  };
};

export const getParlayBetSlip = (
  data,
  sumOdds,
  sumTotalStake,
  sumTotalPayout
) => {
  const betData = {
    data: data,
    totalOdds: sumOdds,
    totalStake: sumTotalStake,
    totalPayout: sumTotalPayout,
  };

  return async (dispatch) => {
    dispatch({
      type: ActionTypes.BET_PARLAY_SLIP,
      payload: betData,
    });
  };
};

export const getLeaguesLiveGames = (id) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.GET_LEAGUES_GAMES,
      payload: [],
    });
    try {
      let data;
      const res = await axios(
        id ? `${GET_LEAGUES_GAMES_BY_ID}${id}` : `${GET_LEAGUES_GAMES}`,
        {
          method: "GET",
        }
      );
      data = res.data;
      dispatch({
        type: ActionTypes.GET_LEAGUES_GAMES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getLeaguesUpcomingGames = (id) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.GET_UPCOMING_LEAGUES_GAMES,
      payload: [],
    })
    try {
      let data;
      const res = await axios(
        id
          ? `${GET_UPCOMING_LEAGUES_GAMES_BY_ID}${id}`
          : `${GET_UPCOMING_LEAGUES_GAMES}`,
        {
          method: "GET",
        }
      );
      data = res.data;
      dispatch({
        type: ActionTypes.GET_UPCOMING_LEAGUES_GAMES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
