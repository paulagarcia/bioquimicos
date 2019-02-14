import { boxShadow, transition } from "../../styles/general-styles.js";
const footerStyles = {
  footer: {
    background: '#f5f5f5',
    padding: '40px 0px 0px',
    borderTop: '1px solid #eaeaea',
    position: 'relative',
    zIndex: '2'
  },
  footerContainer:{
    padding: '20px 0 40px',
    textAlign: 'center',
    fontFamily: 'raleway',
    color: '#444',
    fontSize: '1.1rem'
  },
  tituloFooter:{
    color: '#444',
    fontFamily: 'oswald',
    fontWeight: '300',
    fontSize: '2rem',
    borderTop: '1px solid #c9c9c9',
    display: 'inline-block',
    borderBottom: '1px solid #c9c9c9',
    padding: '15px 30px',
    marginBottom: '10px',
  },
  bottomFooter:{
    fontFamily: 'raleway',
    fontSize: '0.8rem',
    background: '#fafafa',
    padding: '20px 30px',
    borderTop: '1px solid #eaeaea'
  },
  faceIcon:{
    ...transition,
    display: 'inline-block',
    '&:hover':{
      transform: 'scale(1.2)',
    },
    '& svg':{
      borderRadius: '50%',
      border: '2px solid #444',
      fill: '#444',
      padding: '6px',
      height: 'inherit',
      width: 'inherit'

    }
  }
}

export default footerStyles;
