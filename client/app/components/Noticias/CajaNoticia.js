import React, { Component } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
// Link
import { NavLink, Link, Route } from "react-router-dom";
// Own Styles
import NoticiasStyles from './NoticiasStyles';
// Packages to parse date
import Moment from 'react-moment';
import 'moment/locale/es';

import NoticiaCompleta from './NoticiaCompleta'

const Noticia = (props) => {
  const { classes } = props;

  return(
    <React.Fragment>
    <div className={classes.noticiaContainer}>
      <div className={classes.fechaContainer}>
         <span className="dia"><Moment format="D" date={props.fecha} /></span>
         <span className="mes"><Moment format="MMMM" date={props.fecha} /></span>
         <span className="anio"><Moment format="YYYY" date={props.fecha} /></span>
      </div>
      {props.foto ? (
        <NavLink to={`/noticias/${props.id}`}>
          <div className={classes.fotoContainer}>
            <img src={props.foto} />
          </div>
        </NavLink> ) : null
      }
      <div className={classes.titleContainer}>
        <NavLink to={`/noticias/${props.id}`}>
          <h2>{props.titulo}</h2>
        </NavLink>
				<p className={classes.description}>
          {props.cuerpo ? props.cuerpo.substr(0, props.cuerpo.lastIndexOf(' ', 160)).concat(' ...') : ''}
				</p>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          component={NavLink}
          to={`/noticias/${props.id}`}
          className={classes.buttonMas}
        >Leer Más
        </Button>
      </div>
    </div>
    </React.Fragment>
  )
}

export default withStyles(NoticiasStyles)(Noticia);
