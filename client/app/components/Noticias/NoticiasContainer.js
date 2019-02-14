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
import CajaNoticia from './CajaNoticia';
// styles
import NoticiasStyles from './NoticiasStyles';


const NoticiasContainer = ({noticias}) => {

  const masonryOptions = {
      //columnWidth: 380,
      gutter: 20,
      horizontalOrder: true,
      fitWith: true,
  };
  const childElements = noticias.map(function(noticia, i){
     return (
         <CajaNoticia
           id={noticia._id}
           cuerpo={noticia.cuerpo}
           titulo={noticia.titulo}
           fecha={noticia.fecha}
           foto={noticia.foto}
           masFotos={noticia.masFotos}
           key={i}
         />
      );
  });
  return(
    <Masonry
      disableImagesLoaded={false}
      updateOnEachImageLoad={false}
      options={masonryOptions}
  >
      {childElements}
    </Masonry>
  )
}


export default withStyles(NoticiasStyles)(NoticiasContainer);
