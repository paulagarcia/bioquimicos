import { title, defaultFont, boxShadow, primaryLight, grayColor, grayDark } from "../../styles/general-styles.js";

const WhySectionStyles = {
  section: {
    ...boxShadow,

    textAlign: "center",
    position: "relative",
    top: "-60px",
    background: primaryLight,
    borderRadius: '3px',
    '@media (min-width: 960px)':{
      padding: "70px 20px",
    },
  },
  title: {
    ...title,
    marginBottom: "2rem",
    minHeight: "32px",
    textDecoration: "none",
    textTransform: "uppercase",
    color: '#444',
    fontSize: '3rem',
    fontWeight: '300',
    '@media (min-width: 960px)':{
      paddingRight: '3rem',
    },
    "& > span": {
      fontFamily: 'Meddon, cursive',
      textTransform: 'lowercase',
      fontSize: '1.7rem',
      display: 'block',
    }
  },
  description: {
    '& > span': {
    ...defaultFont,
    color: '#444',

    fontSize: '1.1rem',
    }
  },
  listCenter: {
    '& > li': {
      textAlign: 'center',
      lineHeight: '1.5rem',
    }
  }
};

export default WhySectionStyles;
