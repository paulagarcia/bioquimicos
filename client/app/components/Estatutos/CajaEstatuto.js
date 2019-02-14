import React from 'react';
//Material Components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Zoom from '@material-ui/core/Zoom';
// Styles
import estatutosStyle from './estatutosStyle';
import classNames from "classnames";

import PDF from '../PDF/PDF';


class CajaEstatuto extends React.Component {
  constructor(props){
    super(props)

  };

  state = {
    open: false,
    scroll: 'paper',
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div
          onClick={this.handleClickOpen('paper')}
          className={classes.cajaContainer}
          >
            <span className={classes.verDoc}><p> documento </p></span>
            <p className={classes.tituloEstatuto}>{this.props.titulo}</p>

        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby={this.props.titulo}
          className={classes.pdfContainer}
          maxWidth={false}

        >
          <DialogActions className={classes.headerModal}>
            <Tooltip title="Descargar" TransitionComponent={Zoom}>
              <Button variant="fab" aria-label="Dowload" className={classes.downloadButton} download            href={this.props.pdf}>
                <SaveAlt />
              </Button>
            </Tooltip>
            <DialogTitle id={this.props.titulo} className={classes.tituloModal}>{this.props.titulo}</DialogTitle>
            <IconButton className={classes.closeButton} onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
            </IconButton>
          </DialogActions>
          <DialogContent className={classes.modalContent}>
            <PDF
              pdf={this.props.pdf}
              clase= ''
              />
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(estatutosStyle)(CajaEstatuto);
