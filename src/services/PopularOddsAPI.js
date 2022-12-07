import apiConfig from "src/connectors/config/ApiConfig";
import axios from "axios";


const isEmptyObj = (obj) => {
  return Object.keys(obj).length === 0;
}

export const getSpread1QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["spread1QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {};
  }
};

export const getMoneyLineOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid , bookmakerid: 2},
      url: apiConfig["moneyLineOddAPI"],
    });
    if (!isEmptyObj(res.data)) {
      if (res.data.status == "success") {
        return res.data.data[0].bookmakers[0];
      } else {
        return {};
      }
    }
  } catch (error) {
    return {};
  }
};

export const getSpreadOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["spreadOddAPI"],
    });

    if (!isEmptyObj(res.data)) {
      if (res.data.status == "success") {
        return res.data.data[0].bookmakers[0];
      } else {
        return {};
      }
    }
  } catch (error) {
    return {};
  }
};

export const getThreeWayOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["threeWayOddAPI"],
    });

    if (!isEmptyObj(res.data)) {
      if (res.data.status == "success") {
        return res.data.data[0].bookmakers[0];
      } else {
        return {};
      }
    }
  } catch (error) {
    return {};
  }
};

export const getOverUnderOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["overUnderOddAPI"],
    });

    if (!isEmptyObj(res.data)) {
      if (res.data.status == "success") {
        return res.data.data[0].bookmakers[0];
      } else {
        return {};
      }
    }
  } catch (error) {
    return {};
  }
};



