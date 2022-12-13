// let baseurl= process.env.BASE_URL
let baseUrl="https://staging.dexwin.bet/betapi";
// let baseurl="http://localhost:3023";

// GET ALL USERS DATA ENDPOINTS
export const GET_ALL_ODDS =
  `${baseUrl}/api/live/odds?gameid=`;

  // Get Leagues Live Games
  export const GET_LEAGUES_GAMES_BY_ID = `${baseUrl}api/leagues/live-games?leagueId=`;
  export const GET_LEAGUES_GAMES = `${baseUrl}/api/leagues/live-games`;

  //Get Leagues Upcoming Games
  export const GET_UPCOMING_LEAGUES_GAMES_BY_ID = `${baseUrl}/api/leagues/upcomings-games?leagueId=`;
  export const GET_UPCOMING_LEAGUES_GAMES = `${baseUrl}/api/leagues/upcomings-games`;

