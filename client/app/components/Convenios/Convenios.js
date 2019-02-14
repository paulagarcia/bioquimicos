import React from 'react';
//Import header component
import Header from '../Header/Header.js';
import HeaderLinks from '../Header/HeaderLinks';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
//Import personal styles
import conveniosStyles from './conveniosStyles';
//Import Lista de Convenios Drawer
import DrawerConvenios from './DrawerConvenios';

const Convenios = (props) => {
  const classes = props.classes

  return(
    <>
    <Header
      color="white"
      brand=""
      rightLinks={<HeaderLinks />}
      fixed
    />
    <div className={classes.main}>
        <DrawerConvenios />
    </div>
    </>
  )
}


export default withStyles(conveniosStyles)(Convenios);
