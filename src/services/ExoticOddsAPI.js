import apiConfig from "src/connectors/config/ApiConfig";
import axios from "axios";

//Exotic Odds
// OddEven Half
export const getOddEven1HalfAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["oddEven1HalfOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    return {};
  }
};
export const getOddEven2HalfAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({ 
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["OddEven2HalfOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    return {};
  }
};
export const getOddEvenHomeAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["oddEvenHomeOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    return {};
  }
};
export const getOddEvenAwayAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["oddEvenAwayOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    return {};
  }
};
export const getAwayOddEven1HalfAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["awayOddEven1HalfOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    return {};
  }
};
export const getAwayOddEven2HalfAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["awayOddEven2HalfOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    return {};
  }
};
//OddEven 1st and 2nd Half
export const getHomeOddEven1HalfAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["homeOddEven1HalfOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    return {};
  }
};



export const getHomeOddEven2HalfAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["homeOddEven2HalfOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    return {};
  }
};

//OddEven Quarters OddsAPI
export const getOddEven1QuarterOddsAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["oddEven1QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    return {};
  }
};

export const getOddEven2QuarterOddsAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["oddEven2QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    return {};
  }
};
export const getOddEven3QuarterOddsAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["oddEven3QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    return {};
  }
};
export const getOddEven4QuarterOddsAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["oddEven4QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    return {};
  }
};






//Away OddEven Quarters OddsAPI
export const getAwayOddEven1QuarterOddsAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["awayOddEven1QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    
    return {};
  }
};
export const getAwayOddEven2QuarterOddsAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["awayOddEven2QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    
    return {};
  }
};
export const getAwayOddEven3QuarterOddsAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["awayOddEven3QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    
    return {};
  }
};
export const getAwayOddEven4QuarterOddsAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},  
      url: apiConfig["awayOddEven4QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    
    return {};
  }
};

//Home OddEven Quarter OddsAPI

export const getHomeOddEven1QuarterOddsAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["homeOddEven1QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    
    return {};
  }
};


export const getHomeOddEven2QuarterOddsAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["homeOddEven2QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    
    return {};
  }
};



export const getHomeOddEven3QuarterOddsAPI = async (gameid, bookmakerid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["homeOddEven3QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    
    return {};
  }
};



export const getHomeOddEven4QuarterOddsAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid, bookmakerid: 2},
      url: apiConfig["homeOddEven4QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {};
    }
  } catch (error) {
    
    return {};
  }
};
