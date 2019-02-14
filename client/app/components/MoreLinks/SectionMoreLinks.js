import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Star from '@material-ui/icons/Star';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import moreLinksStyles from "./moreLinksStyles.js";

const SectionMoreLinks = (props) => {
  const classes = props.classes;
  return (
      <div className={classes.section}>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} sm={12} md={4}>
            <h2 className={classes.title}>Más <span> links </span> de interés</h2>
          </Grid>
          <Grid item md={8}>
            <List className={classes.listCenter}>
              <ListItem component="a" target="_blank" href='http://www.cubra.info/es/index.php'>
                <ListItemText className={classes.description}  primary="CUBRA" />
                <ListItemIcon className={classes.icon}>
                    <NavigateNextIcon />
                </ListItemIcon>
              </ListItem>
              <ListItem component="a" target="_blank" href='https://www.sssalud.gob.ar/'>
                <ListItemText className={classes.description}  primary="Superintendencia de Servicios de Salud" />
                <ListItemIcon className={classes.icon}>
                    <NavigateNextIcon />
                </ListItemIcon>
              </ListItem>
              <ListItem component="a" target="_blank" href='http://www.faba.org.ar/'>
                <ListItemText className={classes.description}  primary="Federación Bioquimica de la Provincia de Buenos Aires" />
                <ListItemIcon className={classes.icon}>
                    <NavigateNextIcon />
                </ListItemIcon>
              </ListItem>
              {/*<ListItem component="a" target="_blank" href='http://www.pami.org.ar/'>
                <ListItemText className={classes.description}  primary="PAMI" />
                <ListItemIcon className={classes.icon}>
                    <NavigateNextIcon />
                </ListItemIcon>
              </ListItem>*/}
              <ListItem component="a" target="_blank" href='https://www.fba.org.ar/'>
                <ListItemText className={classes.description}  primary="Fundación Bioquímica Argentina" />
                <ListItemIcon className={classes.icon}>
                    <NavigateNextIcon />
                </ListItemIcon>
              </ListItem>
              <ListItem component="a" target="_blank" href='http://colabiocli.com/'>
                <ListItemText className={classes.description}  primary="Confederación Latinoamericana de Bioquímica Clínica" />
                <ListItemIcon className={classes.icon}>
                    <NavigateNextIcon />
                </ListItemIcon>
              </ListItem>
              {/*<ListItem component="a" target="_blank" href='http://www.colmedsanjuan.com.ar/'>
                <ListItemText className={classes.description}  primary="COLMED Salud" />
                <ListItemIcon className={classes.icon}>
                    <NavigateNextIcon />
                </ListItemIcon>
              </ListItem>*/}
              <ListItem component="a" target="_blank" href='https://www.argentina.gob.ar/anmat'>
                <ListItemText inset className={classes.description}  primary="Administración Nacional de Medicamentos Alimentos y Tecnología Médica" />
                <ListItemIcon className={classes.icon}>
                    <NavigateNextIcon />
                </ListItemIcon>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    );

}

export default withStyles(moreLinksStyles)(SectionMoreLinks);
