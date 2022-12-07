var arr = [];
var checkLeague;
export const addBetslipData = (array) => {
  arr = array;
  console.log("arrService : ", arr);
};

export const getBetslipData = () => {
  return arr;
};
export const sameLeagueCheck = (data) => {
 checkLeague = data;
};

export const getSameLeagueCheck = () => {
  return checkLeague;
};
  
