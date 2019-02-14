import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
// Own styles
import autoridadesStyles from './autoridadesStyles';

const ComisionDirectiva = (props) => {
  const { classes } = props
  return(
    <React.Fragment>
      <div  className={classes.directivosContainer}>
        <h3 className={classes.tituloDirectivos}>Comisión <br></br> Directiva</h3>
        <Grid container>
          <Grid item container spacing={24}>
              <Grid item className={classes.person} xs={12} sm={6} md={4}>
                <p>Dr. Javier I. Baabdaty</p>
                <p className={classes.puesto}>Presidente</p>
              </Grid>
              <Grid item className={classes.person} xs={12} sm={6} md={4}>
                <p>Dr. Eduardo Beron</p>
                <p className={classes.puesto}>Secretario</p>
              </Grid>
              <Grid item className={classes.person} xs={12} sm={6} md={4}>
                <p>Dr. Carlos G. Saavedra</p>
                <p className={classes.puesto}>Tesorero</p>
              </Grid>
            </Grid>
            <Grid item container spacing={16}>
              <Grid item className={classes.person} xs={12} sm={6} md={4}>
                <p>Dr. Gerardo Guerrero</p>
                <p className={classes.puesto}>Vocal 2º</p>
              </Grid>
              <Grid item className={classes.person} xs={12} sm={6} md={4}>
                <p>Dra. Nancy Macías</p>
                <p className={classes.puesto}>Vocal 1º</p>
              </Grid>
            </Grid>
            <Grid item container spacing={16}>
              <Grid item className={classes.person} xs={12} sm={6} md={4}>
                <p>Dr. Mauro Bergés</p>
                <p className={classes.puesto}>Vocal Suplente 1º</p>
              </Grid>
              <Grid item className={classes.person} xs={12} sm={6} md={4}>
                <p>Dra. Andrea Morrone</p>
                <p className={classes.puesto}>Vocal Suplente 2º</p>
              </Grid>
            </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default withStyles(autoridadesStyles)(ComisionDirectiva);
