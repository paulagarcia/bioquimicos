import React from 'react';
// Import for ligtbox on the photos
import Lightbox from 'react-images';
//import Masonry from 'react-photo-gallery';
import Masonry from 'react-masonry-component';
// import styles
import galeriaStyles from './galeriaStyles';
// nodejs libr, ary that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import lightboxStyles from './lightboxStyles';

class Galeria extends React.Component{

  constructor(props) {
    super(props);
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, key) {
    this.setState({
      currentImage: Number(event.target.id),
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render(){

    const { classes } = this.props

    const fotos = this.props.fotosMasonry.map(function(item,i){
      return(
        <img
          src={item}
          key={i}
          id={i}
          className={classes.imagen}
        />
      )
    });

    const masonryOptions = {
      gutter: 5,
      horizontalOrder: true,
      fitWith: true,
    };

    return(
      <React.Fragment>
        <div id={this.props.id} style={{paddingTop: '100px'}}>
        <h2 className={classes.titulo}>{this.props.titulo}</h2>
        <p className={classes.fecha}>{this.props.fecha}</p>
        <Lightbox images={this.props.fotosLigthBox}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            //showImageCount={false}
          //  showThumbnails={true}
            imageCountSeparator=' de '
            theme={lightboxStyles}
          />
      <Masonry
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          options={masonryOptions}
          className={classes.galeryContainer}
          onClick={this.openLightbox}

      >
          {fotos}
      </Masonry>
      </div>
     </React.Fragment>
    )
  }

}

export default withStyles(galeriaStyles)(Galeria);
