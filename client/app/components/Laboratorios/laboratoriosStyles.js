import { container, sectionTitle, defaultFont, primaryColor, primaryLight, primaryDark , yellowColor2} from "../../styles/general-styles.js";
const laboratoriosStyles = {
  container: {
      zIndex: "12",
      color: "#FFFFFF",
      ...container
  },
  main: {
    background: "#fafafa",
    position: "relative",
    zIndex: "3",
    paddingBottom: '4rem'
  },
  sectionTitle:{
    ...sectionTitle,
    paddingTop: '3rem',
    marginBottom: '3rem',
  },
  tableContainer: {
    overflowX: 'auto',
  },
  table:{
    ...defaultFont,
    borderCollapse: 'separate',
    borderSpacing: '0px 10px',
  },
  head: {
    '& > th': {
      color: primaryColor,
      fontFamily: 'oswald',
      fontSize: '1.2rem',
      textTransform: 'uppercase',
      fontWeight: '300',
      background: 'transparent',
      border: 'none',
    }
  },
  row: {
    background: '#fff',
    '& > td':{
      color: '#666',
      fontSize: '0.9rem',
      fontWeight: '300',
    }
  },
  nombre:{
    borderLeft: '3px solid',
    borderLeftColor: primaryColor,
    fontWeight: '300',
    color: '#333',
    fontFamily: 'oswald',
    fontSize: '1rem',
  },
  searchContainer:{
    marginBottom: '2rem',
  },
  cssLabel:{
    color: '#999',
    fontFamily: 'Raleway',
    fontWeight: '300',
    '&$cssFocused': {
      color: yellowColor2,
    },
  },
  textField:{
    width: '100%'
  },
  cssFocused:{},
  cssOutlinedInput:{
    background: '#fff',
    '&$cssFocused $notchedOutline': {
      borderColor: yellowColor2,
    },
    '&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline': {
        borderWidth: '2px',
        borderColor: '#ddd'
      },
  },
  notchedOutline:{},
  disabled: {},
  error: {},
  notchedOutline: {},
  searhIcon:{
    color: yellowColor2,
    fontSize: '38px'
  },
  cssSelect:{
    color: primaryDark,
    fontFamily: 'Raleway',
    background: '#fff',
    '&$cssFocused $notchedOutline': {
      borderColor: yellowColor2,
    },
    '&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline': {
        borderWidth: '2px',
        borderColor: '#ddd'
    },
    '& svg':{
      right: '10px'
    },
    '& div:focus':{
      background: 'initial',
    }
  },
  menu: {
    '& ul':{
      paddingTop: '0',
      paddingBottom: '0',
      borderRadius: '3px',
      '& li':{
        fontFamily: 'Raleway',
        fontSize: '0.9rem',
        color: '#444',
        '&:hover':{
          background: '#eee',
        },
        '&:focus': {
          background: primaryDark,
          color: '#eee'
        },
        '&:focus:hover':{
          background: primaryDark,

        }
      }
    }
  }

}

export default laboratoriosStyles;
