import {
  defaultFont,
  yellowColor2,
  primaryDark,
  boxShadow
} from "../../styles/general-styles.js";

const loginStyles = {
  loggedHeader:{
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 25px',
    background: '#444',
    margin: '6px -15px 3rem',
    alignItems: 'center',
    '@media (min-width: 600px)':{
      padding: '15px 25px',
    }
  },
  welcome:{
    fontFamily: 'raleway',
    fontSize: '1.3rem',
    margin: '0',
    color: '#f2f2f2',
    '@media (min-width: 600px)':{
      fontSize: '2rem',
    },
    '& > span':{
      fontWeight: '600',
      textTransform: 'uppercase',
    }
  },
  logoutButton:{
    color: '#444444',
    background: '#69c1cc',
  },
  formContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    maxWidth: '500px',
    margin: '5rem auto 2rem',
    background: '#fff',
    padding: '3rem 2rem 2rem',
    borderRadius: '4px',
    position: 'relative',
    ...boxShadow,
    '@media (min-width: 600px)':{
      padding: '3rem 5rem 2rem',
    },
  },
  loginButton:{
    margin: '2.5rem 0px 1rem',
    background: '#69c1cc',
    padding: '16px',
    color: '#fff',
    fontSize: '1.2rem',
    fontFamily: 'oswald',
    '&:hover':{
      background: yellowColor2
    }
  },
  cssLabel: {
    fontFamily: 'Raleway',
    fontWeight: '500',
    fontSize: '1.1rem',
    '&$cssFocused': {
      color: yellowColor2,
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: yellowColor2,
    },
  },
  personContainer:{
    position: 'absolute',
    top: '-3rem',
    left: '50%',
    transform: 'translate(-50%)',
    background: '#fff',
    padding: '1rem',
    borderRadius: '50%',
    '& > svg':{
      fill: '#69c1cc',
      width: '3em',
      height: '3em',
      borderRadius: '50%',
      border: '2px solid #69c1cc',
      padding: '10px',
    }

  }

}
export default loginStyles;
