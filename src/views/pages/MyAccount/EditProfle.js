import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  IconButton,
  Button,
  makeStyles,
  TextField,
  Paper,
  FormHelperText,
} from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Form, Formik } from "formik";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import { FaFacebook, FaDiscord } from "react-icons/fa";
import InstagramIcon from "@material-ui/icons/Instagram";
import { FiTwitter } from "react-icons/fi";
import { MdOutlineContentCopy ,MdCheck} from "react-icons/md";
import ProfileCard from "src/component/ProfileCard";
import { FiEdit2 } from "react-icons/fi";
import * as yep from "yup";
import { useHistory } from "react-router-dom";
import SnackbarService from "src/services/SnackbarService";


const useStyles = makeStyles((theme) => ({
  editAcountBox: {
    marginTop: "20px",
    position: "relative",
    padding: "50px 15px",
    "& .editprofileImg": {
      position: "relative",
      margin: "0px",
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      border: "4px solid #515151",
      "& img": {
        minWidth: "100%",
        minHeight: "100%",
      },
      "& .EditIconButton": {
        position: "absolute",
        bottom: "0px",
        right: "0px",
        background: theme.palette.background.secondDeault,
      },
    },
    "& .editrightBorder": {
      borderRight: "1px solid #413F3F",
      marginTop: "30px",
      display: "flex",
      alignItems: "center",

      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        border: "none",
      },
    },

    "& .editinfoBox": {
      alignItems: "center",
      padding: "6px 0px",
      display: "flex",
      [theme.breakpoints.only("xs")]: {
        padding: "10px 0px 0px",
      },

      "& input::placeholder": {
        fontSize: "13px",
      },
      "& svg": {
        color: "#787878 !important",
        marginRight: "12px",
        fontSize: "20px",
        [theme.breakpoints.down("md")]: {
          marginRight: "5px",
          fontSize: "17px",
        },
      },
      "& h5": {
        fontSize: "15px",
        color: theme.palette.text.primary,
        fontWeight: "600",
        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
        },
      },
    },
    "& .editaccountText": {
      color: theme.palette.text.primary,
      fontSize: "19px !important",
      fontWeight: "700",
      marginBottom: "40px",
      color: "#39AED0",
      [theme.breakpoints.down("md")]: {
        marginBottom: "10px",
      },
    },
    "& .editspaceBox": {
      paddingLeft: "30px !important",
      [theme.breakpoints.only("xs")]: {
        paddingLeft: "10px !important",
      },
    },
    "& .updatabtn": {
      color: "#fff",
      background:
        "linear-gradient(105.19deg, #8DE6D1 2.66%, #2FB3FC 81.96%), linear-gradient(105.19deg, #8DE6D1 2.66%, #2FB3FC 81.96%)",
    },
    "& p": {
      whiteSpace: "nowrap",
      width: "100px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
}));


const EditProfileInfo = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [value, setValue] = useState();

  const [address, setAddress] = useState([]);
  const [copySuccess, setCopySuccess] = useState(false);
  const [snackBarContent, setSnackBarContent] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");
  const [snackBarStatus, setSnackBarStatus] = useState("");
  
  const snackBar = (msg, status) => {
    setSnackBarMsg(msg);
    setSnackBarStatus(status);
    setSnackBarContent(true);
    setTimeout(() => {
      setSnackBarContent(false);
    }, 2000);
  };

useEffect(() => {
    const address = localStorage.getItem("userAddress");
    setAddress(address);
  }, []);

  const formatWalletAddress = (text) => {
    return text.slice(0, 15) + "...";
  };
  const copyAddress = () => {
    setCopySuccess(true);
    snackBar("Copied Wallet Address", "info");
  };

  const formInitialSchema = {
    name: "",
    email: "",
    phno:"",
    facebook: "",
    instagram:"",
  };
  const handleFormSubmit = async (values) => {
    setIsLoading(true);

    console.log("values-----", values);
    try {
      const res = {
        name: values.name,
        email: values.email,
        phno: values.phno,
        facebook: values.facebook,
        instagram: values.instagram,
        twitter: values.twitter,
        discord: values.discord,
      };
      history.push("/my-account")

      if (res.data.status === 200) {
        setIsLoading(false);
      } else if (res.data.status === 205) {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const facebookURLRegEx = "(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?" ;

  const formValidationSchema = yep.object().shape({
    name: yep
      .string()
      .required("User Name is required")
      .matches("^[a-zA-Z ]{2,40}([a-zA-Z]{2,40})+$", "Invalid User Name")
      .min(2,"Username should be ")
      .max(16,"Max limit 16"),

    email: yep
      .string()
      .email("You have entered an invalid email address. Please try again")
      .required("Please enter valid email.")
      .matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", "Please enter valid Email id"),

      phno: yep
      .string()
      .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
      .min(10)
      .required('A phone number is required'),

      facebook: yep
      .string()
      .matches(/^((?:https?\:\/\/|www\.)(?:facebook)(?:.com\/)(?:[-a-z0-9]+\.)*[-a-z0-9]+.*?)$/i, 'Invalid Facebook URL'),

      instagram: yep
      .string()
      .matches(/(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/igm, 'Invalid Instagram URL'),

      twitter: yep
      .string()
      .matches(/http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/, 'Invalid Twitter URL'),

      discord: yep
      .string()
      .matches(/(https:\/\/)?(www\.)?(((discord(app)?)?\.com\/invite)|((discord(app)?)?\.gg))\/(?<invite>.+)/gm, 'Invalid Discord URL'),

      
  });
 

  return (
    <>
          {snackBarContent && (
        <SnackbarService msg={snackBarMsg} status={snackBarStatus} />
      )}
    <Box>
      <Box className="textField1">
        <ProfileCard />
        <Paper className={classes.editAcountBox} mt={2} elevation={2}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              className="editrightBorder"
            >
              <Box className="editprofileImg" align="center">
                <img
                  src="images/profile_img.png"
                  width="85%"
                  alt="Profile Pic "
                />

                <IconButton className="EditIconButton">
                  <FiEdit2 style={{ fontSize: "15px" }} />
                </IconButton>
              </Box>
              <Box mt={1} className="flexCenter">
                <Typography variant="body2">
                  0xc51s5aa1ed5wdsa.....&nbsp;
                  {/* <BiCopy style={{ color: "#FA9131", cursor: "pointer" }} /> */}
                </Typography>
                {/* <MdOutlineContentCopy
                  style={{
                    color: "rgb(250, 145, 49)",
                    cursor: "pointer",
                    fontSize: "18px",
                    marginLeft: "5px",
                  }}
                  
                /> */}


<CopyToClipboard text={address}>
                    {!copySuccess ? (
                      <IconButton onClick={() => copyAddress()}>
                        <MdOutlineContentCopy
                          style={{
                            color: "rgb(250, 145, 49)",
                            cursor: "pointer",
                            fontSize: "18px",
                          }}
                        />
                      </IconButton>
                    ) : (
                      <span className="animate__animated animate__fadeIn">
                        <IconButton>
                          <MdCheck
                            style={{
                              color: "rgb(250, 145, 49)",
                              cursor: "pointer",
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                      </span>
                    )}
                  </CopyToClipboard>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={8} lg={8} className="editspaceBox">
              <Typography className="editaccountText" variant="h6">
                My Account
              </Typography>

              <Formik
                initialValues={formInitialSchema}
                initialStatus={{
                  success: false,
                  successMsg: "",
                }}
                validationSchema={formValidationSchema}
                onSubmit={(values) => handleFormSubmit(values)}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  touched,
                  values,
                  setFieldValue,
                }) => (
                  <Form>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item xs={12} sm={12} lg={4} md={5}>
                        <Box className="editinfoBox">
                          <PersonIcon />
                          <Typography variant="h5">
                            User Name &nbsp;:
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} lg={8} md={7}>
                        <TextField
                        
                          variant="outlined"
                          color="primary"
                          placeholder="Enter name"
                          fullWidth
                          name="name"
                          value={values.name}
                          error={Boolean(touched.name && errors.name)}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          inputProps={{ maxLength: 40 }}
                        />
                        <FormHelperText
                          error
                          style={{
                            fontSize: "12px",
                            width: "100%",
                            marginLeft: "1rem",
                          }}
                        >
                          {touched.name && errors.name}
                        </FormHelperText>
                      </Grid>
                      <Grid item xs={12} sm={12} lg={4} md={5}>
                        <Box className="editinfoBox">
                          <EmailIcon />
                          <Typography variant="h5">
                            Email Address &nbsp;:
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} lg={8} md={7}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          placeholder="Enter email"
                          name="email"
                          value={values.email}
                          error={Boolean(touched.email && errors.email)}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          inputProps={{ maxLength: 40 }}

                        />
                        <FormHelperText
                          error
                          style={{
                            fontSize: "12px",
                            width: "100%",
                            marginLeft: "1rem",
                          }}
                        >
                          {touched.email && errors.email}
                        </FormHelperText>
                      </Grid>
                      <Grid item xs={12} sm={12} lg={4} md={5}>
                        <Box className="editinfoBox">
                          <PhoneIphoneIcon />
                          <Typography variant="h5">
                            Phone Number &nbsp;:
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} lg={8} md={7}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          placeholder="Enter phone number"
                          name="phno"
                          value={values.phno}
                          error={Boolean(touched.phno && errors.phno)}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          inputProps={{ maxLength: 40 }}
                          type="number"
                        />
                        <FormHelperText
                          error
                          style={{
                            fontSize: "12px",
                            width: "100%",
                            marginLeft: "1rem",
                          }}
                        >
                          {touched.phno && errors.phno}
                        </FormHelperText>
                      </Grid>
                      <Grid item xs={12} sm={12} lg={4} md={5}>
                        <Box className="editinfoBox">
                          <FaFacebook />
                          <Typography variant="h5">
                            Facebook URL &nbsp;:     
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} lg={8} md={7}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          placeholder="Enter facebook url"
                          name="facebook"
                          value={values.facebook}
                          error={Boolean(touched.facebook && errors.facebook)}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          inputProps={{ maxLength: 40 }}

                        />
                                <FormHelperText
                          error
                          style={{
                            fontSize: "12px",
                            width: "100%",
                            marginLeft: "1rem",
                          }}
                        >
                          {touched.facebook && errors.facebook}
                        </FormHelperText>
                      </Grid>
                      <Grid item xs={12} sm={12} lg={4} md={5}>
                        <Box className="editinfoBox">
                          <InstagramIcon />
                          <Typography variant="h5">
                            Instagram &nbsp;:
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} lg={8} md={7}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          placeholder="Enter instagram url"
                          name="instagram"
                          value={values.instagram}
                          error={Boolean(touched.instagram && errors.instagram)}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          inputProps={{ maxLength: 40 }}

                        />
                                <FormHelperText
                          error
                          style={{
                            fontSize: "12px",
                            width: "100%",
                            marginLeft: "1rem",
                          }}
                        >
                          {touched.instagram && errors.instagram}
                        </FormHelperText>
                      </Grid>
                      <Grid item xs={12} sm={12} lg={4} md={5}>
                        <Box className="editinfoBox">
                          <FiTwitter />
                          <Typography variant="h5">
                            Twitter URL &nbsp;:
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} lg={8} md={7}>
                        <TextField
                          variant="outlined"
                          placeholder="Enter twitter url"
                          fullWidth
                          name="twitter"
                          value={values.twitter}
                          error={Boolean(touched.twitter && errors.twitter)}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          inputProps={{ maxLength: 40 }}

                        />
                                <FormHelperText
                          error
                          style={{
                            fontSize: "12px",
                            width: "100%",
                            marginLeft: "1rem",
                          }}
                        >
                          {touched.twitter && errors.twitter}
                        </FormHelperText>
                      </Grid>
                      <Grid item xs={12} sm={12} lg={4} md={5}>
                        <Box className="editinfoBox">
                          <FaDiscord />
                          <Typography variant="h5">Discord &nbsp;:</Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={12} lg={8} md={7}>
                        <TextField
                          variant="outlined"
                          placeholder="Enter discord url"
                          fullWidth
                          name="discord"
                          value={values.discord}
                          error={Boolean(touched.discord && errors.discord)}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          inputProps={{ maxLength: 40 }}

                        />
                                <FormHelperText
                          error
                          style={{
                            fontSize: "12px",
                            width: "100%",
                            marginLeft: "1rem",
                          }}
                        >
                          {touched.discord && errors.discord}
                        </FormHelperText>
                  
                      </Grid>
                      <Grid item xs={12} sm={12} lg={4} md={5}></Grid>
                      <Grid item xs={12} sm={12} md={7}>
                        <Box align="center" mt={3}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className="updatabtn"
                            type="submit"
                            // onClick={() => history.push("/my-account")}                         
                             >
                            Update
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
    </>
  );
};

export default EditProfileInfo;
