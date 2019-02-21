
const drawerWidth = 320;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const conatinerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  maxWidth: "100%",
  margin: "0 auto"
};

const sectionContainer={
    maxWidth: '100%',
    margin: '0 auto',
    padding: '40px 0',
}
const container = {
  ...conatinerFluid,
  "@media (min-width: 1200px)": {
    width: "calc(100vw - 5%)",
    maxWidth: "1920px"
  }
};

const boxShadow = {
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
};


const defaultFont = {
  fontFamily: '"Raleway"',
  fontWeight: "300",
  color: 'primaryText',
  fontSize: '1rem'
};

const primaryColor = "#00BCD4";
const primaryLight = "#B2EBF2";
const primaryDark = "#0097A7";
const primaryText = "#FFFFFF";
const yellowColor = "#FFC107"
const grayColor = "#757575";
const grayDark = "#212121";
const grayLight = "#BDBDBD";
const yellowColor2 = "#0096a7";

const title = {
  color: primaryColor,
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "600",
  fontFamily: '"Oswald"'
};

const sectionTitle = {
  color: '#444',
  fontSize: '3rem',
  fontWeight: '300',
  fontFamily: '"Oswald"',
  textTransform: 'uppercase',
  textAlign: 'center',
  marginBottom: '16px',
  '@media (min-width: 600px)':{
    fontSize: '4rem',
  }
};

const subtitle = {
  ...defaultFont,
  textAlign: 'center',
  fontSize: '1.1rem',
  marginTop: '0',
  marginBottom: '60px',
  color: '#444',
};

const subtitleExtra = {
  fontFamily: '"Meddon"',
  color: yellowColor,
  fontSize: '1.3rem',
};


export {
  //variables
  drawerWidth,
  transition,
  container,
  conatinerFluid,
  boxShadow,
  defaultFont,
  primaryColor,
  primaryLight,
  primaryDark,
  primaryText,
  yellowColor,
  grayColor,
  grayDark,
  grayLight,
  title,
  sectionContainer,
  sectionTitle,
  subtitle,
  subtitleExtra,
  yellowColor2
};
