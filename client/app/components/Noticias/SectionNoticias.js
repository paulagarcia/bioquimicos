import React, { Component } from 'react';
import 'whatwg-fetch';
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
// Masonry package
import Masonry from 'react-masonry-component';
// own components
import NoticiasContainer from './NoticiasContainer';
// styles
import NoticiasStyles from './NoticiasStyles';


class SectionNoticias extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      noticias: []
    };
  }

  componentDidMount() {
      fetch('/api/noticias')
        .then(res => res.json())
        .then(json => {
          this.setState({
            noticias: json
          });
        });
    };

    render() {
      const { classes } = this.props;
      return(
        <div className={classes.noticiasSection}>
        <h2 className={classes.sectionTitle}>últimas Noticias</h2>
        <h3 className={classes.subtitle}>
          Vea nuestras últimas noticias o acceda a la sección de
          <Link to="/noticias"><span className={classes.subtitleExtra}> todas las noticias</span></Link>
        </h3>
         <NoticiasContainer noticias={this.state.noticias} />
       </div>
      )
   }
}

export default withStyles(NoticiasStyles)(SectionNoticias);
