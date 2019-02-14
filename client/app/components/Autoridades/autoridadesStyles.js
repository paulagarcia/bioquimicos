import {
  sectionContainer,
  sectionTitle,
  defaultFont,
  primaryColor,
  primaryDark,
  boxShadow,
} from  "../../styles/general-styles.js";

const autoridadesStyles = {
  sectionContainer:{
    ...sectionContainer,
    position: 'relative',
  },
  directivosContainer:{
    ...boxShadow,
    background: '#fff',
    background: '#5ac0b2',
    borderRadius: '3px',
    padding: '20px',
    margin: '45px auto',
    position: 'relative',
    '@media (min-width: 1057px)':{
        width: '75%',
        marginRight: '4rem',
        padding: '20px 0 40px 60px',
    },
  },
  sectionTitle:{
    ...sectionTitle,
    '@media (min-width: 1057px)':{
      position: 'absolute',
      transform: 'rotate(-90deg)',
      top: '10rem',
      left: '-63px',
    }
  },
  tituloDirectivos:{
    fontFamily: 'oswald',
    margin: '0 0 1rem',
    fontWeight: '300',
    color: '#a9dce2',
    color: '#eeeeee',
    fontSize: '3rem',
    top: '0px',
    right: '2rem',
    lineHeight: '1',
    textTransform: 'uppercase',
    textAlign: 'right',
    '@media (min-width: 960px)':{
      fontSize: '4rem',
      bottom: '0px',
      right: '3rem',
      margin: '3rem 0',
      position: 'absolute',
      top: 'inherit',
    },

  },
  person:{
    fontFamily: 'oswald',
    width: '100%',
    '@media (min-width: 768px)':{
      width: '49%'
    },
    '@media (min-width: 960px)':{
      width: 'initial'
    },
    '& > p:first-child':{
      fontSize: '1.5rem',
      color: primaryDark,
      color: '#fff',
      fontWeight: '400',
      marginBottom: '0px',
      marginTop: '0',
      '@media (min-width: 960px)':{
        marginTop: '2rem',
      }
    }
  },
  puesto:{
    marginTop: '0',
    color: '#f5f5f5',
    fontSize:'1.4rem',
    fontWeight: '300',
    marginBottom: '6px',
  },
  tituloRevisora:{
    color: '#bae2e0',
    color: '#eee',
    fontSize: '3rem',
    fontFamily: 'oswald',
    fontWeight: '300',
    lineHeight: '1',
    textTransform: 'uppercase',
    textAlign: 'right',
    margin: '10px 0px 30px',
    top: '-94px',
    right: '15px',
    '@media (min-width: 960px)':{
      fontSize: '3.5rem',
    }
  },
  tituloHonor:{
    color: '#d6e4ea',
    color: '#eee',
    fontSize: '3rem',
    fontFamily: 'oswald',
    fontWeight: '300',
    lineHeight: '1',
    textTransform: 'uppercase',
    textAlign: 'left',
    margin: '10px 0px 30px',
    top: '-96px',
    '@media (min-width: 960px)':{
      fontSize: '3.5rem',
    }
  },
  columContainer:{
    ...boxShadow,
    background: '#fff',
    borderRadius: '3px',
    position: 'relative',
    background: '#444',
    padding: '20px',
    marginBottom: '30px',
    '@media (min-width: 600px)':{
        maxWidth: '49%',
        padding: '40px 25px 40px',
        marginBottom: '0',
    },

  }
}

export default autoridadesStyles;
