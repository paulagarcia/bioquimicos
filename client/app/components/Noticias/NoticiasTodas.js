import React, { Component } from 'react';
import 'whatwg-fetch';
import { Route, Switch } from "react-router-dom";
// nodejs libr, ary that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// own components
import NoticiasContainer from './NoticiasContainer';
import NoticiaCompleta from './NoticiaCompleta';
import Header from '../Header/Header.js';
import HeaderLinks from '../Header/HeaderLinks';
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
      fetch('/api/noticiasTodas')
        .then(res => res.json())
        .then(json => {
          this.setState({
            noticias: json
          });
        });
    };


  render() {
    const { classes } = this.props;
    const matchpath = this.props.match.path;

    return(
        <React.Fragment>
          <Header
            color="white"
            brand=""
            rightLinks={<HeaderLinks />}
            fixed
          />
          <div className={classes.main}>
            <div className={classes.container}>
              <div className={classes.noticiasSection}>
                <Route
                  path={`${matchpath}`}
                  exact
                  render={() => (
                    <React.Fragment>
                      <h2 className={classes.sectionTitle}>Noticias</h2>
                      <NoticiasContainer noticias={this.state.noticias} />
                    </React.Fragment>
                    )} />
                <Route
                  path={`${matchpath}/:albumId`}
                  exact
                  render={({ match }) => (
                      <NoticiaCompleta
                          noticia={this.state.noticias.find((a) => a._id === match.params.albumId )}
                      />)}
                />
              </div>
            </div>
        </div>
        </React.Fragment>
      )
   }
}

export default withStyles(NoticiasStyles)(SectionNoticias);
