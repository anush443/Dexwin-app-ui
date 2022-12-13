import React, { useEffect, useState, useContext } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { UpcomingContext } from "src/context/Upcoming";
import { useSelector, useDispatch } from "react-redux";
import DashboardCard from "src/component/DashboardCard";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import { getAllOdds } from "../../../redux/actions/getAllUsersAction";
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
  }
}));

function UpcomingComponent() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const upcoming = useContext(UpcomingContext);
  const [upcommingleaguesData, setUpcommingLeaguesData] = useState([]);

  useEffect(() => {
    dispatch(getAllOdds("326238"));
  }, []);
  const detail = useSelector((state) => state);

  useEffect(() => {
    document.title = "Upcoming Matches | Dexwin";
    setUpcommingLeaguesData(upcoming.matches);
  }, []);

  const noDataFoundMessage = () => {
    return (
      <div className={classes.boxRelative}>
        <div className={classes.boxFixedCenter}>
          <SportsBasketballIcon className={classes.centerIcon} />
          <div className={classes.textCenter}>Matches are not running now.</div>
        </div>
      </div>
    );
  };

  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [pageCount, setPageCount] = useState(5);
  const [data, setData] = useState([]);
  const upcomingDataById = useSelector(
    (state) => state?.getAllReducer?.leaguesUpcomingDataById?.data
  );
  const sliceData = () => {
    const slice = upcomingDataById?.slice(offset, offset + perPage);
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
          type="upcoming"
          upcomingDataById={upcomingDataById}
          pageCount={pageCount}
        />

        <div className={classes.loadButton}>
          {upcomingDataById?.length > 5 ? (
            <Button onClick={addMore}>Load More</Button>
          ) : null}
        </div>
      </>
    );
  };

  return (
    <div className="outerContainer">
      {upcomingDataById?.length !== 0 ? showData() : noDataFoundMessage()}
    </div>
  );
}

export default UpcomingComponent;
