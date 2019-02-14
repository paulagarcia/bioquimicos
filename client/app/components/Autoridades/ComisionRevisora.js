import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
// Own styles
import autoridadesStyles from './autoridadesStyles';

const ComisionRevisora = (props) => {
  const { classes } = props
  const estilos = {
    color: '#00a79f',
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
      <Grid item xs={12} md={6} className={classes.columContainer} style={{background: '#666'}}>
        <h3 className={classes.tituloRevisora}>Comisión Revisora<br></br> de Cuentas</h3>
        <Grid item container justify="space-between">
            <Grid item className={classes.person} style={{textAlign: 'right'}}>
              <p style={estilos}>Dr. Gustavo Torcivia</p>
              <p style={puestoMasChico} className={classes.puesto}>Titular</p>
            </Grid>
            <Grid item className={classes.person} style={{textAlign: 'right'}}>
              <p style={estilos}>Dr. José Ramirez</p>
              <p style={puestoMasChico} className={classes.puesto}>Titular</p>
            </Grid>
            <Grid item className={classes.person} style={{textAlign: 'right'}}>
              <p style={estilos}>Dr. Martin D´Agata</p>
              <p style={puestoMasChico} className={classes.puesto}>Titular</p>
            </Grid>
          </Grid>
          <Grid item container justify="space-between">
            <Grid item className={classes.person} style={{textAlign: 'right'}}>
              <p style={estilos}>Dra. Emilia Bustos</p>
              <p style={puestoMasChico} className={classes.puesto}>Suplente</p>
            </Grid>
            <Grid item className={classes.person} style={{textAlign: 'right'}}>
              <p style={estilos}>Dr. Raúl Villalba</p>
              <p style={puestoMasChico} className={classes.puesto}>Suplente</p>
            </Grid>
            <Grid item className={classes.person} style={{textAlign: 'right'}}>
              <p style={estilos}>Dra. Érica Ramis</p>
              <p style={puestoMasChico} className={classes.puesto}>Suplente</p>
            </Grid>
          </Grid>
      </Grid>
      {/*</div>*/}
    </React.Fragment>
  )
}

export default withStyles(autoridadesStyles)(ComisionRevisora);
