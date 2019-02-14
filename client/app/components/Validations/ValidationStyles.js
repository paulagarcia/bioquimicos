import {
    yellowColor,
    defaultFont,
    boxShadow,
    primaryColor,
    subtitle,
    sectionTitle,
    subtitleExtra,
    transition
} from "../../styles/general-styles.js";

const ValidationLink = {
  sectionContainer:{
    //paddingBottom: '60px'
  },
  validationContainer:{
    ...boxShadow,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '0 auto',
    background: 'linear-gradient(to right, #58ccdb, #06beb6)',
    padding: '43px 0',
  },
  validationItem:{
    width: 'auto',
    height: '58px',
    textAlign: 'center',
    flex: '1 1 auto',
    '@media (min-width: 960px)':{
      borderRight: '1px solid #fafafa',
    },
    '& > div':{
      padding: '0',
    },
    '& > div > span': {
      fontFamily: 'raleway',
      textTransform: 'uppercase',
      color: '#fff',
      fontSize: '1.2rem',
      fontWeight: '300',
      ...transition,
      '&:hover':{
        transform: 'translateY(-10px)',
        fontWeight: '500'
      },
    },
  },
  title:{
    ...sectionTitle,
  },
  subtitle: {
    ...subtitle,
  },
  subtitleExtra:{
    ...subtitleExtra,
    color: primaryColor,
  }
}

export default ValidationLink;
