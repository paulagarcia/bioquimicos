import {
  defaultFont,
  yellowColor2,
  boxShadow,
  grayLight,
  sectionTitle,
  subtitle,
  subtitleExtra,
  container
} from "../../styles/general-styles.js";

const NoticiasStyles = {
  noticiasSection:{
    width: '100%',
    margin: '0 auto',
    paddingTop: '60px',
    paddingBottom: '60px',
  },
  noticiaContainer:{
    ...boxShadow,
    backgroundColor: '#fff',
    width: 'calc(100% - 35px)',
    padding: '0 10px',
    marginBottom: '40px',
    borderRadius: '3px',
    '@media (min-width: 600px)':{
        width: 'calc((100% / 2) - 35px)',
    },
    '@media (min-width: 960px)':{
        width: 'calc((100% / 3) - 35px)',
    }
  },
  fechaContainer:{
    display: 'flex',
    height: '100px',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    marginBottom: '10px',
    borderBottom: '1px solid #eee',
    paddingBottom: '5px',
    '& > span.dia':{
      color: yellowColor2,
      fontSize: '4.5rem',
      fontWeight: '400',
      fontFamily: 'Oswald'
    },
    '& > span.anio, & > span.mes':{
      paddingTop: '22px',
      paddingLeft: '10px',
      fontSize: '25px',
      textTransform: 'capitalize',
      fontFamily: 'Oswald',
      fontWeight: '300',
      color: grayLight,
    },
    '& > span.anio':{
      paddingTop: '0',
      fontSize: '20px',
      marginTop: '-5px'
    },
  },
  fotoContainer:{
    '& > img':{
      width: '100%',
      height: 'auto'
    },
  },
  titleContainer:{
    padding: '0 10px',
    marginBottom: '30px',
    '& > a':{
      textDecoration: 'none',
      '& > h2':{
        color: '#212121',
        fontSize: '1.2rem',
        fontFamily: 'raleway',
        fontWeight: '600',
        lineHeight: '1.8rem',
      },
    },
  },
  buttonContainer:{
    textAlign: 'right',
    backgroundColor: '#f5f5f5',
    margin: '0 -10px',
    padding: '15px 5%',
    borderTop: '1px solid #eaeaea',
  },
  buttonMas: {
    background:yellowColor2,
    color: '#fff',
    padding: '8px 32px',
    fontFamily: 'Oswald',
    fontSize: '1.1rem',
    fontWeight: '300',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    '&:hover, &:focus, &:visited':{
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      background: yellowColor2,
    },
  },
  description:{
    color: '#666',
    fontFamily: 'raleway',
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
    color: '#00BCD4',
    lineHeight: '2.3rem',
    marginLeft: '10px',
    borderBottom: '2px solid'
  },
  container: {
      zIndex: "12",
      color: "#FFFFFF",
      ...container
  },
  main: {
    background: "#fafafa",
    position: "relative",
    zIndex: "3"
  },

}

export default NoticiasStyles;
