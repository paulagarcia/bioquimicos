import { container, title, grayColor, primaryColor } from "../../styles/general-styles.js";

const HomePageStyles = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
    '@media (orientation: landscape)':{
      paddingTop: '3rem',
    },
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#fafafa",
    textDecoration: "none",
    fontSize: "3rem",
    fontWeight: '500',
    fontFamily: 'Righteous, cursive',
    '@media (min-width: 600px)':{
      fontSize: '5rem'
    },
    '@media  (max-width: 850px) and (orientation: landscape)':{
      fontSize: '3rem'
    },
  },
  bienvenido: {
    fontSize: "1.313rem",
    margin: "10px auto 0",
    fontFamily: 'Meddon, cursive;',
    color: primaryColor,
    display: 'inline-block',
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: primaryColor,
    fontSize: '1.5rem',
    padding: '6px 25px 6px 15px'
  },
  main: {
    background: "#fafafa",
    position: "relative",
    zIndex: "3",
  },
  brandContainer:{
    '@media (min-width: 600px)':{
      paddingLeft: '30px'
    },
  }
};

export default HomePageStyles;
