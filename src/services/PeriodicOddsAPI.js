import apiConfig from "src/connectors/config/ApiConfig";
import axios from "axios";

// Money Line Odds
export const getMoneyLine1QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["moneyLine1QuarterOddAPI"],
    });
    console.log(res.data.data[0].bookmakers[0],"////////////////////")
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {}
      
    }
  } catch (error) {
    return {}
  }
};

export const getMoneyLine2QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["moneyLine2QuarterOddAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {}
    }
  } catch (error) {
    return {}
  }
};

export const getMoneyLine3QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["moneyLine3QuarterOddAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {}
    }
  } catch (error) {
    return {}
  }
};

export const getMoneyLine4QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["moneyLine4QuarterOddAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {}
    }
  } catch (error) {
    return {}
  }
};

export const getMoneyLine1HalfOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["moneyLine1HalfOddAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {}
    }
  } catch (error) {
    return {}
  }
};

export const getMoneyLine2HalfOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["moneyLine2HalfOddAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {}
    }
  } catch (error) {
    return {}
  }
};

// Over Under Odds
export const getOverUnder1QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["overUnder1QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

export const getOverUnder2QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["overUnder2QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

export const getOverUnder3QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["overUnder3QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

export const getOverUnder4QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["overUnder4QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

export const getOverUnder1HalfOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["overUnder1HalfOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

export const getOverUnder2HalfOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["overUnder2HalfOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

// Spread Odds
export const getSpread1QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["spread1QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

export const getSpread2QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["spread2QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

export const getSpread3QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["spread3QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

export const getSpread4QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["spread4QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

export const getSpread1HalfOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["spread1HalfOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

export const getSpread2HalfOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["spread2HalfOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

// Three Way Odds
export const getThreeWay1QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["threeWay1QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

export const getThreeWay2QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["threeWay2QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

export const getThreeWay3QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["threeWay3QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

export const getThreeWay4QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["threeWay4QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

export const getThreeWay1HalfOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["threeWay1HalfOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};

export const getThreeWay2HalfOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["threeWay2HalfOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {}
  }
};
