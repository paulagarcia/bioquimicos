import React from 'react';
// Material Components
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
// Personal styles
import drawerStyle from './drawerStyles';
// Vista Convenio
import VistaConvenio from './VistaConvenio';
// Lista convenios
import listaConveniosPDF from './listaConveniosPDF';
// Buscador
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

class DrawerConvenios extends React.Component {
  constructor(props){
    super(props)
  };

  state = {
    pdf: '',
    selectedIndex: 0,
    filter:[],
    convenios: [],
    mobileOpen: false,
  }

  handleClick = (fileName, index) => {
    this.setState({ pdf: fileName });
    this.setState({ selectedIndex: index });
    this.setState(state => ({ mobileOpen: false }))
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  componentDidMount(){
    this.setState({ convenios: listaConveniosPDF });
    this.setState({ filter: listaConveniosPDF });
    document.getElementById('convenios').scrollIntoView(true, {block: 'start'})
  }

  filterList = (event) => {
    var updatedList = this.state.convenios;
    updatedList = updatedList.filter(function(item){
        return item.nombre.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
    });
    this.setState({filter: updatedList});
  }

  render(){
    const { classes } = this.props;
    const fijosPDF = [
      {
        id: 100,
        nombre: 'Detalle de los códigos de facturación por Obra Social',
        pdf: 'CODIGOS-OS.pdf',
      },
      {
        id: 101,
        nombre: 'Cuadro Arancelario - UB',
        pdf: 'UB.pdf',
      }
    ]
    const listaOrdenada = listaConveniosPDF.sort(function (a, b) {
	     return (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0);
     });
    const drawer = (
      <>
      <div className={classes.searchContainer}>
      <TextField
        className={classes.textField}
        InputLabelProps={{
          FormLabelClasses: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end"><SearchIcon className={classes.searhIcon}/></InputAdornment>,
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
        id="standard-search"
        label="Buscar..."
        type="search"
        onChange={this.filterList}
        variant="outlined"
        fullWidth
      />
      </div>
      <List className={classes.lista}>
        {fijosPDF.map(fijo => (
          <ListItem button key={fijo.id}
            selected={this.state.selectedIndex === fijo.id}
            onClick={() => this.handleClick(fijo.pdf, fijo.id)}>
            <ListItemText primary={fijo.nombre} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className={classes.lista}>
        {this.state.filter.map(convenio => (
          <ListItem button key={convenio.id}
            selected={this.state.selectedIndex === convenio.id}
            onClick={() => this.handleClick(convenio.pdf, convenio.id)}>
            <ListItemText primary={convenio.nombre} className={classes.listaItem} />
          </ListItem>
        ))}
      </List>
      </>
    )
    return (
      <div className={classes.root} id='convenios'>
        <CssBaseline />
        <Hidden lgUp implementation="css">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <ChevronRight />
            </IconButton>
            <p className={classes.textoLista}>Abrir la lista de convenios</p>
          </Toolbar>
        </AppBar>
        </Hidden>
        <nav className={classes.drawer}>
        <Hidden lgUp implementation="css">
        <Drawer
          container={this.props.container}
          variant="temporary"
          anchor='left'
          open={this.state.mobileOpen}
          onClose={this.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbarCerrar}>
          <p className={classes.textoLista}>Cerrar la lista de convenios</p>
            <IconButton
              onClick={this.handleDrawerToggle}
              className={classes.buttonCerrar}
              color="inherit"
              aria-label="Open drawer"
            >
              <ChevronLeft />
            </IconButton>
          </div>
          {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <div className={classes.toolbar} />
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
            <VistaConvenio
              pdf={`assets/pdf/${this.state.pdf}`}
            />
        </main>
      </div>
    );
  }
}

export default withStyles(drawerStyle)(DrawerConvenios);
