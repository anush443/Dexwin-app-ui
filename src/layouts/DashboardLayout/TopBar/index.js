import React, { useState, useEffect, useContext, createContext } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Grid,
  Box,
  Typography,
  MenuItem,
  Select,
  Dialog,
  Container,
  Avatar,
  Hidden,
  Tooltip,
} from "@material-ui/core";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { BsBellFill, BsPower } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import web from "web3";
import { connectWalletAddress } from "../../../services/connectWallet";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import NavLink from "../NavLink";
import GloballySearchArea from "src/component/GloballySearchArea";
import UserProfileComponent from "src/component/UserProfileComponent";
import Logo from "src/component/Logo";
import SettingsContext from "src/context/SettingsContext";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationModal from "src/views/pages/Notification/NotificationModal";
import MuiAlert from "@material-ui/lab/Alert";
import { AuthContext } from "src/context/Auth";
import SnackbarService from "src/services/SnackbarService";
import Web3 from "web3";
import { Biconomy } from "@biconomy/mexa";
import { useDispatch, useSelector } from "react-redux";
import { getBalanceAction } from "../../../redux/actions/balanceAction";
import { updateBalance } from "../../../services/updateBalance";
import {connectWalletAdd} from "../../../services/ApiCall"
// import detectEthereumProvider from "@metamask/detect-provider";
// import SwapModal from "src/component/SwapModal";
// import { FaRegMoon } from "react-icons/fa";
// import { FiSun } from "react-icons/fi";

export const submitContext = createContext();

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  dropdownStyle: {
    borderRadius: "20px",
    top: "35px !important",
  },

  drawerPaper: {
    width: drawerWidth,

    "& a": {
      textDecoration: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    margin: "7px 0",
    paddingTop: "10px",
    "& button": {
      borderRadius: "50px",
    },
    "& .notification": {
      color: theme.palette.text.noticetext,
    },
  },
  maindrawer: {
    height: "100%",
    background: "#0c0731",
    width: "260px",
  },
  logoDrawer: {
    paddingLeft: "10px",
    width: "200px",
    marginBottom: "15px",
  },
  drawerContainer: {
    padding: "20px 0px ",
    height: "100%",

    width: "260px",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  drawericon: {
    position: "absolute",
    top: "6px",
    right: "-10px",
    fontSize: "25px",
  },
  logoImg: {
    width: "75px",
    margin: " 14px 15px 11px 0px",
    objectFit: "contain",
    "@media (max-width: 500px)": {
      margin: " 11px 1px 3px 0px",
      width: "52px",
    },
  },
  containerHeight: {
    height: "100%",
  },
  mainHeader: {
    justifyContent: "space-between",
    padding: "0px",
    minHeight: "60px !important",
  },
  menuul: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    "& li": {
      listStyle: "none",
      marginLeft: "10px",
      [theme.breakpoints.down("lg")]: {},
    },
    "& button": {
      height: "41px",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  },
  menuSocial: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    "& li": { listStyle: "none", marginLeft: "10px" },
    "& .buttontopBox": {
      boxShadow: theme.palette.background.topbarButtonShadow,
      borderRadius: "50px",
      width: "100%",
      maxWidth: "151px",
      background: theme.palette.background.selectBox,
      padding: "8px",
      "& svg": {
        fontSize: "15px",
        color: "#73d98b",
      },
    },
    "&  .selectbox3": {
      width: "100%",
      backgroundColor: "#e0e0e0",
      height: "41px",
      borderRadius: "50px",
      background: theme.palette.background.selectBox,
      boxShadow: theme.palette.background.topbarButtonShadow,

      "& .MuiSelect-iconOutlined": {
        right: "0 !important",
      },

      "& .MuiOutlinedInput-notchedOutline": {
        boxShadow:
          "inset -10px -10px 20px rgb(255 255 255 / 24%), inset -20px -1px 15px 6px rgb(0 0 0 / 51%) !important",
      },
      "& .selectBox": {
        display: "flex",
        alignItems: "center",
        "& h5": {
          fontSize: "14px",
          marginLeft: "7px",
          fontWeight: "700",
        },
        "& img": {
          width: "22px",
        },
      },
    },
  },
  betBuilderClass: {
    "& button": {
      whiteSpace: "pre",
      [theme.breakpoints.down("md")]: {
        fontSize: "13px",
      },
    },
  },
  modalButtonBox: {
    "& button": {
      padding: "12px 0 !important",
      "&:hover": {
        border: "1px solid #3399AA",
      },
    },
  },
  Topbar: {
    backgroundColor: "transparent",
  },
  houseCut: {
    color: theme.palette.text.houseCut,
    textShadow: theme.palette.background.houseshadow,
    fontSize: "13px",
  },
  whiteButton: {
    color: "#2D2D2D",
    height: "50px",
    fontSize: "13px",
    padding: "8px 0px",
    background:
      "linear-gradient(101.06deg, #8DE6D1 16.32%, #71FEA3 91.67%), linear-gradient(180deg, #222222 0%, rgba(34, 34, 34, 0) 100%)",
    fontWeight: "700",
  },
  btn: {
    background:
      "linear-gradient(113.53deg, #2AC6F1 2.39%, #4681EF 54.27%, #5D3EFF 99.22%)",
    boxShadow:
      "-10px -10px 20px rgb(255 255 255 / 26%), 10px 10px 40px rgb(0 0 0 / 60%)",
    borderRadius: "100px",
    width: "261px",
    height: "50px",
    color: "#FFFFFF",
    font: "normal 700 22px/33px Poppins",
    marginRight: "0px !important",
    marginTop: "0px !important",
  },
  tooltip: {
    fontSize: "15px",
  },
  temporaryDiv: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem 0px",
  },
  heading: {
    fontFamily: "K2D",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#FFFFFF",
  },
}));

export default function Header({ buttonClick }) {
  const dispatch = useDispatch();
  const [accountAddress, setAccountAddress] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [provider, SetProvider] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [snackBarContent, setSnackBarContent] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");
  const [snackBarStatus, setSnackBarStatus] = useState("");
  const [chainID, setChainID] = useState("80001");
  const [metaTxEnabled, setMetaTxEnabled] = useState(true);
  const [transactionHash, setTransactionHash] = useState("");

  async function getBalance() {
    const res = await updateBalance();
    dispatch(getBalanceAction(res));
  }
  var balance = useSelector((state) => state?.getAllReducer?.balance);
  const auth = useContext(AuthContext);
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
    Moralis,
  } = useMoralis();

  const snackBar = (msg, status) => {
    setSnackBarMsg(msg);
    setSnackBarStatus(status);
    setSnackBarContent(true);
    setTimeout(() => {
      setSnackBarContent(false);
    }, 2000);
  };
  let web3;

  const Contract = {
    address: "0x3Bfff6a44BbEd2956601aC33000bfa745565CaD6",
    abi: [
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "userAddress",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "functionSignature",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "sigR",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "sigS",
            type: "bytes32",
          },
          {
            internalType: "uint8",
            name: "sigV",
            type: "uint8",
          },
        ],
        name: "executeMetaTransaction",
        outputs: [
          {
            internalType: "bytes",
            name: "",
            type: "bytes",
          },
        ],
        payable: true,
        stateMutability: "payable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "string",
            name: "newQuote",
            type: "string",
          },
        ],
        name: "setQuote",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "a",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transferer20",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "userAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address payable",
            name: "relayerAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "bytes",
            name: "functionSignature",
            type: "bytes",
          },
        ],
        name: "MetaTransactionExecuted",
        type: "event",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        name: "getNonce",
        outputs: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "getQuote",
        outputs: [
          {
            internalType: "string",
            name: "currentQuote",
            type: "string",
          },
          {
            internalType: "address",
            name: "currentOwner",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "quote",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
  };
  const domainType = [
    { name: "name", type: "string" },
    { name: "version", type: "string" },
    { name: "chainId", type: "uint256" },
    { name: "verifyingContract", type: "address" },
  ];

  const metaTransactionType = [
    { name: "nonce", type: "uint256" },
    { name: "from", type: "address" },
    { name: "functionSignature", type: "bytes" },
  ];

  let domainData = {
    name: "TestContract",
    version: "1",
    verifyingContract: Contract.address,
  };

  const onSubmit = async (event) => {
    if (Contract) {
      setTransactionHash("");
      if (metaTxEnabled) {
        let userAddress = selectedAddress;
        let nonce = await Contract.methods.getNonce(userAddress).call();
        let functionSignature = Contract.methods
          .transferer20("0x3Bfff6a44BbEd2956601aC33000bfa745565CaD6", "1")
          .encodeABI();

        let message = {};
        message.nonce = parseInt(nonce);
        message.from = userAddress;
        message.functionSignature = functionSignature;

        const dataToSign = JSON.stringify({
          types: {
            EIP712Domain: domainType,
            MetaTransaction: metaTransactionType,
          },
          domain: domainData,
          primaryType: "MetaTransaction",
          message: message,
        });

        web3.currentProvider.send(
          {
            jsonrpc: "2.0",
            id: 999999999999,
            method: "eth_signTypedData_v4",
            params: [userAddress, dataToSign],
          },
          function (error, response) {
            if (error || (response && response.error)) {
              showErrorMessage("Could not get user signature");
            } else if (response && response.result) {
              let { r, s, v } = getSignatureParameters(response.result);

              sendSignedTransaction(userAddress, functionSignature, r, s, v);
            }
          }
        );
      } else {
        Contract.methods
          .placebet("0", "2", "156", "0", "moneyline", "123")
          .send({ from: selectedAddress })
          .on("transactionHash", function (hash) {
            showInfoMessage(`Transaction sent to blockchain with hash ${hash}`);
          })
          .once("confirmation", function (confirmationNumber, receipt) {
            setTransactionHash(receipt.transactionHash);
            showSuccessMessage("Transaction confirmed");
          });
      }
    } else {
      showErrorMessage("Please enter the quote");
    }
  };

  const getSignatureParameters = (signature) => {
    if (!web3.utils.isHexStrict(signature)) {
      throw new Error(
        'Given value "'.concat(signature, '" is not a valid hex string.')
      );
    }
    var r = signature.slice(0, 66);
    var s = "0x".concat(signature.slice(66, 130));
    var v = "0x".concat(signature.slice(130, 132));
    v = web3.utils.hexToNumber(v);
    if (![27, 28].includes(v)) v += 27;
    return {
      r: r,
      s: s,
      v: v,
    };
  };

  const showErrorMessage = (message) => {
    NotificationManager.error(message, "Error", 5000);
  };

  const showSuccessMessage = (message) => {
    NotificationManager.success(message, "Message", 3000);
  };

  const showInfoMessage = (message) => {
    NotificationManager.info(message, "Info", 3000);
  };

  const sendSignedTransaction = async (userAddress, functionData, r, s, v) => {
    if (web3 && Contract) {
      try {
        let gasLimit = await Contract.methods
          .executeMetaTransaction(userAddress, functionData, r, s, v)
          .estimateGas({ from: userAddress });
        let gasPrice = await web3.eth.getGasPrice();

        let tx = Contract.methods
          .executeMetaTransaction(userAddress, functionData, r, s, v)
          .send({
            from: userAddress,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
          });

        tx.on("transactionHash", function (hash) {
          showInfoMessage(`Transaction sent by relayer with hash ${hash}`);
        }).once("confirmation", function (confirmationNumber, receipt) {
          setTransactionHash(receipt.transactionHash);
          showSuccessMessage("Transaction confirmed on chain");
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    checkConnect();
    getBalance();
  }, []);
  // const login = async (path) => {

  // const connectWalletAddress = async (address) => {
  //   const query = new Moralis.Query("User");
  //   query.equalTo("userAddress", address[0]);
  //   const results = await query.find({ useMasterKey: true });
  //   if (results.length == 0) {
  //     const UserCreate = Moralis.Object.extend("User");
  //     const User = new UserCreate();
  //     User.set("ethAddress", address[0]);
  //     User.set("username", address[0]);
  //     User.set("password", address[0]);
  //     User.save().then(
  //       () => {
  //         console.log("Connect Wallet Sucessfully");
  //       },
  //       (error) => {
  //         console.log(error, "error");
  //       }
  //     );
  //   }
  // };
  const login = async (path) => {
    if (window.ethereum) {
      //check if Metamask is installed
      try {
        const address = await window.ethereum.enable(); //connect Metamask
        const referralID = path?.href?.split("?")

          if(address) {
            if(referralID?.[1]?.length){
              connectWalletAddress(address[0], referralID[1].slice(11,referralID[1].length))
            } else {
              connectWalletAddress(address[0],'')
            }
          }

        // connectWalletAddress(address);
        const obj = {
          connectedStatus: true,
          status: "",
          address: address,
        };
        // biconomy
        const provider = window["ethereum"];
        await provider.enable();
        if (provider.networkVersion == "80001") {
          domainData.chainId = 80001;
          const biconomy = new Biconomy(provider, {
            apiKey: "O3-IjZClP.ce1ab5be-6f1d-4355-a450-f6a553818f12", //"MublK0H-b.864389b3-e421-4ddb-b56b-e5a1bca3e109"
            debug: true,
          });
          web3 = new Web3(biconomy);

          biconomy
            .onEvent(biconomy.READY, () => {
              // Initialize your dapp here like getting user accounts etc
              Contract = new web3.eth.Contract(Contract.abi, Contract.address);
              //  setSelectedAddress(provider.address);

              provider.on("accountsChanged", function (accounts) {
                setSelectedAddress(accounts[0]);
                snackBar("selected address is", address);
              });
            })
            .onEvent(biconomy.ERROR, (error, message) => {
              // Handle error while initializing mexa
            });
        } else {
          snackBar("Please change the network in metamask to Mumbai Testnet");
        }
        //biconomy

        await localStorage.setItem("userStatus", true);
        await localStorage.setItem("userAddress", address);
        setAccountAddress(address);
        const chainID1 = await window.ethereum.request({
          method: "eth_chainId",
        });
        // const provider = await detectEthereumProvider();
        // SetProvider()
        await localStorage.setItem("chainID", chainID1);

        setChainID(chainID1);
        if (auth.isLogin()) {
          console.log(address[0],"meraaaa")
          connectWalletAdd(address[0])
          snackBar("Wallet Connected Successfully.", "success");
          setTimeout(() => {
          window.location.reload();
          }, 1000);

        }
        return obj;
      } catch (error) {
        snackBar(
          "🦊 Connect to Metamask using the button on the top right." + error,
          "danger"
        );
      }
    } else {
      snackBar(
        "🦊 You must install Metamask into your browser: https://metamask.io/download.html",
        "danger"
      );
    }
  };

  const clearAccount = () => {
    setAccountAddress("0x0");
    setIsConnected(false);
  };

  const logOut = async () => {
    await logout();
    await localStorage.setItem("userStatus", false);
    await localStorage.setItem("userAddress", null);
    await localStorage.setItem("cahinID", null);
    window.ethereum.on("disconnect", clearAccount);

    snackBar("Wallet Disconnected.", "success");
    setTimeout(() => {
      window.location.replace("/");
    }, 1000);
  };

  const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  const checkConnect = async () => {
    if (auth.isLogin()) {
      setIsConnected(true);
      localStorage.setItem("userStatus", true);
    } else {
      setIsConnected(false);
      localStorage.setItem("userStatus", false);
    }
  };

  const {
    toolbar,
    Topbar,
    drawerPaper,
    drawerContainer,
    drawericon,
    logoDrawer,
    containerHeight,
    houseCut,
    betBuilderClass,
    mainHeader,
    menuSocial,
    modalButtonBox,
  } = useStyles();
  const classes = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;
  const themeSeeting = useContext(SettingsContext);
  const history = useHistory();
  const [showModal, updateShowModal] = React.useState(false);
  const toggleModal = () => updateShowModal((state) => !state);
  const [openSwap, setOpenSwap] = useState(false);

  const changeTheme = (type) => {
    themeSeeting.saveSettings({
      theme: type,
    });
  };

  const handleCloseSwap = () => {
    setOpenSwap(false);
  };
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1220
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const [select1, setSelect1] = useState("DWIN");
  const handleChange1 = (event) => {
    setSelect1(event.target.value);
  };
  const [openUserProfile, setOpenUserProfile] = React.useState(false);
  const [openUsenotification, setOpenUsenotification] = React.useState(false);

  const handleClickOpen = () => {
    setOpenUserProfile(true);
  };
  const handleClose = () => {
    setOpenUserProfile(false);
  };
  const handleClickOpen1 = () => {
    setOpenUsenotification(true);
  };
  const handleClose1 = () => {
    setOpenUsenotification(false);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  var data = {
    onSubmit: onSubmit,
    sachin: "sachin",
  };
  const displayDesktop = (props) => {
    return (
      <>
        <submitContext.Provider value={data}>
          {props?.children}
        </submitContext.Provider>
        <Container maxWidth="fixed" className="p-0">
          <div className="App-header">
            {isConnected ? (
              <div>
                <Toolbar className={toolbar}>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={7}>
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid item xs={5}>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item md={2}>
                              {productLogo}
                            </Grid>
                            <Grid item xs={10}>
                              <Tooltip
                                title={
                                  <Typography className={classes.tooltip}>
                                    Coming Soon
                                  </Typography>
                                }
                                arrow
                              >
                                <GloballySearchArea type="TopHeaderSearchArea" />
                              </Tooltip>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={7}>
                          <Grid container spacing={1} alignItems="center">
                            <Grid item xs={6} md={4}>
                              <Tooltip
                                title={
                                  <Typography className={classes.tooltip}>
                                    Coming Soon
                                  </Typography>
                                }
                                arrow
                              >
                                <Button
                                  variant="contained"
                                  color="primary"
                                  style={{
                                    boxShadow:
                                      "rgb(87 82 82 / 50%) -10px -10px 20px, rgb(48 47 47 / 50%) 10px 10px 20px",
                                    height: "50px",
                                  }}
                                  fullWidth
                                  // onClick={() => history.push("/LeaderBoard")}
                                >
                                  LEADERBOARD
                                </Button>
                              </Tooltip>
                            </Grid>
                            <Grid item xs={6} md={4}>
                              <Box className={betBuilderClass}>
                                <Button
                                  variant="contained"
                                  style={{
                                    boxShadow:
                                      "rgb(87 82 82 / 50%) -10px -10px 20px, rgb(48 47 47 / 50%) 10px 10px 20px",
                                    height: "50px",
                                  }}
                                  color="primary"
                                  fullWidth
                                  // onClick={() => history.push("/bet-builder")}  Coming Soon
                                >
                                  <a
                                    href="https://dexwin.bet/basketball/nba/odds"
                                    target="_blank"
                                  >
                                    COMPARE ODDS
                                  </a>
                                </Button>
                              </Box>
                            </Grid>
                            <Grid item xs={6} md={4}>
                              <Box className={betBuilderClass}>
                                <Button
                                  variant="contained"
                                  style={{
                                    boxShadow:
                                      "rgb(87 82 82 / 50%) -10px -10px 20px, rgb(48 47 47 / 50%) 10px 10px 20px",
                                    height: "50px",
                                  }}
                                  color="primary"
                                  fullWidth
                                  onClick={() => setOpenSwap(true)}
                                  // onClick={() => history.push("/bet-builder")}
                                >
                                  <img
                                    src="images/wallet_icon.png"
                                    alt="image"
                                  />
                                  &nbsp;&nbsp;&nbsp;BRIDGE ASSETS
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={5}>
                      <Box className={menuSocial}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item md={3}>
                            <Button
                              variant="contained"
                              fullWidth
                              onClick={() => history.push("/wallet")}
                              className={classes.whiteButton}
                            >
                              DEPOSIT
                            </Button>
                          </Grid>
                          <Grid item md={3}>
                            <Select
                              className="selectbox3"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="weather"
                              value={select1}
                              onChange={handleChange1}
                              MenuProps={{
                                classes: { paper: classes.dropdownStyle },
                              }}
                            >
                              <MenuItem value={"DWIN"}>
                                <Box
                                  className="selectBox"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    src="images/dexwinCoin.png"
                                    alt="image"
                                    style={{ width: "22px" }}
                                  />
                                  <Typography
                                    variant="h5"
                                    style={{
                                      fontSize: "14px",
                                      marginLeft: "7px",
                                    }}
                                  >
                                    DWIN
                                  </Typography>
                                </Box>
                              </MenuItem>
                              <MenuItem value={"DWIN"}>
                                <Box
                                  className="selectBox"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    src="images/dexwinCoin.png"
                                    alt="image"
                                    style={{ width: "22px" }}
                                  />
                                  <Typography
                                    variant="h5"
                                    style={{
                                      fontSize: "14px",
                                      marginLeft: "7px",
                                    }}
                                  >
                                    DWIN
                                  </Typography>
                                </Box>
                              </MenuItem>
                              <MenuItem value={"DWIN"}>
                                <Box
                                  className="selectBox"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    src="images/dexwinCoin.png"
                                    alt="image"
                                    style={{ width: "22px" }}
                                  />
                                  <Typography
                                    variant="h5"
                                    style={{
                                      fontSize: "14px",
                                      marginLeft: "7px",
                                    }}
                                  >
                                    DWIN
                                  </Typography>
                                </Box>
                              </MenuItem>
                            </Select>
                          </Grid>
                          <Grid item md={3}>
                            <Button
                              variant="contained"
                              color="primary"
                              fullWidth
                              onClick={() => history.push("/wallet")}
                              className="buttontopBox"
                            >
                              <BsFillPlusCircleFill />
                              &nbsp;&nbsp;
                              <img src="images/token.svg" /> &nbsp;
                              {balance ? balance : "00.00"}
                            </Button>
                          </Grid>
                          <Grid item md={3}>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-around",
                              }}
                            >
                              <Tooltip title="Notification" arrow>
                                <IconButton
                                  variant="contained"
                                  color="primary"
                                  style={{ background: "transparent" }}
                                >
                                  <BsBellFill onClick={handleClickOpen1} />
                                </IconButton>
                              </Tooltip>
                              &nbsp;&nbsp;&nbsp;
                              <Tooltip title="LogOut" arrow>
                                <IconButton
                                  variant="contained"
                                  color="primary"
                                  style={{ background: "transparent" }}
                                >
                                  <BsPower onClick={logOut} />
                                </IconButton>
                              </Tooltip>
                              &nbsp;&nbsp;&nbsp;
                              <Tooltip title="Profile" arrow>
                                <Avatar
                                  alt="Remy Sharp"
                                  src="/images/user.png"
                                  onClick={handleClickOpen}
                                  style={{ cursor: "pointer" }}
                                />
                              </Tooltip>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Toolbar>
              </div>
            ) : (
              <img src="" className="App-logo" alt="" />
            )}
            {isConnected ? (
              <p
                className="info"
                style={{ marginLeft: "93%", marginTop: "-1.5%" }}
              >
                {" "}
              </p>
            ) : (
              <div>
                <Toolbar
                  className={toolbar}
                  disabled={true}
                  style={{ paddingTop: "30px" }}
                >
                  <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                    style={{ marginTop: "-2%" }}
                  >
                    <Grid item xs={7}>
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid item xs={5}>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item md={2}>
                              {productLogo}
                            </Grid>
                            <Grid item xs={10}>
                              <GloballySearchArea type="TopHeaderSearchArea" />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={7}>
                          <Grid container spacing={1} alignItems="center">
                            <Grid item xs={6} md={4}>
                              <Tooltip
                                title={
                                  <Typography className={classes.tooltip}>
                                    Coming Soon
                                  </Typography>
                                }
                                arrow
                              >
                                <Button
                                  variant="contained"
                                  color="primary"
                                  style={{
                                    boxShadow:
                                      "rgb(87 82 82 / 50%) -10px -10px 20px, rgb(48 47 47 / 50%) 10px 10px 20px",
                                    height: "50px",
                                  }}
                                  fullWidth
                                  // onClick={() => history.push("/LeaderBoard")}  Coming Soon
                                >
                                  LEADERBOARD
                                </Button>
                              </Tooltip>
                            </Grid>
                            <Grid item xs={6} md={4}>
                              <Box className={betBuilderClass}>
                                <Button
                                  variant="contained"
                                  style={{
                                    boxShadow:
                                      "rgb(87 82 82 / 50%) -10px -10px 20px, rgb(48 47 47 / 50%) 10px 10px 20px",
                                    height: "50px",
                                  }}
                                  color="primary"
                                  fullWidth
                                  // onClick={() => history.push("/bet-builder")}   Coming Soon
                                >
                                  <a
                                    href="https://dexwin.bet/basketball/nba/odds"
                                    target="_blank"
                                  >
                                    COMPARE ODDS
                                  </a>{" "}
                                </Button>
                              </Box>
                            </Grid>
                            <Grid item xs={6} md={4}>
                              <Box className={betBuilderClass}>
                                <Button
                                  variant="contained"
                                  style={{
                                    boxShadow:
                                      "rgb(87 82 82 / 50%) -10px -10px 20px, rgb(48 47 47 / 50%) 10px 10px 20px",
                                    height: "50px",
                                  }}
                                  color="primary"
                                  fullWidth
                                  onClick={() => setOpenSwap(true)}
                                  // onClick={() => history.push("/bet-builder")}    Coming Soon
                                >
                                  <img
                                    src="images/wallet_icon.png"
                                    alt="image"
                                  />
                                  &nbsp;&nbsp;&nbsp;BRIDGE ASSETS
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={5}>
                      <Box className={menuSocial}>
                        <Grid container spacing={2} alignItems="center">
                          <Box width="100%" textAlign="right">
                            <Button
                              onClick={() => login(window.location)}
                              className={classes.btn}
                            >
                              CONNECT WALLET
                            </Button>
                          </Box>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Toolbar>
              </div>
            )}
          </div>

          {openUserProfile && (
            <Dialog
              fullWidth
              maxWidth="xs"
              open={openUserProfile}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <UserProfileComponent />
            </Dialog>
          )}

          <Dialog
            fullWidth
            maxWidth="xs"
            open={openUsenotification}
            keepMounted
            onClose={handleClose1}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <NotificationModal />
          </Dialog>
        </Container>
        <Dialog
          open={openSwap}
          onClose={() => setOpenSwap(false)}
          fullWidth
          width="sm"
          style={{ borderRadius: "10px !important" }}
        >
          <div>
            <div className={classes.temporaryDiv}>
              <h1 className={classes.heading}>Only on Main Net</h1>
            </div>
          </div>
          {/* <SwapModal handleCloseSwap={handleCloseSwap} /> // Coming Soon */}
        </Dialog>
      </>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={mainHeader}>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <img className={logoDrawer} src="images/logotype02.png" alt="" />
            <Box style={{ width: "100%", padding: "0px 10px" }}>
              <GloballySearchArea />
            </Box>
            <UserProfileComponent />
            <Box className={menuSocial} px={2}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Tooltip
                    title={
                      <Typography className={classes.tooltip}>
                        Coming Soon
                      </Typography>
                    }
                    arrow
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        boxShadow:
                          "rgb(87 82 82 / 50%) -10px -10px 20px, rgb(48 47 47 / 50%) 10px 10px 20px",
                        height: "50px",
                      }}
                      fullWidth
                      // onClick={() => history.push("/LeaderBoard")}                  Coming Soon
                    >
                      LEADERBOARD
                    </Button>
                  </Tooltip>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => history.push("/bet-builder")}
                  >
                    Bet Builder
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" className={houseCut}>
                    HOUSE CUT : 3%
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => history.push("/wallet")}
                    className="buttontopBox"
                  >
                    <BsFillPlusCircleFill />
                    &nbsp;&nbsp;Deposit
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Select
                    className="selectbox3"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="weather"
                    value={select1}
                    onChange={handleChange1}
                  >
                    <MenuItem value={"BTC"}>
                      <Box
                        className="selectBox"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img
                          src="images/btc.png"
                          alt="image"
                          style={{ width: "22px" }}
                        />
                        <Typography
                          variant="h5"
                          style={{
                            fontSize: "14px",
                            marginLeft: "7px",
                          }}
                        >
                          DWIN
                        </Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={"BNB"}>
                      <Box
                        className="selectBox"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img
                          src="images/bnb.png"
                          alt="image"
                          style={{ width: "22px" }}
                        />
                        <Typography
                          variant="h5"
                          style={{
                            fontSize: "14px",
                            marginLeft: "7px",
                          }}
                        >
                          DWIN
                        </Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={"ETH"}>
                      <Box
                        className="selectBox"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img
                          src="images/eth.png"
                          alt="image"
                          style={{ width: "22px" }}
                        />
                        <Typography
                          variant="h5"
                          style={{
                            fontSize: "14px",
                            marginLeft: "7px",
                          }}
                        >
                          DWIN
                        </Typography>
                      </Box>
                    </MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" fullWidth>
                    <FaDollarSign />
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Drawer>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              style={{ justifyContent: "end" }}
            >
              <CloseIcon style={{ fontSize: "23px" }} />
            </IconButton>
            <Box className={drawerPaper}>
              <NavLink />
            </Box>
          </Drawer>
        </Hidden>
        <Box className="iconLeftSide">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <HiMenuAlt2 />
          </IconButton>
        </Box>

        <div>{productLogo}</div>

        <Grid container>
          <Grid item xs={10}></Grid>
          <Grid item xs={2}>
            <Box className="iconLeftSide">
              <IconButton
                className={drawericon}
                {...{
                  edge: "start",
                  color: "inherit",
                  "aria-label": "menu",
                  "aria-haspopup": "true",
                  onClick: handleDrawerOpen,
                }}
              >
                <MenuIcon
                  width="60px"
                  height="60px"
                  style={{ fontSize: "30px" }}
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const productLogo = (
    <Box>
      <Link to="/">
        <Logo className="logoImg" alt="image" />
      </Link>
    </Box>
  );

  return (
    <>
      {snackBarContent && (
        <SnackbarService msg={snackBarMsg} status={snackBarStatus} />
      )}
      <AppBar className={Topbar} elevation={0}>
        <Container maxWidth="fixed" className={containerHeight}>
          {mobileView ? displayMobile() : displayDesktop()}
        </Container>
      </AppBar>
      {/* <Box className="themeButton">
        <IconButton
          variant="contained"
          color="primary"
          onClick={() => {
            changeTheme("LIGHT");
          }}                                   Coming Soon
        >
          <FiSun />
        </IconButton>
        <IconButton
          variant="contained"
          color="primary"
          onClick={() => {
            changeTheme("DARK");
          }}
        >
          <FaRegMoon />
        </IconButton>
      </Box> */}
    </>
  );
}
