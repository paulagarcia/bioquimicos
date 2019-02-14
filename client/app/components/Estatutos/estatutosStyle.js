import {
  container,
  sectionTitle,
  grayColor,
  primaryColor,
  boxShadow,
  subtitleExtra,
  defaultFont,
  primaryDark,
  subtitle,
} from "../../styles/general-styles.js";

const estatutosStyle = {

  title:{
    ...sectionTitle,
    marginBottom:'16px'
  },
  subtitle:{
    ...subtitle,
    marginBottom: '5rem',
  },
  subtitleExtra:{
    ...subtitleExtra,
    color: primaryColor,
  },
  cajaContainer:{
    ...boxShadow,
    background: '#fff',
    height: '300px',
    width: '240px',
    borderRadius: '3px',
    lineHeight: '1.8rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover':{
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      background: '#fff',
    }
  },
  tituloEstatuto:{
    fontSize:'1.5rem',
    fontFamily: 'Oswald',
    textTransform: 'capitalize',
    color: '#9e9e9e',
    fontWeight: '300',
    paddingLeft: '30px',
    textAlign: 'right',
    paddingRight: '25px',
    lineHeight: '1.3',
  },
  verDoc:{
    //padding: '1rem 0',
    fontWeight: '300',
    fontSize: '1.5rem',
    height: '300px',
    width: '60px',
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px',
    '& > p':{
      width: '60px',
      transform: 'rotate(-90deg)',
      position: 'relative',
      top: '116px',
      fontFamily: 'Meddon, cursive',
    }
  },
  sectionContainer:{
    padding: '10px 0 100px',
    '& > div > div:first-child > div > span':{
      background: '#0097A7',
    },
    '& > div > div:nth-child(2) > div > span':{
      background: '#5cc1b3',
    },
    '& > div > div:nth-child(3) > div > span':{
      background: '#57a99a',
    },
    '& > div > div:nth-child(4) > div > span':{
      background: primaryColor,
    },
  },
  pdfContainer:{
    '& > div':{
      borderRadius: '3px',
      '& > div':{
        margin: '2px',
        maxHeight: 'calc(100% - 5px)',
        '@media (min-width: 600px)':{
          flex: '0 1 auto',
          maxHeight: 'calc(100% - 96px)',
        }
      }
    },
  },
  headerModal:{
    justifyContent: 'space-between',
    background: '#f5f5f5',
    margin: '0',
    borderBottom: '1px solid #eaeaea',
    padding: '6px 15px 6px 6px',
    position: 'relative',
    '& > a':{
      position: 'absolute',
      bottom: '-24px',
      left: '0.3rem',
      width: '48px',
      height: '48px',
      background: primaryColor,
      color: '#fff',
      transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
      zIndex: '9',
      '@media (min-width: 600px)':{
        bottom: '-28px',
        left: '2.3rem',
        width: '56px',
        height: '56px',
      },
      '&:hover, &:focus':{
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        background: primaryDark,
      },
    }
  },
  tituloModal: {
    flex: '1 1 auto',
    padding: '5px',
    '@media (min-width: 600px)':{
      padding: '24px 24px 20px',
    },
    '& > h6':{
      ...sectionTitle,
      fontSize: '1.2rem!important',
      marginBottom: '0',
      fontWeight: '400',
      '@media (min-width: 600px)':{
        fontSize: '1.5rem!important',
      }
    },
  },
  modalContent:{
    padding: '0px',
    '@media (min-width: 600px)':{
      padding: '0 24px 24px',
    }
  },
  closeButton:{
    color: '#444',
  },
  downloadButton:{
    position: 'absolute',
    top: '56px',
    left: '2.3rem',
    background: primaryColor,
    color: '#fff',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    '&:hover, &:focus':{
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      background: primaryDark,
    },
  }
}
export default estatutosStyle;
