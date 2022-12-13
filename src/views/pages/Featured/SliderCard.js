import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  makeStyles,
  Button,
  Grid,
  Tooltip,
} from "@material-ui/core";
import Slider from "react-slick";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getLeagues } from "src/services/ApiCall";
import { leagueAPIRes } from "src/Constant/Index";
import {
  getLeaguesLiveGames,
  getLeaguesUpcomingGames,
} from "../../../redux/actions/getAllUsersAction";
import { useDispatch } from "react-redux";
// import { ModalContext } from "src/component/context"; 
// import Modal from "src/component/Modal";                         //Coming soon
// import CosafaCupGame from "src/views/pages/CosafaCupGame/Index";

const responsive = {
  superLargeDesktop: {
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
    borderRadius: "100px !important",
    width: "178px !important",
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
  Convertedimg: {},
  slideMargin: { margin: "0 10px", padding: "10px 0" },
  sliderImg: {
    position: "relative",
    zIndex: "-1",
  },
  tooltip: {
    fontSize: "15px",
  },
  checvIcon: {
    height:"25px",
    width:"20px",
    backgroundColor: "#383941",
    justifyContent:"center",
    alignItems:"center",
    border: "5px solid #383941",
    borderRadius: "5px",
    marginRight:"13px",
    marginLeft:"13px",

  },
  checvWrap:{
    width: "45px"
  }
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
  const [carousel, setCarousel] = useState();
  const [displayChev, setDisplayChev] = useState({left: false, right:true})
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
    dispatch(getLeaguesLiveGames(id));
  };
  const leagueUpcomingData = (id) => {
    dispatch(getLeaguesUpcomingGames(id));
  };

  const getLeaguesData = async () => {
    try {
      const endPoint = "leaguesAPI";
      const res = await getLeagues(endPoint);
      if (res) {
        const json = await res.data;
        setLeaguesData(leagueAPIRes.data);
      } else {
        setLeaguesData(leagueAPIRes.data);
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

  const handleShift = (obj) => {
  
  };

  const isEmptyObj = (obj) => {
    return Object.keys(obj).length === 0;
  };
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
          <Grid className={classes.checvWrap} onClick={() => carousel.goToSlide(carousel.state.currentSlide - 1)} >
            {displayChev.left &&
            <svg  width="7" className={classes.checvIcon} height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.41931 8.81498L6.41931 8.10623L2.03073 4.64437C1.98769 4.60931 1.96235 4.55551 1.96235 4.49998C1.96235 4.44306 1.98769 4.39065 2.03073 4.35455L6.41931 0.893733L6.41931 0.184632C6.41931 0.113132 6.3794 0.0485731 6.31553 0.0183764C6.25167 -0.0128615 6.17566 -0.00383726 6.12082 0.0392017L0.650008 4.35524C0.606622 4.39134 0.580592 4.44375 0.580592 4.50067C0.580592 4.55621 0.606622 4.61001 0.650008 4.64506L6.12116 8.96041C6.17565 9.00484 6.25201 9.01178 6.31588 8.98054C6.3794 8.95104 6.41931 8.88579 6.41931 8.81498Z" fill="white"/>
            </svg>}
          </Grid>
          <Grid item sm={9} xs={8}>
            <Carousel
               ref={(el) => setCarousel(el)} 
              arrows={false}
              beforeChange={(nextSlide, { currentSlide, onMove }) => {

                if(nextSlide === 1){
                  setDisplayChev({...displayChev, left: true})
                } else if(nextSlide === 0){
                  setDisplayChev({...displayChev, left: false})
                } else if(nextSlide === 4){
                  setDisplayChev({...displayChev, right: false})
                } else if(nextSlide === 3){
                  setDisplayChev({...displayChev, right: true})
                }
              }}
              responsive={responsive}
              style={{ display: "flex" }}
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
          <Grid className={classes.checvWrap} onClick={() => carousel.goToSlide(carousel.state.currentSlide + 1)} >
            {displayChev.right && 

            <svg className={classes.checvIcon} width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.580689 0.185019L0.580689 0.893772L4.96927 4.35563C5.01231 4.39069 5.03765 4.44449 5.03765 4.50002C5.03765 4.55694 5.01231 4.60935 4.96927 4.64545L0.580688 8.10627L0.580688 8.81537C0.580688 8.88687 0.620604 8.95143 0.684468 8.98162C0.748332 9.01286 0.824345 9.00384 0.879184 8.9608L6.34999 4.64475C6.39338 4.60866 6.41941 4.55625 6.41941 4.49933C6.41941 4.44379 6.39338 4.38999 6.34999 4.35494L0.878838 0.039588C0.824345 -0.00483989 0.747985 -0.0117817 0.684121 0.0194569C0.620604 0.0489588 0.580689 0.114212 0.580689 0.185019Z" fill="white"/>
            </svg>}
          </Grid>
        </Grid>
        <Slider {...settings}>
          {cardData.map((values) => {
            return (
              <>
                <Box className={classes.slideMargin}>
                  <Tooltip
                    title={
                      <Typography className={classes.tooltip}>
                        Coming Soon
                      </Typography>
                    }
                    arrow
                  >
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
                  </Tooltip>
                </Box>
              </>
            );
          })}
        </Slider>
      </Box>
      {/* <ModalContext.Provider value={{ showModal, toggleModal }}>   // Coming Soon!
        <div>
          <Modal canShow={showModal} updateModalState={toggleModal}>
            <CosafaCupGame type="cPopular" values={leaguesData.data} />
          </Modal>
        </div>
      </ModalContext.Provider> */}
    </Box>
  );
}

export default NftSlider;
