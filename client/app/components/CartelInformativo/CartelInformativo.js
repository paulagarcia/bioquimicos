import React from 'react';
// Material Components and styles
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// Personal Styles
import cartelStyles from './cartelStyles';


const CartelInformativo = (props) => {
  const classes = props.classes;
  const texto = props.texto;
  return(
      <p className={classes.textoInformativo}>  {texto} </p>
  )

}

export default withStyles(cartelStyles)(CartelInformativo);
