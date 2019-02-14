import {
  container,
  title,
  subtitleExtra,
  sectionTitle,
  subtitle,
  primaryColor,
  primaryLight,
  yellowColor2
} from "../../styles/general-styles.js";

const galeriaStyles = {
  container: {
    ...container,
    textAlign: 'center'
  },
  galeryContainer:{

    margin: '0 auto',
    '@media (min-width: 960px)':{
        width: '85%',
    }
  },
  main: {
    background: "#fafafa",
    position: "relative",
    zIndex: "3",
    paddingBottom: '80px'
  },
  imagen:{
    width: 'calc((100% / 2) - 5px)',
    heigth: 'auto',
    marginBottom: '5px',
    cursor: 'pointer',
    borderRadius: '3px',
    '@media (min-width: 960px)':{
      width: 'calc((100% / 3) - 5px)',
    }
  },
  titulo:{
    ...title,
    color: '#444',
    fontWeight: '400',
    textTransform: 'uppercase',
    fontSize: '2.5rem',
    marginBottom: '0',
  },
  imagenesContainer:{
    padding: '40px 0',
    '@media (min-width: 960px)':{
      paddingBottom: '100px'
    }
  },
  sectionTitle:{
    ...sectionTitle,
  },
  subtitle:{
    ...subtitle,
    marginBottom: '5.5rem',
    '& > a':{
      textDecoration:'none',
    },
  },
  subtitleExtra:{
    ...subtitleExtra,
    color: primaryColor,
    lineHeight: '2.3rem',
    borderBottom: '2px solid'
  },
  fecha:{
    ...subtitleExtra,
    marginBottom: '4rem',
    marginTop: '0',
    color: yellowColor2
  },
  homeFotosContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '85%',
    transform: 'translateZ(0)',
  },
  homefoto:{
    '& > div':{
      borderRadius: '3px'
    }
  },
  titleBar: {
    background: 'rgba(0, 0, 0, 0.5)',
      '& > div:nth-child(1)':{
        color: '#f5f5f5',
        fontFamily: 'raleway',
        textTransform: 'uppercase',
      },
      '& > div >div  > span':{
        color: primaryLight,
        textTransform: 'capitalize'
      },
  },
  icon: {
    color: primaryColor,
    padding: '6px',
    marginRight: '5px',
    '& > span > svg':{
      fontSize: '32px',
    },
    '&:hover':{
        background: 'rgba(250, 250, 250, 0.28)',
    },
  },
}

export default galeriaStyles;
