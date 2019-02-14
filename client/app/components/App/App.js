import React, { Component } from 'react';

import withStyles from "@material-ui/core/styles/withStyles";

import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import NotFound from '../App/NotFound';
import Laboratorios from '../Laboratorios/Laboratorios';
import NoticiasTodas from '../Noticias/NoticiasTodas';
import GaleriaImagenes from '../Imagenes/GaleriaImagenes';
import Convenios from '../Convenios/Convenios';


import { Route, Switch} from 'react-router-dom';



const App = () => (
  <React.Fragment>

  {/*// Acá es donde renderiza el contenido dependiendo la URL*/}
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/laboratorios" component={Laboratorios}/>
    <Route path="/noticias" component={NoticiasTodas}/>
    <Route path="/galeria" component={GaleriaImagenes}/>
    <Route path="/convenios" component={Convenios}/>
    <Route component={NotFound}/>
  </Switch>




  {/*// Footer del sitio*/}
  <Footer />
  </React.Fragment>
)



export default App;
