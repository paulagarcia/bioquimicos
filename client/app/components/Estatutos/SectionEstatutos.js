import React from 'react';
//import { Document, Page } from 'react-pdf';
import CajaEstatuto from './CajaEstatuto';
// nodejs library that concatenates classes
import classNames from "classnames";
// Material Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// Own styles
import estatutosStyle from './estatutosStyle';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

class SectionEstatutos extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const {classes} = this.props;

    return(
      <React.Fragment>
        <div className={classes.sectionContainer}>
          <h2 className={classes.title}>Estatutos y Normas</h2>
          <h3
            className={classes.subtitle}>Haga
            <span className={classes.subtitleExtra}> click </span>
            en los enalces para ver los
            <span className={classes.subtitleExtra}> documentos.</span>
          </h3>
            <Grid container spacing={24} justify="center">
              <Grid item>
                <CajaEstatuto
                  titulo="Código de ética"
                  pdf="/assets/estatutos/codigo-etica.pdf"
                />
              </Grid>
              <Grid item>
                <CajaEstatuto
                  titulo="resolución asamblea"
                  pdf="/assets/estatutos/resolucion_asamblea.pdf"
                />
              </Grid>
              <Grid item>
                <CajaEstatuto
                  titulo="estatuto"
                  pdf="/assets/estatutos/estatuto.pdf"
                />
              </Grid>
              <Grid item>
                <CajaEstatuto
                  titulo="Requisitos para asociarse y para apertura de Laboratorio"
                  pdf="/assets/estatutos/estatuto.pdf"
                />
              </Grid>
            </Grid>
          </div>
        </React.Fragment>
        )
      }
}
export default withStyles(estatutosStyle)(SectionEstatutos);
