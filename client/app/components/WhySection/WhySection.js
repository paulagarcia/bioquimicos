import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
// Material Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import WhySectionStyle from "./WhySectionStyle.js";

const WhySection = (props) => {
  const classes = props.classes;
  return (
      <div className={classes.section}>
        <Grid container alignItems="center" justify="center">
          <Grid item md={7}>
            <List className={classes.listCenter}>
              <ListItem>
                <ListItemText className={classes.description}  primary="Acceso directo a los directivos por sugerencias y necesidades." />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.description}  primary="Representación de la profesión a nivel Nacional por medio de la CUBRA." />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.description}  primary="Representación de la profesión a nivel Provincial." />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.description}  primary="Defensa del ejercicio de la profesión." />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.description}  primary="Dignificar al profesional como persona y como integrante del sistema de Salud." />
              </ListItem>
              <ListItem>
                <ListItemText className={classes.description}  primary="Participar en conjunto con los bioquímicos en defensa de intereses profesionales, morales, espirituales y económicos." />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <h2 className={classes.title}>Los beneficios <span> de pertenecer al</span> colegio bioquimico</h2>
          </Grid>
        </Grid>
      </div>
    );

}

export default withStyles(WhySectionStyle)(WhySection);
