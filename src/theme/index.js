import _ from "lodash";
import { colors, createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { softShadows, strongShadows } from "./shadows";
import typography from "./typography";

const baseOptions = {
  direction: "ltr",
  typography,
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: "50px",
      },
      adornedEnd: {
        background: "none !important",
      },
    },
    MuiTableCell: {
      root: {
        borderTop: "1px solid rgb(81 81 81 / 39%)",
        borderBottom: "none",
      },
    },
    MuiSwitch: {
      colorSecondary: {
        "& .Mui-checked": {
          color: "#FA9131 !important",
        },
      },
    },
    MuiFilledInput: {
      underline: {
        "&::after": {
          left: "0",
          right: "0",
          bottom: "0",
          content: '"\\00a0"',
          position: "absolute",
          transition:
            "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          borderBottom: "none !important",
          pointerEvents: "none",
        },
        "&::before": {
          left: "0",
          right: "0",
          bottom: "0",
          content: '"\\00a0"',
          position: "absolute",
          transition:
            "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          borderBottom: "none !important",
          pointerEvents: "none",
        },
      },
    },
    MuiAccordionDetails: {
      root: {
        display: "block !important",
      },
    },
    MuiBackdrop: {
      root: { backdropFilter: "blur(4px)" },
    },
    MuiPaginationItem: {
      rounded: {
        "& .Mui-selected": {
          backgroundColor: "green !important",
        },
      },
      page: {
        "& .Mui-selected": {
          backgroundColor: "green !important",
        },
      },
    },
    MuiSvgIcon: {
      fontSizeLarge: {
        fontSize: "3.1875rem",
      },
    },
    MuiDialog: {
      paperWidthSm: {
        padding: "0px !important",
        borderRadius: "10px",
      },
       paperWidthXs: {
        maxWidth: "653px",
        borderRadius: "30px",
        borderRadius: "10px",
        position: "absolute",
        right: "0",
        top: "47px",
      },
    },
    MuiSelect: {
      icon: {
        top: "calc(50% - 12px)",
        right: "0",
        position: "absolute",
        pointerEvents: "none",
        marginRight: "10px",
      },
      iconOutlined: {
        right: "10px",
      },
      select: {
        "&:focus": {
          backgroundColor: "none",
        },
      },
      icon: {
        color: "white ",
      },
      root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        paddingLeft: "15px",
        borderRadius: "18px",
      },
      outlined: {
        minWidth: "130px",

        borderRadius: "4px",
      },
      MuiListItemGutters :{
        paddingLeft: "49px",
        paddingRight: "50px"
    },
    },
    MuiFormLabel: {
      root: {
        fontSize: "14px",
        fontWeight: 500,
        color: "white",
      },
    },
    MuiPickersModal: {
      dialogRoot: {
        background: "#101113",
      },
    },
    MuiPickersDatePickerRoot: {
      toolbarLandscape: {
        background: "black",
      },
      toolbar: {
        background: "black",
      },
    },

    MuiInput: {
      root: {
        // width: "100%",
      },
      // root: {
      //   borderRadius: "10px",
      //   height: "45px",
      // },
      underline: {
        "&:hover": {
          borderBottom: "none",
        },
        "&::before": {
          borderBottom: "none",
          display: "none",
        },
        "&::after": {
          borderBottom: "none",
        },
      },
    },
    MuiContainer: {
      root: {
        "@media(min-width:600px)": {
          paddingLeft: "0px",
          paddingRight: "0px",
        },
      },
    },
    MuiInputBase: {
      root: {
        cursor: "text",
        // display: "inline-flex",
        position: "relative",
        fontSize: "12px",
        boxSizing: "border-box",
        alignItems: "center",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: "500",
        lineHeight: "1.1876em",
        letterSpacing: "0.00938em",
        backgroundColor: "transparent !important",
      },
      input: {
        // height: "30px !important",
        padding: "6px 12px 7px",
        fontSize: "13px !important",
      },
      inputMultiline: {
        height: "auto !important",
      },
    },
    // MuiFormGroup: {
    //   root: {
    //     display: "flex",
    //     flexWrap: "inherit",
    //     flexDirection: "row",
    //     justifyContent: "space-around",
    //   },
    // },
    MuiFormControlLabel: {
      root: {
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        marginLeft: "1px",
        marginRight: "16px",
        verticalAlign: "middle",
      },
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: "0px",
        marginBottom: "0px",
      },
      marginDense: {
        marginTop: "0px",
      },
    },
    MuiIconButton: {
      colorPrimary: { color: "#B0B0B0" },
      edgeEnd: { marginRight: "0px" },
      root: {
        flex: "0 0 auto",
        padding: "8px",
        overflow: "visible",
        fontSize: "1.5rem",
        textAlign: "center",
        transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        borderRadius: "50%",
        "&:hover": {
          backgroundColor: "none",
        },
      },
    },
    MuiButton: {
      contained: {
        borderRadius: "10px",
        color: "#fff",
        // "&:hover": {
        //   background: "none !important",
        // },
      },
      containedSizeLarge: {
        height: "50px",
        minWidth: "150px",
        fontSize: "14px",
      },
    },
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: "hidden",
      },
    },
    MuiList: {
      padding: {
        paddingTop: "none",
        paddingBottom: "none",
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "rgba(0,0,0,0.075)",
      },
    },
    
  },
};

const themesOptions = [
  // {
  //   name: "LIGHT",
  //   overrides: {
  //     MuiSelect: {
  //       icon: {
  //         top: "calc(50% - 12px)",
  //         color: "#A2B1CA",
  //         right: "0",
  //         position: "absolute",
  //         pointerEvents: "none",
  //         marginRight: "10px",
  //       },
  //     },
  //     MuiAvatar: {
  //       colorDefault: {
  //         borderRadius: 25,
  //         background:
  //           "radial-gradient(64.29% 64.29% at 30% 25.71%, #fffbfb 0%, #d7d3d3 100%)",
  //         border: "2px solid #dfdfe1",
  //         transition: "all .25s ease",
  //         color: "#A2B1CA",
  //         fontSize: 12,
  //         textShadow: "0px 0px 2px rgba(0,0,0, 1)",
  //         boxShadow:
  //           "-1px -1px 15px 0px rgb(0 0 0 / 30%), -7px -7px 15px 0px rgb(255 255 255), inset 0px 0px 0px 0px rgb(0 0 0 / 0%), inset 0px 0px 0px 0px rgb(255 255 255 / 0%)",
  //       },
  //     },
  //     MuiPaper: {
  //       root: {
  //         backgroundColor: "#e6e5e8",
  //       },
  //       elevation2: {
  //         boxShadow: "18px 5px 20px rgb(77 73 73 / 40%), 8px 10px 20px rgb(0 0 0 / 25%)",
  //         borderRadius: 10,
  //         overflow: "hidden",
  //         backgroundColor: "#F5F5F5",
  //       },
  //     },
  //     MuiFormLabel: { root: { color: "#000" } },
  //     MuiFilledInput: {
  //       underline: {
  //         "&::before": {
  //           left: "0",
  //           right: "0",
  //           bottom: "0",
  //           content: '"\\00a0"',
  //           position: "absolute",
  //           transition:
  //             "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  //           borderBottom: "none !important",
  //           pointerEvents: "none",
  //         },
  //       },
  //       root: { backgroundColor: " #e5e5e5", color: "#000" },
  //       inputAdornedStart: { height: "15px !important" },
  //     },
  //     MuiTypography: {
  //       colorPrimary: { color: "#4E525A" },
  //     },
  //     MuiOutlinedInput: {
  //       inputMultiline: {
  //         padding: "1px !important",
  //       },
  //       root: {
  //         "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
  //           boxShadow:
  //             "0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #FFFFFF",
  //         },
  //       },
  //       notchedOutline: {
  //         boxShadow:
  //           "inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #FFFFFF",
  //       },
  //       input: {
  //         height: "40px",
  //         borderRadius: "10px",
  //         padding: "0px 0px !important",
  //         "&:-webkit-autofill": {
  //           "-webkit-background-clip": "text !important",
  //           // transitionDelay: "9999s",
  //           "caret-color": "transparent",
  //           "-webkit-box-shadow": "0 0 0 100px transparent inset",
  //           "-webkit-text-fill-color": "#000",
  //         },
  //         "&:-internal-autofill-selected": {
  //           color: "#fff",
  //         },
  //       },
  //     },
  //     MuiButton: {
  //       containedPrimary: {
  //         backgroundColor: "#EAE9F0",
  //         boxShadow: "-6px -5px 14px #ffffff, 10px 10px 20px #d2d1db",
  //         borderRadius: "100px",
  //         height: "40px",
  //         fontWeight: " 800",
  //         fontSize: "13px",
  //         "&:hover": {
  //           boxShadow: "none !important",
  //           backgroundColor: "#EAE9F0",
  //         },
  //       },
  //     },
  //     MuiInput: {
  //       root: {
  //         borderRadius: "50px",
  //         boxShadow:
  //           "inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #FFFFFF",
  //         "&.Mui-focused": {
  //           boxShadow:
  //             "0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #FFFFFF",
  //         },
  //       },
  //     },
  //     MuiInputBase: {
  //       root: {
  //         backgroundColor: " #f4f2f2",
  //         color: "#000",
  //         padding: "5px 12px",
  //       },
  //       input: {
  //         fontSize: "13px !important",
  //         fontWeight: "400",
  //         "&::placeholder": {
  //           opacity: 1,
  //           color: "#a1a1a1",
  //         },
  //       },
  //     },
  //     MuiButton: {
  //       contained: {
  //         borderRadius: "100px",
  //         color: "#fff",
  //       },
  //       "&.label":{
  //        display: "flex",
  //        alignItems: "center",
  //        justifyContent: "center",
  //       },
  //       containedSizeLarge: {
  //         height: "50px",
  //         minWidth: "150px",
  //         fontSize: "14px",
  //       },
  //       containedPrimary: {
  //         backgroundColor: "#F5F5F5",
  //         boxShadow: "-10px -10px 10px #ffffff, 10px 10px 20px #d2d1db",
  //         borderRadius: "100px",
  //         height: "40px",
  //         color: "#4E525A",
  //         fontWeight: " 800",
  //         fontSize: "13px",
  //         "&:hover": {
  //           // boxShadow: "8px 8px 20px #a9a8b7, -8px -8px 20px #fff, inset -8px -8px 20px #fff, inset 8px 8px 20px #a9a8b7",
  //           backgroundColor: "#EAE9F0",
  //         },
  //       },
  //       containedSecondary: {
  //         backgroundColor: "#F5F5F5",
  //         boxShadow:
  //           "0px -3px 10px rgb(255 255 255 / 5%), 10px 10px 20px rgb(0 0 0 / 58%)",
  //         borderRadius: "100px",
  //         height: "40px",
  //         color: "#4E525A",
  //         fontWeight: " 800",
  //         fontSize: "13px",
  //         "&:hover": {
  //           boxShadow:
  //             "8px 8px 20px #a9a8b7, -8px -8px 20px #fff, inset -8px -8px 20px #fff, inset 8px 8px 20px #a9a8b7",
  //           backgroundColor: "#EAE9F0",
  //         },
  //       },
  //       outlinedPrimary: {
  //         background:
  //           "linear-gradient(115.29deg, #F54F4F 15.07%, rgba(182, 17, 107, 0.91) 104.4%)",
  //         boxShadow:
  //           "0px 0px 0px rgb(255 255 255 / 37%), 10px 10px 20px rgb(0 0 0 / 49%)",
  //         borderRadius: "22px",
  //         fontWeight: "bold",
  //         color: "#FFFFFF",
  //         fontSize: "18px",
  //         width: "100%",
  //       },
  //       outlinedSecondary: {
  //         background:
  //           "linear-gradient(115.29deg, rgba(182, 17, 107, 0.91) 15.07%, rgba(96, 44, 181, 0.57) 104.4%)",
  //         boxShadow:
  //           "0px 0px 0px rgb(255 255 255 / 37%), 10px 10px 20px rgb(0 0 0 / 49%)",
  //         borderRadius: "22px",
  //         fontSize: "18px",
  //         border: "none !important",
  //         color: "#FFFFFF",
  //         fontWeight: "bold",
  //         width: "100%",
  //       },
  //     },
  //   },
  //   typography: {
  //     fontFamily: "'K2D', sans-serif",
  //   },
  //   palette: {
  //     type: "light",
  //     action: {
  //       active: colors.blueGrey[600],
  //     },
  //     background: {
  //       circletableBox: "#fff",
  //       tablebody: "#C4C1CE",
  //       selectBox: "#EAE9F0",
  //       searchBox: "#EAE9F0",

  //       topbarButtonShadow:
  //         "inset 10px 10px 20px #ceccda, inset -10px -10px 20px #ffffff",
  //       boxshadows: "-14px -14px 20px 0px #ffffff, 10px 10px 20px #d2d1db",
  //       perlyBox:
  //         "linear-gradient(128.77deg, rgba(233, 232, 239, 0) 24.06%, #8DE6D1 112.24%)",
  //       houseshadow: "0px 0px 7px #e02a08",
  //       heading: "#DAD8E1",
  //       default: "#F5F5F5",
  //       navAccordionicon: "#C4C1CE",
  //       Refferal: "#f5f5f5",
  //       Refferal1: "#f5f5f5",
  //       walletselect: "#ccd7e2",
  //       walletselect1: "#ccd7e2",
  //       secondDeault: "#C4C1CE",
  //       dark: "#f4f6f8",
  //       paper: "#ECECEC",
  //       subpaper: "#242526",
  //       brown: "#f5f5f5",
  //       tablehead: "F5F5F5",
  //       FormBackground: "#212226",
  //       AccordianBackground: "#EAE9F0",
  //       AccordianInBack: "#EAE9F0",
  //       formBack: "#e6e8ea",
  //       CardBack: "#e6e8ea",
  //     },
  //     CircularSlider: {
  //       background: "#C4C1CE",
  //       boxShadow:
  //         "inset -10px -10px 20px rgb(255 255 255 / 25%), inset 10px 10px 20px rgb(0 0 0 / 51%)",
  //     },
  //     searchIcon: {
  //       background:
  //         "radial-gradient(64.29% 64.29% at 30% 25.71%, #6D6D6D 0%, #f3eeee 100%)",
  //       boxShadow:
  //         "7px 7px 15px 0px rgb(0 0 0 / 30%), -1px -2px 5px 0px rgb(242 242 242), inset -1px -1px 1px 0px rgb(0 0 0 / 30%), inset 1px 1px 2px 0px rgb(162 154 154)",
  //       textShadow: "0px 0px 2px rgb(178 159 159)",
  //     },
  //     primary: {
  //       main: "#DAD8E1",
  //     },
  //     secondary: {
  //       main: "#FF9933",
  //     },
  //     button: {
  //       primary: "#DAD8E1",
  //       border: "1px solid #70D5FB",
  //       boxShadow:
  //         "0px 0px 20px rgba(0, 0, 0, 0.5), inset 0px 37px 26px #7784DA",
  //     },

  //     button: {
  //       primary: "#181818",
  //       border: "1px solid #70D5FB ",
  //       boxShadow:
  //         "0px 0px 20px rgba(0, 0, 0, 0.5), inset 0px 37px 26px #7784DA",
  //     },
  //     text: {
  //       primary: colors.blueGrey[900],
  //       white: colors.blueGrey[900],
  //       secondary: colors.blueGrey[600],
  //       noticetext: colors.blueGrey[900],
  //       houseCut: "rgb(236 70 6)",
  //     },
  //   },
  //   shadows: softShadows,
  // },
  {
    name: "DARK",
    overrides: {
      MuiSelect: {
        icon: {
          top: "calc(50% - 12px)",
          color: "#fff",
          right: "0",
          position: "absolute",
          pointerEvents: "none",
          marginRight: "10px",
        },
      },

      MuiCircularProgress: {
        colorPrimary: {
          width: "120px !important",
          height: "120px !important",
          color: "darkseagreen",
          transform: "rotate(-90deg)",
        },
      },
      MuiPaper: {
        background: "#222222",
        root: {
          backgroundColor: "#222222",
        },
        elevation2: {
          // boxShadow: "18px 5px 20px rgb(77 73 73 / 40%), 8px 10px 20px rgb(0 0 0 / 25%)",
          borderRadius: 10,
          overflow: "hidden",
        },
      },
      MuiButton: {
        contained: {
          borderRadius: "100px",
          color: "#fff",
        },
        containedSizeLarge: {
          height: "50px",
          minWidth: "150px",
          fontSize: "14px",
        },
        containedPrimary: {
          backgroundColor: "#222222",
          boxShadow:
            "-6px -7px 10px rgb(255 255 255 / 5%), 2px 2px 20px rgb(0 0 0 / 56%)",
          borderRadius: "100px",
          height: "40px",
          fontWeight: " 800",
          fontSize: "13px",
          "@media(max-width:1280px)": {
            fontSize: "11px",
          },
          "&:hover": {
            boxShadow:
              "8px 8px 20px rgb(0 0 0 / 50%), -3px -3px 20px rgb(255 255 255 / 20%), inset 4px 6px 20px rgb(0 0 0), inset -11px -4px 20px rgb(255 255 255 / 20%)",
          },
        },
        containedSecondary: {
          border: "1px solid #222222",
          borderRadius: "40px",
          color: "#ffffff",
          background:
            "linear-gradient(0deg, #222222, #222222), linear-gradient(118.84deg, #70D5FB 24.55%, #4B4E83 97.71%)",
          boxShadow:
            "0px -3px 10px rgb(255 255 255 / 14%), 10px 10px 20px rgb(0 0 0 / 45%)",
          "&:hover": {
            border: "1px solid #3399AA",
            boxShadow:
              "0px -3px 10px rgb(255 255 255 / 14%), 10px 10px 20px rgb(0 0 0 / 45%)",
          },
        },
        outlinedPrimary: {
          background:
            "linear-gradient(115.29deg, #F54F4F 15.07%, rgba(182, 17, 107, 0.91) 104.4%)",
          boxShadow:
            "0px 0px 0px rgb(255 255 255 / 37%), 10px 10px 20px rgb(0 0 0 / 49%)",
          borderRadius: "50px",
          fontWeight: "bold",
          color: "#FFFFFF",
          fontSize: "18px",
          width: "100%",
        },
        outlinedSecondary: {
          background:
            "linear-gradient(115.29deg, rgba(182, 17, 107, 0.91) 15.07%, rgba(96, 44, 181, 0.57) 104.4%)",
          boxShadow:
            "0px 0px 0px rgb(255 255 255 / 37%), 10px 10px 20px rgb(0 0 0 / 49%)",
          borderRadius: "22px",
          fontSize: "18px",
          border: "none !important",
          color: "#ffffff",
          fontWeight: "bold",
          width: "100%",
        },
      },
      MuiAvatar: {
        colorDefault: {
          borderRadius: 25,

          background:
            "radial-gradient(64.29% 64.29% at 30% 25.71%, #6D6D6D 0%, #141414 100%)",
          border: "2px solid #2E3237",

          transition: "all .25s ease",
          color: "#A2B1CA",
          fontSize: 12,
          textShadow: "0px 0px 2px rgba(0,0,0, 1)",
          boxShadow:
            "7px 7px 15px 0px rgb(0 0 0 / 30%), -1px -2px 5px 0px rgb(112 102 102), inset -1px -1px 1px 0px rgb(0 0 0 / 30%), inset 1px 1px 2px 0px rgb(162 154 154)",
        },
      },
      MuiFormLabel: { root: { color: "#fff" } },
      MuiFilledInput: {
        root: { backgroundColor: "#2B2C31", color: "#fff" },
        inputAdornedStart: { height: "15px !important" },
      },
      MuiTypography: {
        colorPrimary: { color: "#B0B0B0" },
      },
      MuiInput: {
        root: {
          borderRadius: "50px",
          boxShadow:
            "0.3rem 0.3rem 0.6rem #0f1111, -0.22rem -0.12rem 0.5rem 2px #333131",
          "&.Mui-focused": {
            boxShadow:
              "inset 0.2rem 0.2rem 1rem 1px #151717, inset -0.2rem -0.2rem 0.5rem 8px #2b2a2a",
          },
        },
      },
      MuiOutlinedInput: {
        inputMultiline: {
          padding: "1px !important",
        },
        root: {
          borderRadius: "50px",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            boxShadow:
              "0.3rem 0.3rem 0.6rem #0f1111, -0.22rem -0.12rem 0.5rem 2px #333131",
          },
        },
        notchedOutline: {
          boxShadow:
            "inset 0.2rem 0.2rem 1rem 1px #151717, inset -0.2rem -0.2rem 0.5rem 8px #2b2a2a",
        },

        input: {
          height: "40px",
          borderRadius: "10px",
          padding: "0px 0px",
          "&:-webkit-autofill": {
            "-webkit-background-clip": "text !important",
            // transitionDelay: "9999s",
            "caret-color": "transparent",
            "-webkit-box-shadow": "0 0 0 100px transparent inset",
            "-webkit-text-fill-color": "#fff",
          },
          "&:-internal-autofill-selected": {
            color: "#fff",
          },
        },
      },

      MuiInputBase: {
        root: {
          backgroundColor: " transparent !important",
          color: "#fff",
          padding: "5px 12px",
        },
        input: {
          fontSize: "13px !important",
          fontWeight: "400",
          "&::placeholder": {
            opacity: 1,
            color: "#a1a1a1",
          },
        },
        multiline: {
          backgroundColor: "#1E1E1E",
          border: "none",
          borderRadius: "10px",
        },
      },
    },
    typography: {
      fontFamily: "'K2D', sans-serif",
    },
    palette: {
      type: "dark",
      action: {
        active: "rgba(255, 255, 255, 0.54)",
        hover: "rgba(255, 255, 255, 0.04)",
        selected: "rgba(255, 255, 255, 0.08)",
        disabled: "rgba(255, 255, 255, 0.26)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        focus: "rgba(255, 255, 255, 0.12)",
      },
      CircularSlider: {
        background:
          "linear-gradient(144.35deg, #3F3F3F 12.66%, #1B1B1B 88.77%)",
      },
      searchIcon: {
        background:
          "radial-gradient(64.29% 64.29% at 30% 25.71%, #6D6D6D 0%, #141414 100%)",
        boxShadow:
          "7px 7px 15px 0px rgb(0 0 0 / 30%), -1px -2px 5px 0px rgb(112 102 102), inset -1px -1px 1px 0px rgb(0 0 0 / 30%), inset 1px 1px 2px 0px rgb(162 154 154)",
        textShadow: "0px 0px 2px rgb(0 0 0)",
      },
      background: {
        circletableBox: "#484746",
        tablebody: "#323339",
        selectBox: "#2B2C31",
        searchBox: "#3D3D3D",
        topbarButtonShadow:
          "inset -10px -10px 20px rgb(255 255 255 / 10%), inset 10px 10px 20px rgb(0 0 0 / 66%)",
        boxshadows:
          "-5px -5px 20px rgb(191 191 191 / 10%), 10px 10px 20px rgb(0 0 0 / 34%)",
        perlyBox:
          "linear-gradient(123.65deg, rgba(75, 78, 131, 0.87) 2.89%, rgba(126, 222, 216, 0.22) 110.48%)",
        default: "#222222",
        secondDeault: "#343333",
        heading: "#1A1A1A",
        navAccordionicon: "#383941",
        moneyline: "#3C3C3C",
        Refferal1:
          "linear-gradient(115.29deg, rgba(182, 17, 107, 0.91) 15.07%, rgba(96, 44, 181, 0.57) 104.4%), linear-gradient(105.19deg, #8DE6D1 2.66%, #2FB3FC 81.96%), linear-gradient(105.19deg, #8DE6D1 2.66%, #2FB3FC 81.96%)",
        Refferal:
          "linear-gradient(115.29deg, #F54F4F 15.07%, rgba(182, 17, 107, 0.91) 104.4%), linear-gradient(105.19deg, #8DE6D1 2.66%, #2FB3FC 81.96%), linear-gradient(105.19deg, #8DE6D1 2.66%, #2FB3FC 81.96%)",
        walletselect: "#6437C0",
        walletselect1: "linear-gradient(180deg, #424344 0%, #232427 100%)",
        sidebar: "#191919",
        dark: "#1c2025",
        paper:
          "linear-gradient(189.12deg, #222326 1.11%, #2B2D33 37.04%, #363637 60.99%, #252628 76.03%);",
        backgroundnotification: "#212226",
        formBack: "#212226",
        subpaper: "linear-gradient(180deg, #424344 0%, #232427 100%)",
        header: "linear-gradient(180deg, #424344 0%, #232427 100%)",
        brown: "#2B2C31",
        tablehead: "linear-gradient(180deg, #424344 0%, #232427 100%)",
        FormBackground: "#212226",
        AccordianBackground: "#343333",
        AccordianInBack: "#292A2F",
        houseshadow: "0px 0px 7px #7cddda",
      },
      primary: {
        main: "#222222",
      },
      secondary: {
        main: "#FA9131",
      },
      button: {
        primary: "linear-gradient(180deg, #424344 0%, #232427 100%)",
      },
      circularslider: {
        backgrounds: "#212226",
      },
      text: {
        primary: "#e6e5e8",
        secondary: "#adb0bb",
        cossafaText: "#fff",
        noticetext: "#fff",
        white: "#fff",
        houseCut: "#7CDDDA",
      },
    },
    shadows: strongShadows,
  },
];

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme(
    _.merge({}, baseOptions, themeOptions, { direction: config.direction })
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
