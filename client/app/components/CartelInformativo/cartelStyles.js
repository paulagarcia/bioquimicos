import { sectionTitle, grayLight } from "../../styles/general-styles.js";

const cartelStyles = {
  textoInformativo:{
    ...sectionTitle,
    color: grayLight,
    fontSize: '1.5rem',
    textTransform: 'initial',
    '@media (min-width: 600px)':{
      fontSize: '2rem',
    },
    '@media (min-width: 960px)':{
      fontSize: '2.5rem',
    }
  }
}

export default cartelStyles;
