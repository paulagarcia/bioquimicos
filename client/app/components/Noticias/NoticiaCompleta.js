import React from 'react';
import DetalleNoticia from './DetalleNoticia';
import Header from '../Header/Header.js';
import HeaderLinks from '../Header/HeaderLinks';



class NoticiaCompleta extends React.Component {

  render() {
    let noticia = this.props.noticia || {};

    return(
      <React.Fragment>
      <Header
        color="white"
        brand=""
        rightLinks={<HeaderLinks />}
        fixed
      />
      <DetalleNoticia
        titulo={noticia.titulo}
        cuerpo={noticia.cuerpo}
        foto={noticia.foto}
        fecha={noticia.fecha}
        video={noticia.video}
      />
      </React.Fragment>
    )

      if(noticia.masFotos){
        <NotiaFotoContainer
          masFotos={noticia.masFotos}
        />
      } else {null}

    }
}


export default NoticiaCompleta;
