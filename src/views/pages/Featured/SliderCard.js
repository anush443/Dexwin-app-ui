import React, { useEffect } from "react";
import {
  Box,
  Typography,
  makeStyles,
  Paper,
  Button,
  Grid,
} from "@material-ui/core";
import Slider from "react-slick";
import { ModalContext } from "src/component/context";
import Modal from "src/component/Modal";
import CosafaCupGame from "src/views/pages/CosafaCupGame/Index";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Dropdown from "react-dropdown";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { getLeagues } from "src/services/ApiCall";
import {
  getLeaguesLiveGames,
  getLeaguesUpcomingGames,
} from "../../../redux/actions/getAllUsersAction";
import { useSelector, useDispatch } from "react-redux";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const useStyles = makeStyles((theme) => ({
  dialogBox: {
    padding: "30px",
  },
  cardBox: {
    margin: "8px 0px",
    cursor: "pointer",
    borderRadius: "20px",
    height: "182px",
    boxShadow: "-6px -23px 45px black inset",
    // boxShadow: "-4px -8px 20px rgb(77 73 73 / 28%), 8px 10px 20px rgb(0 0 0 / 25%)",
    "& h5": {
      padding: "25px 0px",
      fontWeight: "700",
      fontSize: "14px",
    },
  },

  btn: {
    backgroundColor: "#2B2B2B !important",
    borderRadius: "100px !important",
    minWidth: "100px !important",
    width: "max-content",
    padding: "7px",
    fontWeight: "800",    
    marginRight: "0px !important",
    marginTop: "0px !important",
  },
  btnHover: {
    // backgroundColor: "#2B2B2B !important",
    borderRadius: "100px !important",
    width: "178px !important",
    // padding: "15px",
    fontWeight: "800",
    marginRight: "0px !important",
    marginTop: "0px !important",
    "&:active": {
      border: "2px solid #70D5FB",
    },
  },
  btneuro: {
    backgroundColor: "#2B2B2B !important",
    borderRadius: "100px !important",
    width: "9rem !important",
    padding: "14px",
    fontWeight: "800",
  },
  btn1: {
    backgroundColor: "#2B2B2B !important",
    padding: "0.5rem",
  },
  Convertedimg: {
    // padding: "10px 0",
  },
  slideMargin: { margin: "0 10px", padding: "10px 0" },
  sliderImg: {
    position: "relative",
    zIndex: "-1",
  },
}));
const cardData = [
  {
    image: "/images/liveimg.png",
    subheading: "Lorem ipsum dolor sit amet,",
    name: "POPULAR",
  },
  {
    image: "/images/popularimg.png",
    name: "FEATURED",
  },

  {
    image: "/images/liveimg.png",
    subheading: "Lorem ipsum dolor sit amet,",
    name: "TEAMS",
  },
  {
    image: "/images/parlays.png",
    name: "PARLAYS+",
  },
  {
    image: "/images/players.png",
    name: "PLAYERS",
  },

  {
    image: "/images/popularimg.png",
    name: "POPULAR",
  },

  {
    image: "/images/featuredimg.png",
    name: "FEATURED",
  },
  {
    image: "/images/parlays.png",
    name: "PARLAYS+",
  },
  {
    image: "/images/players.png",
    name: "PLAYERS",
  },
  {
    image: "/images/featuredimg.png",
    name: "LIVE",
  },
];

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <ArrowForwardIosIcon style={{ color: "#787878" }} />
    ) : (
      <ArrowBackIosIcon style={{ color: "#787878" }} />
    );
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}
function NftSlider() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [leaguesData, setLeaguesData] = React.useState([]);
  const [showModal, updateShowModal] = React.useState(false);
  const toggleModal = () => updateShowModal((state) => !state);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const leagueData = (id) => {
    console.log(id, "iddddd");
    dispatch(getLeaguesLiveGames(id));
  };

  const leagueUpcomingData = (id) => {
    console.log(id, "iddddd");
    dispatch(getLeaguesUpcomingGames(id));
  };

  const options = ["NBA", "CBA", "FBA"];

  const getLeaguesData = async () => {
    try {
      const endPoint = "leaguesAPI";
      const res = await getLeagues(endPoint);
      if (res) {
        const json = await res.data;
        setLeaguesData(json);
        console.log(json, "leaguesData");
        // leagueData(res?.data[0]?.id)
      } else {
        setLeaguesData([]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLeaguesData();
    dispatch(getLeaguesLiveGames());
    dispatch(getLeaguesUpcomingGames());
  }, []);
  console.log(leaguesData, "leaguesdataa");
  return (
    <Box className={classes.Convertedimg}>
      <Box>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          style={{
            backgroundColor: "#191919",
            boxShadow:
              "-10px -10px 20px rgb(87 82 82 / 50%), 10px 10px 20px rgb(48 47 47 / 50%)",
            borderRadius: "20px",
          }}
        >
          <Grid
            item
            sm={2}
            xs={4}
            style={{
              padding: "20px",
              backgroundColor: "#222222",
              display: "flex",
              borderRadius: "14px 0px 10px 16px",
              "@media (min-width: 1280px) and (max-width: 1374px)": {
                fontSize: 10,
                padding: "2px 0.5px",
                background: "red",
              },
            }}
          >
            <Button
              className={classes.btnHover}
              onClick={() => {
                dispatch(getLeaguesLiveGames());
                dispatch(getLeaguesUpcomingGames());
              }}
            >
              All Leagues
            </Button>
          </Grid>
          <Grid item sm={10} xs={8}>
            <Carousel
              responsive={responsive}
              style={{ display: "flex"}}
              centerMode={true}
            >
              {leaguesData &&
                leaguesData.map((data, i) => {
                  return (
                    <>
                    <div>
                      <Button
                        className={data[0] ? classes.btnHover : classes.btn}
                        key={i}
                        onClick={() => {
                          leagueData(data.id);
                          leagueUpcomingData(data.id);
                        }}  
                      >
                        <img
                          src={data.logo}
                          style={{ width: "1rem", height: "1rem" }}
                        ></img>
                        &nbsp;{data.name}
                      </Button>
                      </div>  
                    </>
                  );
                })}
            </Carousel>
          </Grid>
        </Grid>
        <Slider {...settings}>
          {cardData.map((values) => {
            return (
              <>
                <Box className={classes.slideMargin}>
                  <div className={classes.cardBox} onClick={toggleModal}>
                    <img
                      className={classes.sliderImg}
                      src={values.image}
                      alt="cardImage"
                      width="100%"
                      style={{ height: "182px", borderRadius: "20px" }}
                    />
                    <p className="imgname">{values.name}</p>
                  </div>
                </Box>
              </>
            );
          })}
        </Slider>
      </Box>
      <ModalContext.Provider value={{ showModal, toggleModal }}>
        <div>
          <Modal canShow={showModal} updateModalState={toggleModal}>
            <CosafaCupGame type="cPopular" values={leaguesData.data} />
          </Modal>
        </div>
      </ModalContext.Provider>
    </Box>
  );
}

export default NftSlider;

