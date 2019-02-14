import React from 'react';
// Local Styles
import footerStyles from './footerStyles';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// Material Components
import Grid from '@material-ui/core/Grid';

const Footer = (props) => {
  const {classes} = props;

  return(
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <h2 className={classes.tituloFooter}> Colegio Bioquimico de San Juan</h2>
        <p>
        <a className={classes.faceIcon} target="_blank" href="https://www.facebook.com/Colegio-Bioqu%C3%ADmico-de-San-Juan-1745701705451087/?fb_dtsg_ag=Adz7k73nL2BLIl2ToQmFpz5rRGK33nA_7ENGByeR7ns5Rw%3AAdwbioTic7Z5OdvJCe3wmEGEXj_u8w7EnRZ6H5EuHydzbA">
          <svg width="22" height="22" viewBox="0 0 1024 1024">
            <path d="M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z"></path>
          </svg>
        </a></p>
        <p>0264 - 421 4266</p>
        <p>recepcion@colebiosanjuan.com.ar</p>
        <p>presidencia@colebiosanjuan.com.ar</p>
        <p> Av. España 226 Sur, Capital San Juan, J5402 DRP Argentina </p>


      </div>
      <Grid container justify='space-between' className={classes.bottomFooter}>
        <Grid item >
          Todos los derechos reservados &copy; 2018
        </Grid>
        <Grid item>
          Diseñado por Papeles 2.0
        </Grid>
      </Grid>
    </footer>
  )
}

export default withStyles(footerStyles)(Footer);
