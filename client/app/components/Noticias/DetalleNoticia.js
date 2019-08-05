import React from 'react';
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Tooltip from '@material-ui/core/Tooltip';
// Own Styles
import detalleNoticiaStyle from './detalleNoticiaStyle';
// Packages to parse date
import Moment from 'react-moment';
import 'moment/locale/es';
// React Router components
import { withRouter, Link } from 'react-router-dom'


class DetalleNoticia extends React.Component {
  constructor(props){
    super(props)
  };

  componentDidMount() {
    document.getElementById('noticia').scrollIntoView(true, {block: 'start'})
  }

  render() {

  const { classes } = this.props;
  let texto;
  if (this.props.cuerpo){ texto = this.props.cuerpo.split(/\\n/g) }

  return(
    <div className={classes.container} id='noticia'>
      <h2 className={classes.titulo}>
        <Tooltip title="Volver">
          <Button className={classes.backButton} variant="fab" aria-label="Go Back" onClick={() => this.props.history.goBack()}>
            <NavigateBeforeIcon />
          </Button>
        </Tooltip>
        {this.props.titulo}
      </h2>
      <p className={classes.fechaNota}><Moment format="DD-MMMM-YYYY" date={this.props.fecha} /></p>
      {this.props.video ? (
        <div className={classes.videoContainer}>
          <video width="100%" height="auto" controls autoPlay style={{outline: 'none'}}>
            <source src={this.props.video} type="video/mp4" />
          </video>
        </div>
      ) : null}

      {this.props.foto && !this.props.video ? (
        <div className={classes.imgContainer}>
          <img src={this.props.foto} className={classes.imgNota}/>
        </div>
      ) : null}

      {this.props.cuerpo ? (
        <div className={classes.cuerpoContainer}>
          {
            texto.map(function(line, i){
              return <p className={classes.cuerpoNota} key={i }>{line}</p>
            })
          }
        </div>
      ) : (null)}
      <p>
        <a className={classes.linkFace} target="_blank" 
           href="https://www.facebook.com/Colegio-Bioqu%C3%ADmico-de-San-Juan-1745701705451087/?fb_dtsg_ag=Adz7k73nL2BLIl2ToQmFpz5rRGK33nA_7ENGByeR7ns5Rw%3AAdwbioTic7Z5OdvJCe3wmEGEXj_u8w7EnRZ6H5EuHydzbA">
             Ver Galería de Fotos en Facebook: Colegio Bioquímico de San Juan
        </a></p>
  </div>
  )
}
}

export default withRouter(withStyles(detalleNoticiaStyle)(DetalleNoticia));
