/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
// personal styles
import headerLinksStyle from "./headerLinksStyle.js";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          component={Link}
          to="/"
          className={classes.navLink}
        >Inicio
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          component={Link}
          to="/laboratorios"
          className={classes.navLink}
        >Laboratorios
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          component={Link}
          to="/convenios"
          className={classes.navLink}
        >
           Convenios
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            component={Link}
            to="/galeria"
            className={classes.navLink}
          >Imágenes
          </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
