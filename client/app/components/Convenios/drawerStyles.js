import {
  defaultFont,
  yellowColor2,
  primaryDark,
  drawerWidth,
} from "../../styles/general-styles.js";

const drawerStyles = theme => ({
  root: {
    display: 'flex',
    paddingTop: '40px'
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    top: '70px',
    marginLeft: drawerWidth,
    backgroundColor: '#69c1cc',
    boxShadow: '0 0px 2px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.14)',
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    background: 'rgba(255, 255, 255, 0.32)',
    cursor: 'pointer',
  },
  toolbarCerrar:{
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '72px',
    padding: '6px 15px',
    alignItems: 'center',
    background: '#444',
  },
  buttonCerrar:{
    cursor: 'pointer',
    background: 'rgb(105, 193, 204)',
    marginRight: '0px',
    color: '#fff',
  },
  textoLista:{
    fontFamily: 'oswald',
    fontSize: '1.2rem',
    margin: '16px 0',
    color: '#fff',
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: 'none',
    boxShadow: '2px 0px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    background: yellowColor2,
    //minWidth: '320px'
  },
  content: {
    flexGrow: 1,
    padding: '15px',
    minHeight: 'calc(100vh - 110px)',
    paddingTop: '85px',
    maxWidth: '100%',
    '@media (min-width: 1280px)':{
      paddingTop: '24px'
    }
  },
  toolbar: theme.mixins.toolbar,
  lista:{
    paddingBottom: '10px',
    paddingTop: '5px',
    '& > div':{
      paddingLeft: '20px',
      paddingRight: '0',
      '& > div > span':{
        ...defaultFont,
        color: '#fff',
        fontWeight: '500',
        fontSize: '1.1rem',
        lineHeight: '1.3',
        '&:selected':{
          color: 'blue'
        }
      }
    }
  },
  searchContainer:{
    margin: '20px 10px 5px'
  },
  cssLabel:{
    color: '#fff',
    fontFamily: 'Raleway',
    fontWeight: '500',
    fontSize: '1.1rem',
    lineHeight: '0.5',
    '&$cssFocused': {
      color: '#fff',
    },
  },
  cssFocused:{},
  cssOutlinedInput:{
    background: '#69c1cc',
    borderRadius: '5px',
    color: '#fff',
    fontWeight: '500',
    fontSize: '1.1rem',
    height: '50px',
    '&$cssFocused $notchedOutline': {
      borderColor: 'transparent',
    },
    '&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline': {
        borderWidth: '2px',
        borderColor: 'transparent',
      },
  },
  notchedOutline:{},
  disabled: {},
  error: {},
  searhIcon:{
    color: '#fff',
    fontSize: '35px'
  },
})

export default drawerStyles;
