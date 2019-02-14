import React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { pdfjs } from 'react-pdf';
import withStyles from "@material-ui/core/styles/withStyles";
import LinearBuffer from '../Loading/Loading';

const styles = theme => ({
  pdfContainer:{
    overflow: 'auto'
  },
  pagina: {
    '& > div:first-child':{
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        margin: '0 auto'
    }
  },
});

class PDF extends React.Component{
  constructor(props){
    super(props)
  };
  state = {
    numPages: null,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages })
    }

  render() {
    const { numPages } = this.state;
    const paginasTotal = Array(this.state.numPages).fill(0).map((e,i)=>i+1)
    const { classes } = this.props;
    var clase = this.props.clase ? classes.pagina : ''
    const getPdfWidth = () => {
     if (window.innerWidth <= 1279) {
       return (window.innerWidth - 30);
     }
     return 900
    }

    return (
      <div className={classes.pdfContainer}>
      <Document
        file={this.props.pdf}
        onLoadSuccess={this.onDocumentLoadSuccess}
        renderMode='svg'
        loading= <LinearBuffer />
      >
      {paginasTotal.map(page => (
        <Page
          pageNumber={page}
          width={getPdfWidth()}
          key={page}
          renderMode='svg'
          className={clase}
          loading= ''
        />
      ))}
      </Document>
      </div>
    )
  }
}

export default withStyles(styles)(PDF);
