import React from 'react';
// import styles
import galeriaStyles from './galeriaStyles';
//Import header component
import Header from '../Header/Header.js';
import HeaderLinks from '../Header/HeaderLinks';
import Galeria from './Galeria';
// nodejs libr, ary that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


class GaleriaImagenes extends React.Component {
  constructor(props){
    super(props)
  };

  componentDidMount(){
    const url = window.location.pathname
    const matchpath = url.substring(url.lastIndexOf('/')+1);
    if (matchpath !== 'galeria') {
      document.getElementById(matchpath).scrollIntoView(true, {block: 'start'})
    }
  }

  render() {

    const { classes } = this.props

    // Fotos cena fin de anio
    var imagenesCena = {};
    function importAlld (r) {
      r.keys().forEach(key => imagenesCena[key] = r(key));
    }
    importAlld(require.context('../../../public/assets/img/noticias/cenaFinAnio', true, /\.jpg$/));
    const fotosCena = Object.values(imagenesCena) || [];

    // Fotos Asamblea
    var imagenesAsamblea = {};
    function importAlle (r) {
      r.keys().forEach(key => imagenesAsamblea[key] = r(key));
    }
    importAlle(require.context('../../../public/assets/img/noticias/asambleaOrdinaria', true, /\.jpg$/));
    const fotosAsamblea = Object.values(imagenesAsamblea) || [];

    // Fotos Dia de la Madre
    var imagenesMadre = {};
    function importAllf (r) {
      r.keys().forEach(key => imagenesMadre[key] = r(key));
    }
    importAllf(require.context('../../../public/assets/img/noticias/diaMadre', true, /\.jpg$/));
    const fotosMadre = Object.values(imagenesMadre) || [];

    // Fotos del día del Bioquímico
    var imagenesFestejo = {};
    function importAlla (r) {
      r.keys().forEach(key => imagenesFestejo[key] = r(key));
    }
    importAlla(require.context('../../../public/assets/img/noticias/diaBioquimico', true, /\.jpg$/));
    const fotosBioquimicos = Object.values(imagenesFestejo) || [];

    // Fotos del Festejo del día del Nino
    var imagenesNinio = {};
    function importAllb (r) {
      r.keys().forEach(key => imagenesNinio[key] = r(key));
    }
    importAllb(require.context('../../../public/assets/img/noticias/diaNinio', true, /\.jpg$/));
    const fotosNinio = Object.values(imagenesNinio) || [];

    // Fotos Patologías Tiroideas
    var imagenesTiroides = {};
    function importAllc (r) {
      r.keys().forEach(key => imagenesTiroides[key] = r(key));
    }
    importAllc(require.context('../../../public/assets/img/noticias/tiroides', true, /\.jpg$/));
    const fotosTiroides = Object.values(imagenesTiroides) || [];

    function getFotos(lista){
      const LasFotos = [];
      lista.map(function(item,i){
        LasFotos.push({src: item, id: i,})
      })
      return(LasFotos);
    }
    const LightboxBioquimicos = getFotos(fotosBioquimicos);
    const LightboxNinio = getFotos(fotosNinio);
    const LightboxTiroides = getFotos(fotosTiroides);
    const LightboxCena = getFotos(fotosCena);
    const LightboxAsamblea = getFotos(fotosAsamblea);
    const LightboxMadre = getFotos(fotosMadre);


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
            <Galeria
              titulo='CBSJ agasajó a sus socios en la cena de fin de año'
              fotosMasonry={fotosCena}
              fotosLigthBox={LightboxCena}
              fecha="24 de Noviembre"
              id='galeria-6'
              >
            </Galeria>
            <Galeria
              titulo='Asamblea Anual Ordinaria'
              fotosMasonry={fotosAsamblea}
              fotosLigthBox={LightboxAsamblea}
              fecha="31 de Octubre"
              id='galeria-5'
              >
            </Galeria>
            <Galeria
              titulo='Día de la Madre'
              fotosMasonry={fotosMadre}
              fotosLigthBox={LightboxMadre}
              fecha="27 de Octubre"
              id='galeria-4'
              >
            </Galeria>
            <Galeria
              titulo='Festejo del día del Niño'
              fotosMasonry={fotosNinio}
              fotosLigthBox={LightboxNinio}
              fecha="25 de Agosto"
              id='galeria-1'
              >
            </Galeria>
            <Galeria
              titulo='Curso "Patologías Tiroideas"'
              fotosMasonry={fotosTiroides}
              fotosLigthBox={LightboxTiroides}
              fecha="10 y 11 de Agosto"
              id='galeria-2'
              >
            </Galeria>
            <Galeria
              titulo='Festejo del día del Bioquímico'
              fotosMasonry={fotosBioquimicos}
              fotosLigthBox={LightboxBioquimicos}
              fecha="16 de Junio"
              id='galeria-3'
              >
            </Galeria>
          </div>
        </div>
      </React.Fragment>
    )
}
}

export default withStyles(galeriaStyles)(GaleriaImagenes);
