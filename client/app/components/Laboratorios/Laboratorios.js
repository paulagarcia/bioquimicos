import React from 'react';
import 'whatwg-fetch';
// Styles
import laboratoriosStyles from './laboratoriosStyles';
import withStyles from "@material-ui/core/styles/withStyles";
//Import header component
import Header from '../Header/Header.js';
import HeaderLinks from '../Header/HeaderLinks';
// Material Components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

// Avoid warning from typography v2 Material UI
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

class Laboratorios extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      laboratorios: [],
      page: 0,
      rowsPerPage: 25,
      filter:[],
      categoria: '_id',
    };
  }

  componentDidMount() {
      document.getElementById('laboratorios').scrollIntoView(true, {block: 'start'})

      fetch('/api/laboratorios')
        .then(res => res.json())
        .then(json => {
          this.setState({
            laboratorios: json
          });
          this.setState({
            filter: json
          });
        })
    }


  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleChangeCategoria = event => {
    this.setState({categoria: event.target.value})
  }

  filterList = (event) => {
    var updatedList = this.state.laboratorios;
    var categoria = this.state.categoria.toString();
    updatedList = updatedList.filter(function(item){
      if (categoria !== 'profesionales') {
        return item[categoria].toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
        } else {
          var profs = item.profesionales.join('');
          return profs.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        }
    });
    this.setState({filter: updatedList});
  }

  render() {
    const { classes } = this.props;
    const { laboratorios, rowsPerPage, page, filter } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, filter.length - page * rowsPerPage);
    const categorias = [{value: '_id',label: 'Nombre',},{value: 'profesionales',label: 'Profesional',},
      {value: 'departamento',label: 'Departamento',},{value: 'direccion',label: 'Domicilio',},];
    return (
      <React.Fragment>
        <Header
          color="white"
          brand=""
          rightLinks={<HeaderLinks />}
          fixed
        />
        <div className={classes.main} id='laboratorios'>
          <div className={classes.container}>
            <h2 className={classes.sectionTitle}>Laboratorios</h2>
            <Grid container justify="center" className={classes.searchContainer} spacing={32}>
              <Grid item xs={12} sm={6}>
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
                  //fullWidth
                  onChange={this.filterList}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="categoria-select"
                  select
                  //fullWidth
                  variant="outlined"
                  className={classes.textField}
                  value={this.state.categoria}
                  onChange={this.handleChangeCategoria}
                  InputLabelProps={{
                    FormLabelClasses: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">Por:</InputAdornment>,
                    classes: {
                      root: classes.cssSelect,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}

                >
                  {categorias.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <div className={classes.tableContainer}>
            <Table className={classes.table}>
                <TableHead>
                  <TableRow className={classes.head}>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Profesionales</TableCell>
                    <TableCell>Departamento</TableCell>
                    <TableCell>Domicilio</TableCell>
                    <TableCell numeric>Teléfono</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filter.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function(laboratorio, i){
                    return (
                      <TableRow key={i} className={classes.row}>
                        <TableCell component="th" scope="row" className={classes.nombre}>
                          {laboratorio._id}
                        </TableCell>
                        <TableCell>
                          {laboratorio.profesionales.map(function(pro,i){
                            return(
                              <p key={i}>{pro}</p>
                            )
                          })
                          }
                        </TableCell>
                        <TableCell>{laboratorio.departamento}</TableCell>
                        <TableCell>{laboratorio.direccion}</TableCell>
                        <TableCell numeric>{laboratorio.telefono}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              <TablePagination
                  component="div"
                  count={filter.length}
                  rowsPerPage={rowsPerPage}
                  labelRowsPerPage='Filas por página:'
                  labelDisplayedRows={({ from, to, count }) => `Filas ${from} a ${to} de ${count}`}
                  page={page}
                  backIconButtonProps={{
                    'aria-label': 'Previous Page',
                  }}
                  nextIconButtonProps={{
                    'aria-label': 'Next Page',
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </div>
            </div>
          </div>
        </React.Fragment>
    );
  }
}


export default withStyles(laboratoriosStyles)(Laboratorios);
