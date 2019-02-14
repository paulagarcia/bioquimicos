import React from 'react';
// PDF components
import PDF from '../PDF/PDF';
import Login from '../Login/Login';
import CartelInformativo from '../CartelInformativo/CartelInformativo';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
//Import personal styles
import conveniosStyles from './conveniosStyles';

class VistaConvenio extends React.Component{
  constructor(props){
    super(props)
  };

  state = {
    isLoggedIn: false
  }

  isLogged = (valor) => {
    this.setState({isLoggedIn: valor})
  }

  render(){
    const { classes } = this.props
    return(
      <>
      <Login isLogged={this.isLogged} />

      {this.state.isLoggedIn ? (
        <div>
          {this.props.pdf != 'assets/pdf/' ?
            <PDF pdf={this.props.pdf} clase='pagina'/>
            : <CartelInformativo texto='Seleccione un convenio para visualizarlo'/> }
        </div>)
      : null }

      </>
    )

  }

}
export default withStyles(conveniosStyles)(VistaConvenio);
