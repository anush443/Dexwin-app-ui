import React, { useContext, useEffect, useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { LiveContext } from "src/context/Live";
import DashboardCard from "src/component/DashboardCard";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  boxRelative: {
    position: "relative",
    height: "15rem",
    textAlign: "center",
  },
  boxFixedCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  centerIcon: {
    fontSize: "9rem",
    transform: "rotateZ(45deg)",
    color: "rgba(255, 255, 255, 0.1)",
  },
  textCenter: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.1)",
    fontSize: "1rem",
  },
  loadButton: {
    display: "flex",
    justifyContent: "center",
  },
}));

function LiveComponent() {
  const classes = useStyles();
  const live = useContext(LiveContext);
  const [liveLeaguesdata, setLiveLeaguesData] = useState([]);

  useEffect(() => {
    document.title = "Live Matches | Dexwin";
    setLiveLeaguesData(live.matches);
  });

  const noDataFoundMessage = () => {
    return (
      <div className={classes.boxRelative}>
        <div className={classes.boxFixedCenter}>
          <SportsBasketballIcon className={classes.centerIcon} />
          <div className={classes.textCenter}>No live games.</div>
        </div>
      </div>
    );
  };
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(5);
  const [pageCount, setPageCount] = useState(5);
  const [data, setData] = useState([]);
  const liveDataById = useSelector(
    (state) => state?.getAllReducer?.leaguesDataById?.data
  );

  const sliceData = () => {
    const slice = liveDataById?.slice(offset, offset + perPage);
    setData(slice);
  };
  const addMore = () => {
    setPageCount(pageCount + 5);
    sliceData();
  };
  const showData = () => {
    return (
      <>
        <DashboardCard
          type="live"
          liveLeaguesdata={liveLeaguesdata}
          liveDataById={liveDataById}
          pageCount={pageCount}
        />

        <div className={classes.loadButton}>
          {liveDataById?.length > 5 ? (
            <Button onClick={addMore}>Load More</Button>
          ) : null}
        </div>
      </>
    );
  };

  return (
    <div className="outerContainer">
      {liveDataById?.length !== 0 ? showData() : noDataFoundMessage()}
    </div>
  );
}

export default LiveComponent;
