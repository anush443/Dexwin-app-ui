import React, { createContext, useEffect, useState } from "react";
import {
  getMoneyLine1QuarterOddAPI,
  getMoneyLine2QuarterOddAPI,
  getMoneyLine3QuarterOddAPI,
  getMoneyLine4QuarterOddAPI,
  getMoneyLine1HalfOddAPI,
  getMoneyLine2HalfOddAPI,
  getSpread1QuarterOddAPI,
  getSpread2QuarterOddAPI,
  getSpread3QuarterOddAPI,
  getSpread4QuarterOddAPI,
  getSpread1HalfOddAPI,
  getSpread2HalfOddAPI,
  getOverUnder1QuarterOddAPI,
  getOverUnder2QuarterOddAPI,
  getOverUnder3QuarterOddAPI,
  getOverUnder4QuarterOddAPI,
  getOverUnder1HalfOddAPI,
  getOverUnder2HalfOddAPI,
  getThreeWay1QuarterOddAPI,
  getThreeWay2QuarterOddAPI,
  getThreeWay3QuarterOddAPI,
  getThreeWay4QuarterOddAPI,
  getThreeWay1HalfOddAPI,
  getThreeWay2HalfOddAPI,
} from "src/services/PeriodicOddsAPI";
import {
  getMoneyLineOddAPI,
  getSpreadOddAPI,
  getThreeWayOddAPI,
  getOverUnderOddAPI,
} from "src/services/PopularOddsAPI";
import {
  getOddEven1HalfAPI,
  getOddEven2HalfAPI,
  getOddEvenHomeAPI,
  getOddEvenAwayAPI,
  getAwayOddEven1HalfAPI,
  getAwayOddEven2HalfAPI,
  getHomeOddEven1HalfAPI,
  getHomeOddEven2HalfAPI,
  getOddEven1QuarterOddsAPI,
  getOddEven2QuarterOddsAPI,
  getOddEven3QuarterOddsAPI,
  getOddEven4QuarterOddsAPI,
  getAwayOddEven1QuarterOddsAPI,
  getAwayOddEven2QuarterOddsAPI,
  getAwayOddEven3QuarterOddsAPI,
  getAwayOddEven4QuarterOddsAPI,
  getHomeOddEven1QuarterOddsAPI,
  getHomeOddEven2QuarterOddsAPI,
  getHomeOddEven3QuarterOddsAPI,
  getHomeOddEven4QuarterOddsAPI,
} from "src/services/ExoticOddsAPI";

export const OddsContext = createContext();

export default function OddsProvider(props) {
  const { matchId } = props;
  // const matchId = "326260";
  console.log(matchId,"idmatch")
  const [periodicData, setPeriodicData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [exoticD, setExoticD] = useState([]);
  var periodicArr = [];
  var popularArr = [];
  var exoticArr = [];

  useEffect(() => {
    getPeriodicOdds();
  }, []);

  const clearData = () => {
    setPeriodicData([]);
    setPopularData([]);
    setExoticD([]);
  };

  const getPopularOdds = async (matchId) => {
    const responseMoneyLine = await getMoneyLineOddAPI(matchId);
    popularArr.push({
      type: "moneyLine",
      name: "MoneyLine",
      odds: responseMoneyLine,
    });
    setPopularData(popularArr);

    const responseSpread = await getSpreadOddAPI(matchId);
    popularArr.push({
      type: "spread",
      name: "Spread Odds",
      odds: responseSpread,
    });
    setPopularData(popularArr);

    const responseThreeWay = await getThreeWayOddAPI(matchId);
    popularArr.push({
      type: "threeWay",
      name: "Three Way Odds",
      odds: responseThreeWay,
    });
    setPopularData(popularArr);

    const responseOverUnder = await getOverUnderOddAPI(matchId);
    popularArr.push({
      type: "overUnder",
      name: "Over Under Odds",
      odds: responseOverUnder,
    });
    setPopularData(popularArr);
  };

  const getPeriodicOdds = async (matchId) => {
    const responseMoneyLine1Quarter = await getMoneyLine1QuarterOddAPI(matchId);
    periodicArr.push({
      type: "moneyLine",
      name: "1st Quarter MoneyLine",
      odds: responseMoneyLine1Quarter,
    });
    setPeriodicData(periodicArr);
    console.log(responseMoneyLine1Quarter,"responseMoneyLine1Quarter")
    

    const responseMoneyLine2Quarter = await getMoneyLine2QuarterOddAPI(matchId);
    periodicArr.push({
      type: "moneyLine",
      name: "2nd Quarter MoneyLine",
      odds: responseMoneyLine2Quarter,
    });
    setPeriodicData(periodicArr);

    const responseMoneyLine3Quarter = await getMoneyLine3QuarterOddAPI(matchId);
    periodicArr.push({
      type: "moneyLine",
      name: "3rd Quarter MoneyLine",
      odds: responseMoneyLine3Quarter,
    });
    setPeriodicData(periodicArr);

    const responseMoneyLine4Quarter = await getMoneyLine4QuarterOddAPI(matchId);
    periodicArr.push({
      type: "moneyLine",
      name: "4th Quarter MoneyLine",
      odds: responseMoneyLine4Quarter,
    });
    setPeriodicData(periodicArr);

    const responseMoneyLine1Half = await getMoneyLine1HalfOddAPI(matchId);
    periodicArr.push({
      type: "moneyLine",
      name: "1st-Half Quarter MoneyLine",
      odds: responseMoneyLine1Half,
    });
    setPeriodicData(periodicArr);

    const responseMoneyLine2Half = await getMoneyLine2HalfOddAPI(matchId);
    periodicArr.push({
      type: "moneyLine",
      name: "2nd-Half Quarter MoneyLine",
      odds: responseMoneyLine2Half,
    });
    setPeriodicData(periodicArr);

    const responseOverUnder1Quarter = await getOverUnder1QuarterOddAPI(matchId);
    periodicArr.push({
      type: "overUnder",
      name: "Over Under Odds 1 Quarter",
      odds: responseOverUnder1Quarter,
    });
    setPeriodicData(periodicArr);

    const responseOverUnder2Quarter = await getOverUnder2QuarterOddAPI(matchId);
    periodicArr.push({
      type: "overUnder",
      name: "Over Under Odds 2 Quarter",
      odds: responseOverUnder2Quarter,
    });
    setPeriodicData(periodicArr);

    const responseOverUnder3Quarter = await getOverUnder3QuarterOddAPI(matchId);
    periodicArr.push({
      type: "overUnder",
      name: "Over Under Odds 3 Quarter",
      odds: responseOverUnder3Quarter,
    });
    setPeriodicData(periodicArr);

    const responseOverUnder4Quarter = await getOverUnder4QuarterOddAPI(matchId);
    periodicArr.push({
      type: "overUnder",
      name: "Over Under Odds 4 Quarter",
      odds: responseOverUnder4Quarter,
    });
    setPeriodicData(periodicArr);

    const responseOverUnder1Half = await getOverUnder1HalfOddAPI(matchId);
    periodicArr.push({
      type: "overUnder",
      name: "Over Under Odds 1st Half",
      odds: responseOverUnder1Half,
    });
    setPeriodicData(periodicArr);

    const responseOverUnder2Half = await getOverUnder2HalfOddAPI(matchId);
    periodicArr.push({
      type: "overUnder",
      name: "Over Under Odds 2nd Half",
      odds: responseOverUnder2Half,
    });
    setPeriodicData(periodicArr);

    const responseSpread1Quarter = await getSpread1QuarterOddAPI(matchId);
    periodicArr.push({
      type: "spread",
      name: "Spread Odds 1 Quarter",
      odds: responseSpread1Quarter,
    });
    setPeriodicData(periodicArr);

    const responseSpread2Quarter = await getSpread2QuarterOddAPI(matchId);
    periodicArr.push({
      type: "spread",
      name: "Spread Odds 2 Quarter",
      odds: responseSpread2Quarter,
    });
    setPeriodicData(periodicArr);

    const responseSpread3Quarter = await getSpread3QuarterOddAPI(matchId);
    periodicArr.push({
      type: "spread",
      name: "Spread Odds 3 Quarter",
      odds: responseSpread3Quarter,
    });
    setPeriodicData(periodicArr);

    const responseSpread4Quarter = await getSpread4QuarterOddAPI(matchId);
    periodicArr.push({
      type: "spread",
      name: "Spread Odds 4 Quarter",
      odds: responseSpread4Quarter,
    });
    setPeriodicData(periodicArr);

    const responseSpread1Half = await getSpread1HalfOddAPI(matchId);
    periodicArr.push({
      type: "spread",
      name: "Spread Odds 1st Half",
      odds: responseSpread1Half,
    });
    setPeriodicData(periodicArr);

    const responseSpread2Half = await getSpread2HalfOddAPI(matchId);
    periodicArr.push({
      type: "spread",
      name: "Spread Odds 2nd Half",
      odds: responseSpread2Half,
    });
    setPeriodicData(periodicArr);

    const responseThreeWay1Quarter = await getThreeWay1QuarterOddAPI(matchId);
    periodicArr.push({
      type: "threeWay",
      name: "Three Way Odds 1 Quarter",
      odds: responseThreeWay1Quarter,
    });
    setPeriodicData(periodicArr);

    const responseThreeWay2Quarter = await getThreeWay2QuarterOddAPI(matchId);
    periodicArr.push({
      type: "threeWay",
      name: "Three Way Odds 2 Quarter",
      odds: responseThreeWay2Quarter,
    });
    setPeriodicData(periodicArr);

    const responseThreeWay3Quarter = await getThreeWay3QuarterOddAPI(matchId);
    periodicArr.push({
      type: "threeWay",
      name: "Three Way Odds 3 Quarter",
      odds: responseThreeWay3Quarter,
    });
    setPeriodicData(periodicArr);

    const responseThreeWay4Quarter = await getThreeWay4QuarterOddAPI(matchId);
    periodicArr.push({
      type: "threeWay",
      name: "Three Way Odds 4 Quarter",
      odds: responseThreeWay4Quarter,
    });
    setPeriodicData(periodicArr);

    const responseThreeWay1Half = await getThreeWay1HalfOddAPI(matchId);
    periodicArr.push({
      type: "threeWay",
      name: "Three Way Odds 1st Half",
      odds: responseThreeWay1Half,
    });
    setPeriodicData(periodicArr);

    const responseThreeWay2Half = await getThreeWay2HalfOddAPI(matchId);
    periodicArr.push({
      type: "threeWay",
      name: "Three Way Odds 2nd Half",
      odds: responseThreeWay2Half,
    });
    setPeriodicData(periodicArr);
  };

  const getExoticOdds = async (matchId) => {
    const responseOddEven1Half = await getOddEven1HalfAPI(matchId);
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even 1 Half",
      odds: responseOddEven1Half,
    });
    setExoticD(exoticArr);

    const responseOddEven2Half = await getOddEven2HalfAPI(matchId);
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even 2 Half",
      odds: responseOddEven2Half,
    });
    setExoticD(exoticArr);

    const responseOddEvenHome = await getOddEvenHomeAPI(matchId);
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even Home",
      odds: responseOddEvenHome,
    });
    setExoticD(exoticArr);

    const responseOddEvenAway = await getOddEvenAwayAPI(matchId);
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even Away",
      odds: responseOddEvenAway,
    });
    setExoticD(exoticArr);

    const responseAwayOddEven1Half = await getAwayOddEven1HalfAPI(matchId);
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even Away 1 Half",
      odds: responseAwayOddEven1Half,
    });
    setExoticD(exoticArr);

    const responseAwayOddEven2Half = await getAwayOddEven2HalfAPI(matchId);
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even Away 2 Half",
      odds: responseAwayOddEven2Half,
    });
    setExoticD(exoticArr);

    const responseHomeOddEven1Half = await getHomeOddEven1HalfAPI(matchId);
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even Home 1 Half",
      odds: responseHomeOddEven1Half,
    });
    setExoticD(exoticArr);

    const responseHomeOddEven2Half = await getHomeOddEven2HalfAPI(matchId);
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even Home 2 Half",
      odds: responseHomeOddEven2Half,
    });
    setExoticD(exoticArr);

    const responseOddEven1Quarter = await getOddEven1QuarterOddsAPI(matchId);
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even 1 Quarter",
      odds: responseOddEven1Quarter,
    });
    setExoticD(exoticArr);

    const responseOddEven2Quarter = await getOddEven2QuarterOddsAPI(matchId);
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even 2 Quarter",
      odds: responseOddEven2Quarter,
    });
    setExoticD(exoticArr);

    const responseOddEven3Quarter = await getOddEven3QuarterOddsAPI(matchId);
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even 3 Quarter",
      odds: responseOddEven3Quarter,
    });
    setExoticD(exoticArr);

    const responseOddEven4Quarter = await getOddEven4QuarterOddsAPI(matchId);
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even 4 Quarter",
      odds: responseOddEven4Quarter,
    });
    setExoticD(exoticArr);

    const responseHomeOddEven1Quarter = await getHomeOddEven1QuarterOddsAPI(
      matchId
    );
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even Home 1 Quarter",
      odds: responseHomeOddEven1Quarter,
    });
    setExoticD(exoticArr);

    const responseHomeOddEven2Quarter = await getHomeOddEven2QuarterOddsAPI(
      matchId
    );
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even Home 2 Quarter",
      odds: responseHomeOddEven2Quarter,
    });
    setExoticD(exoticArr);

    const responseHomeOddEven3Quarter = await getHomeOddEven3QuarterOddsAPI(
      matchId
    );
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even Home 3 Quarter",
      odds: responseHomeOddEven3Quarter,
    });
    setExoticD(exoticArr);

    const responseHomeOddEven4Quarter = await getHomeOddEven4QuarterOddsAPI(
      matchId
    );
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even Home 4 Quarter",
      odds: responseHomeOddEven4Quarter,
    });
    setExoticD(exoticArr);

    const responseAwayOddEven1Quarter = await getAwayOddEven1QuarterOddsAPI(
      matchId
    );
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even Away 1 Quarter",
      odds: responseAwayOddEven1Quarter,
    });
    setExoticD(exoticArr);

    const responseAwayOddEven2Quarter = await getAwayOddEven2QuarterOddsAPI(
      matchId
    );
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even Away 2 Quarter",
      odds: responseAwayOddEven2Quarter,
    });
    setExoticD(exoticArr);

    const responseAwayOddEven3Quarter = await getAwayOddEven3QuarterOddsAPI(
      matchId
    );
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even Away 3 Quarter",
      odds: responseAwayOddEven3Quarter,
    });
    setExoticD(exoticArr);

    const responseAwayOddEven4Quarter = await getAwayOddEven4QuarterOddsAPI(
      matchId
    );
    exoticArr.push({
      type: "oddEven",
      name: "Odd Even Away 4 Quarter",
      odds: responseAwayOddEven4Quarter,
    });
    setExoticD(exoticArr);
  };
  console.log(periodicArr,"periodicArr")
  var data = {
    periodicOdds: periodicData,
    popularData: popularData,
    exoticD: exoticD,
    getPeriodicOdds: getPeriodicOdds,
    getPopularOdds: getPopularOdds,
    getExoticOdds: getExoticOdds,
    clearData: clearData,
  };

  return (
    <OddsContext.Provider value={data}>{props.children}</OddsContext.Provider>
  );
}
