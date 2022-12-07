// Base URL
let baseurl="https://app.staging.dexwin.bet/";
// let baseurl="http://localhost:3023";

const apiConfig = {
    // Todays
    todayGamesAPI: `${baseurl}/api/live/get-today-games`,
    todayCompleteGamesAPI: `${baseurl}/api/live/get-today-complete-games`,
    todayUpcomingGamesAPI: `${baseurl}/api/live/upcomming-games`,
    getSingleGameDetails : `${baseurl}/api/live/single-game`,
    todayLiveGamesAPI: `${baseurl}/api/live/live-games`,

    // POPULAR ODDS 
    moneyLineOddAPI:`${baseurl}/api/live/odds/money-line`,
    overUnderOddAPI:`${baseurl}/api/live/odds/over-under`,
    spreadOddAPI:`${baseurl}/api/live/odds/spread`,
    threeWayOddAPI:`${baseurl}/api/live/odds/three-way`,


    // Periodic Odds
    moneyLine1QuarterOddAPI:`${baseurl}/api/live/odds/money-line/1-quarter`,
    moneyLine2QuarterOddAPI:`${baseurl}/api/live/odds/money-line/2-quarter`,
    moneyLine3QuarterOddAPI:`${baseurl}/api/live/odds/money-line/3-quarter`,
    moneyLine4QuarterOddAPI:`${baseurl}/api/live/odds/money-line/4-quarter`,
    moneyLine1HalfOddAPI:`${baseurl}/api/live/odds/money-line/1st-half`,
    moneyLine2HalfOddAPI:`${baseurl}/api/live/odds/money-line/2nd-half`,

    overUnder1QuarterOddAPI:`${baseurl}/api/live/odds/over-under/1-quarter`,
    overUnder2QuarterOddAPI:`${baseurl}/api/live/odds/over-under/2-quarter`,
    overUnder3QuarterOddAPI:`${baseurl}/api/live/odds/over-under/3-quarter`,
    overUnder4QuarterOddAPI:`${baseurl}/api/live/odds/over-under/4-quarter`,
    overUnder1HalfOddAPI:`${baseurl}/api/live/odds/over-under/1st-half`,
    overUnder2HalfOddAPI:`${baseurl}/api/live/odds/over-under/2nd-half`,

    spread1QuarterOddAPI:`${baseurl}/api/live/odds/spread/1-quarter`,
    spread2QuarterOddAPI:`${baseurl}/api/live/odds/spread/2-quarter`,
    spread3QuarterOddAPI:`${baseurl}/api/live/odds/spread/3-quarter`,
    spread4QuarterOddAPI:`${baseurl}/api/live/odds/spread/4-quarter`,
    spread1HalfOddAPI:`${baseurl}/api/live/odds/spread/1st-half`,
    spread2HalfOddAPI:`${baseurl}/api/live/odds/spread/2nd-half`,

    threeWay1QuarterOddAPI:`${baseurl}/api/live/odds/three-way/1-quarter`,
    threeWay2QuarterOddAPI:`${baseurl}/api/live/odds/three-way/2-quarter`,
    threeWay3QuarterOddAPI:`${baseurl}/api/live/odds/three-way/3-quarter`,
    threeWay4QuarterOddAPI:`${baseurl}/api/live/odds/three-way/4-quarter`,
    threeWay1HalfOddAPI:`${baseurl}/api/live/odds/three-way/1st-half`,
    threeWay2HalfOddAPI:`${baseurl}/api/live/odds/three-way/2nd-half`,


    //Exotic Odds
    oddEvenOddsAPI:`${baseurl}/api/live/odds/odd-even`,

    oddEvenOvertimeOddsAPI:`${baseurl}/api/live/odds/odd-even/over-time`,

    oddEven1HalfOddsAPI:`${baseurl}/api/live/odds/odd-even/1st-half`,
    OddEven2HalfOddsAPI:`${baseurl}/api/live/odds/odd-even/2nd-half`,

    oddEvenHomeOddsAPI:`${baseurl}/api/live/odds/odd-even/home`,
    oddEvenAwayOddsAPI:`${baseurl}/api/live/odds/odd-even/away`,

    awayOddEven1HalfOddsAPI:`${baseurl}/api/live/odds/odd-even/away/1st-half`,
    awayOddEven2HalfOddsAPI:`${baseurl}/api/live/odds/odd-even/away/2nd-half`,

    awayOddEven1QuarterOddsAPI:`${baseurl}/api/live/odds/odd-even/away/1-quarter`,
    awayOddEven2QuarterOddsAPI:`${baseurl}/api/live/odds/odd-even/away/2-quarter`,
    awayOddEven3QuarterOddsAPI:`${baseurl}/api/live/odds/odd-even/away/3-quarter`,
    awayOddEven4QuarterOddsAPI:`${baseurl}/api/live/odds/odd-even/away/4-quarter`,

    homeOddEven1HalfOddsAPI:`${baseurl}/api/live/odds/odd-even/home/1st-half`,
    homeOddEven2HalfOddsAPI:`${baseurl}/api/live/odds/odd-even/home/2nd-half`,

    oddEven1QuarterOddsAPI:`${baseurl}/api/live/odds/odd-even/1-quarter`,
    oddEven2QuarterOddsAPI:`${baseurl}/api/live/odds/odd-even/2-quarter`,
    oddEven3QuarterOddsAPI:`${baseurl}/api/live/odds/odd-even/3-quarter`,
    oddEven4QuarterOddsAPI:`${baseurl}/api/live/odds/odd-even/4-quarter`,
    
    homeOddEven1QuarterOddsAPI:`${baseurl}/api/live/odds/odd-even/home/1-quarter`,
    homeOddEven2QuarterOddsAPI:`${baseurl}/api/live/odds/odd-even/home/2-quarter`,
    homeOddEven3QuarterOddsAPI:`${baseurl}/api/live/odds/odd-even/home/3-quarter`,
    homeOddEven4QuarterOddsAPI:`${baseurl}/api/live/odds/odd-even/home/4-quarter`,

      
    homeOddEvenOverTimeOddsAPI:`${baseurl}/api/live/odds/odd-even/home/over-time`,
    awayOddEvenOverTimeOddsAPI:`${baseurl}/api/live/odds/odd-even/away/over-time`,

    raceTo12PointsOdds:`${baseurl}/api/live/odds/race/12-points`,
    raceTo25PointsOdds:`${baseurl}/api/live/odds/race/25-points`,
    raceTo45PointsOdds:`${baseurl}/api/live/odds/race/45-points`,
    raceTo20PointsOdds:`${baseurl}/api/live/odds/race/20-points`,
    raceTo10PointsOdds:`${baseurl}/api/live/odds/race/10-points`,
    raceTo50PointsOdds:`${baseurl}/api/live/odds/race/50-points`,
    raceTo40PointsOdds:`${baseurl}/api/live/odds/race/40-points`,
    raceTo30PointsOdds:`${baseurl}/api/live/odds/race/30-points`,
    
    // Leagues
    leaguesAPI:`${baseurl}/api/leagues`,
    // connect wallet
    connect_Wallet:`${baseurl}/api/user/connect-wallet?walletAddress=`
}

export default apiConfig;