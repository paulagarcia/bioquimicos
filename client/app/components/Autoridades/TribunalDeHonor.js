import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
// Own styles
import autoridadesStyles from './autoridadesStyles';

const TribunalDeHonor = (props) => {
  const { classes } = props
  const estilos = {
    color: '#0081c6',
    color: '#5cc1b3',
    color: '#5ac0b2',
    fontSize: '1.4rem',
    fontWeight: '300'
  };
  const puestoMasChico = {
    color: '#c9c9c9',
    color: '#f5f5f5',
    fontSize: '1.2rem'
  }
  return(
    <React.Fragment>
      {/*<div className={classes.tituloContainer}>
        <h3>Comisión Directiva</h3>
      </div>*/}
      {/*<div  className={classes.comisionContainer} >*/}
      <Grid item xs={12} md={6} className={classes.columContainer}>
        <h3 className={classes.tituloHonor}>Tribunal de<br></br>Honor</h3>
        <Grid item container justify="space-between">
            <Grid item className={classes.person} >
              <p style={estilos}>Dra. Hilda Aragon</p>
              <p style={puestoMasChico} className={classes.puesto}>Titular</p>
            </Grid>
            <Grid item className={classes.person} >
              <p style={estilos}>Dr. Miguel Padilla</p>
              <p style={puestoMasChico} className={classes.puesto}>Titular</p>
            </Grid>
            <Grid item className={classes.person} >
              <p style={estilos}>Dra. Sandra Sanchez</p>
              <p style={puestoMasChico} className={classes.puesto}>Titular</p>
            </Grid>
          </Grid>
          <Grid item container spacing={24}>
            <Grid item className={classes.person}>
              <p style={estilos}>Dra. Silvia Otto</p>
              <p style={puestoMasChico} className={classes.puesto}>Suplente</p>
            </Grid>
            <Grid item className={classes.person}>
              <p style={estilos}>Dra. Alicia Elizondo</p>
              <p style={puestoMasChico} className={classes.puesto}>Suplente</p>
            </Grid>
            <Grid item className={classes.person}></Grid>
          </Grid>
      </Grid>
      {/*</div>*/}
    </React.Fragment>
  )
}

export default withStyles(autoridadesStyles)(TribunalDeHonor);
