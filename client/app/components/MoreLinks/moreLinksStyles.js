import { title, defaultFont, boxShadow, primaryLight, transition } from "../../styles/general-styles.js";

const moreLinksStyles = {
  section: {
    ...boxShadow,
    padding: "0px",
    textAlign: "center",
    position: "relative",
    bottom: "-50px",
    background: '#b1f2e2',
    borderRadius: '3px',
    '@media (min-width: 600px)':{
      padding: "20px 30px 20px",
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
      '@media (min-width: 960px)':{
        display: 'block',
      }
    }
  },
  description: {
    textAlign: 'right',
    '& > span': {
    ...defaultFont,
    color: '#444',
    '@media (min-width: 600px)':{
        fontSize: '1.1rem',
    }
    }
  },
  listCenter: {
    '& > li': {
      textAlign: 'center',
      lineHeight: '1.5rem',
    }
  },
  icon:{
    background: '#5aaea369',
    borderRadius: '50%',
    padding: '5px',
    color: '#316c64',
    ...transition,
    '&:hover':{
      transform: 'scale(1.2)'
    }

  }
};

export default moreLinksStyles;
