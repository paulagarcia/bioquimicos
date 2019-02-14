import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
// Own styles
import autoridadesStyles from './autoridadesStyles';
// components
import ComisionDirectiva from './ComisionDirectiva';
import ComisionRevisora from './ComisionRevisora';
import TribunalDeHonor from './TribunalDeHonor';


const SectionAutoridades = (props) =>{
  const { classes } = props
  return(
    <React.Fragment>
      <div className={classes.sectionContainer}>
        <h2 className={classes.sectionTitle}>autoridades</h2>
        <ComisionDirectiva />
        <Grid container direction="row" justify="space-between" alignItems="flex-start">
          <TribunalDeHonor />
          <ComisionRevisora />
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default withStyles(autoridadesStyles)(SectionAutoridades);
