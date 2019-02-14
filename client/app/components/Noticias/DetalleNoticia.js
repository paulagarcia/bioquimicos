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
  </div>
  )
}
}

export default withRouter(withStyles(detalleNoticiaStyle)(DetalleNoticia));
