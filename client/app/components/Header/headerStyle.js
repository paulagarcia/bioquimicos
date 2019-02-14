import {
  container,
  defaultFont,
  primaryColor,
  transition,
  boxShadow,
  drawerWidth
} from "../../styles/general-styles.js";

const headerStyle = {
  logo:{
    maxWidth: '100px',
    margin: '-10px',
    '@media (min-width: 600px)':{
      maxWidth: '138px',
      margin: '-10px 30px -10px',
    }
  },
  appBar: {
    ...boxShadow,
    display: "flex",
    border: "0",
    borderRadius: "0px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    backgroundColor: "#fff",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset"
  },
  absolute: {
    position: "absolute",
    zIndex: "1100"
  },
  fixed: {
    position: "fixed",
    zIndex: "1100"
  },
  container: {
    ...container,
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  },
  flex: {
    flex: 1
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent"
    }
  },
  appResponsive: {
    margin: "20px 10px"
  },
  primary: {
    backgroundColor: primaryColor,
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)"
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: "#FFFFFF"
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    backgroundColor: "#fff !important",
    ...boxShadow,
  },
  drawerPaper: {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    ...boxShadow,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    maxHeight: "1200px",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition,
    width: drawerWidth,
    '@media (min-width: 600px)':{
      width: '460',
    }
  }
};

export default headerStyle;
