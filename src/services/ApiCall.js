import apiConfig from "src/connectors/config/ApiConfig";
import axios from "axios";


export const connectWalletAdd = async (add) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${apiConfig.connectWalletAdd}${add}`,
    });
    return res;
  } catch (error) {
    return [];
  }
};

export const getAPI = async (endPoint) => {
  try {
    const res = await axios({
      method: "GET",
      url: apiConfig[endPoint],
    });
    return res.data;
  } catch (error) {
    return [];
  }
};

export const getSingleGame = async (endPoint, gameId) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameId: gameId },
      url: apiConfig[endPoint],
    });
    return res;
  } catch (error) {
    return [];
  }
};

export const getOddAPI = async (endPoint, gameId) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameId },
      url: apiConfig[endPoint],
    });
    return res;
  } catch (error) {
    return [];
  }
};

export const getAPIPath = async (endPoint, gameId) => {
  try {
    const response = await fetch(apiConfig[endPoint] + "/" + gameId);
    const games = await response.json();
    return games;
  } catch (error) {
    return [];
  }
};

export const getLeagues = async (endPoint) => {
  try {
    const response = await axios({
      method: 'GET',
      url: apiConfig[endPoint],
    });
    return response.data;
  }
  catch(error){
    console.log(error);
  }
}

