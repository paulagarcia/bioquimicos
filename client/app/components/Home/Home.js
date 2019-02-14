import React, { Component } from 'react';
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';

//Styles
import HomePageStyles from "./HomePageStyles.js";
import Parallax from "../Parallax/Parallax.js";

// page sections
import Header from '../Header/Header.js';
import HeaderLinks from '../Header/HeaderLinks';
import WhySection from "../WhySection/WhySection.js";
import Validations from "../Validations/Validations.js";
import SectionNoticias from "../Noticias/SectionNoticias.js";
import SectionEstatutos from "../Estatutos/SectionEstatutos.js";
import SectionAutoridades from "../Autoridades/SectionAutoridades.js";
import SectionImages from "../Imagenes/SectionImages.js";
import SectionMoreLinks from "../MoreLinks/SectionMoreLinks.js";


const Home = (props) => {
  const classes = props.classes;
  return (
    <React.Fragment>
      <Header
        color="transparent"
        brand=""
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <Parallax filter image={require("../../../public/assets/img/home.jpg")}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={12} md={8} lg={6} xl={5} className={classes.brandContainer}>
              <p className={classes.bienvenido}>Bienvenido al</p>
              <h1 className={classes.title}>COLEGIO BIOQUÍMICO <br /> DE SAN JUAN</h1>
              <br />
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <WhySection />
          <Validations />
          <SectionNoticias />
          <SectionEstatutos />
          <SectionImages />
          <SectionAutoridades />
          <SectionMoreLinks />
        </div>
      </div>
  </React.Fragment>
  );
}

export default withStyles(HomePageStyles)(Home);
