import {
  defaultFont,
  yellowColor2,
  boxShadow,
  title,
  subtitle,
  subtitleExtra,
  container,
  primaryDark,
  primaryColor,
  transition
} from "../../styles/general-styles.js";

const detalleNoticiaStyle = {
  container:{
    minHeight: 'calc(100vh - 465px)',
    padding: '1.5rem 0 1rem',
    maxWidth: '100%',
    margin: '0 auto',
    textAlign: 'center',
    '@media (min-width: 600px)':{
      padding: '3.5rem 0 4rem',
    }
  },
  fechaNota:{
    ...subtitleExtra,
    marginBottom: '4rem',
    marginTop: '0',
    color: yellowColor2,
  },
  titulo:{
    ...title,
    color: '#444',
    fontWeight: '400',
    textTransform: 'uppercase',
    fontSize: '2rem',
    marginBottom: '0',
    '@media (min-width: 600px)':{
        fontSize: '2.5rem',
    }

  },
  cuerpoContainer:{
    textAlign:'left',
    margin: '40px auto 0',
    '@media (min-width: 600px)':{
        width: '70%',
    }
  },
  cuerpoNota:{
    ...defaultFont,
    color:'#444',
    lineHeight: '2rem',
  },
  imgContainer:{
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  imgNota:{
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    borderRadius: '3px',
    maxWidth:'100%',
    border: '10px solid #fff',
    boxSizing: 'border-box',
  },
  backButton:{
    background: primaryDark,
    color: '#fff',
    float: 'left',
    ...transition,
    '&:hover':{
      background: primaryColor
    },
    '@media (max-width: 600px)':{
      display: 'none'
    }
  },
  videoContainer: {
    width: '100%',
    margin: '0 auto',
    maxWidth: '700px',
  }
}

export default detalleNoticiaStyle;
