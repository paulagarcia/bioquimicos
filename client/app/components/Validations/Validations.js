import React, { Component } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// Own styles
import { title } from "../../styles/general-styles.js";
import ValidationStyles from './ValidationStyles.js'


const Validations = (props) => {
  const { classes } = props;
  return(
    <React.Fragment>
      <div className={classes.sectionContainer}>
        <h2 className={classes.title}>Validaciones</h2>
        <h3 className={classes.subtitle}>Haga click en los siguientes <span className={classes.subtitleExtra}>enlaces</span> para acceder a las validaciones</h3>
        <List component="div" className={classes.validationContainer} md={8}>
          <ListItem className={classes.validationItem} component="a" target="_blank" href='http://www.dossanjuan.online/OspBio/Login.Aspx?ReturnUrl=%2fOspBio%2fdefault.aspx'>
            <ListItemText primary="OSP" />
          </ListItem>
          <ListItem className={classes.validationItem} component="a" target="_blank" href='https://www.traditum.com/institucional/index.html'>
            <ListItemText primary="MEDIFE" />
          </ListItem>
          <ListItem className={classes.validationItem} component="a" target="_blank" href='http://www.autorizacionesdamsu.com.ar/'>
            <ListItemText primary="Damsu" />
          </ListItem>
          <ListItem className={classes.validationItem} component="a" target="_blank" href='https://server.biosoft-online.net/PAMISANJUAN/'>
            <ListItemText primary="PAMI" />
          </ListItem>
          <ListItem className={classes.validationItem} component="a" target="_blank" href='https://www.micamsalud.com.ar/autorizador1.0.5.2/index_autorizador.php'>
            <ListItemText primary="Sanip" />
          </ListItem>
          <ListItem className={classes.validationItem} component="a" target="_blank" href='http://200.5.196.186/ColmedPracticas/Login.aspx'>
            <ListItemText primary="Colmed" />
          </ListItem>
          <ListItem className={classes.validationItem} component="a" target="_blank" href='http://server.biosoft-online.net:30080/cbsjsancor/' style={{border: 'none'}}>
            <ListItemText primary="Sancor" />
          </ListItem>
          </List>
        </div>
    </React.Fragment>
  )
}

export default withStyles(ValidationStyles)(Validations);
