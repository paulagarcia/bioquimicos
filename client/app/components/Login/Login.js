import React from 'react';
// Login
import 'whatwg-fetch';
import { getFromStorage, setInStorage, clearStorage} from '../../utils/storage';
// Material Components and Styles
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Chip from '@material-ui/core/Chip';
// Personal component
import CartelInformativo from '../CartelInformativo/CartelInformativo';
import CartelTemporal from '../CartelTemporal/CartelTemporal';
import LinearBuffer from '../Loading/Loading';
// styles
import loginStyles from './loginStyles';

class Login extends React.Component{
  constructor(props){
    super(props)

  this.state = {
    isLoading: true,
    token: '',
    signInError: '',
    signInName: '',
    signInPassword: '',
    message: '',
    nombre: '',
  }

  this.onTextboxChangeSignInName = this.onTextboxChangeSignInName.bind(this);
  this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);

  this.onSignIn = this.onSignIn.bind(this);
  this.logout = this.logout.bind(this);
};

  componentDidMount() {
    const obj = getFromStorage('colebiosanjuan');
    if (obj && obj.token) {
      const token  = obj.token;
      this.setState({nombre: obj.user });
      this.props.isLogged(true);
      // Verify token
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  onTextboxChangeSignInName(event) {
    this.setState({
      signInName: event.target.value,
      nombre: event.target.value,
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onSignIn() {
    // Grab state
    const {
      signInName,
      signInPassword,
    } = this.state;


    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: signInName,
        password: signInPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          setInStorage('colebiosanjuan', { token: json.token, user: signInName });
          this.props.isLogged(true)
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInPassword: '',
            signInName: '',
            token: json.token,
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
      });
  }

  logout() {
    this.setState({
      isLoading: true,
    });
    const obj = getFromStorage('colebiosanjuan');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/logout?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: '',
              isLoading: false,
            });
            clearStorage('colebiosanjuan');
            this.props.isLogged(false);
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  render(){
    const { classes } = this.props;
    const { isLoading, token, signInError, signInName, signInPassword } = this.state;

    if (isLoading) {
      return (<LinearBuffer />);
    }

    if (!token) {
      return (
        <>
          {/* Errores*/}
            {
              (signInError) ? (
                <CartelTemporal
                  contenido={signInError}
                  tipo='error'
                />
              ) : (null)
            }

          {/*Login Form*/}
            <CartelInformativo texto='Para visualizar los convenios debe iniciar sesión' />
            <FormControl className={classes.formContainer}>
              <div className={classes.personContainer}>
                <EditIcon className={classes.person} />
              </div>
              <TextField
                required
                id="name"
                label="Usuario"
                className={classes.textField}
                type="text"
                margin="normal"
                value={signInName}
                onChange={this.onTextboxChangeSignInName}
                InputLabelProps={{
                  FormLabelClasses: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                  },
                }}
              />
              <TextField
                required
                id="password"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                value={signInPassword}
                onChange={this.onTextboxChangeSignInPassword}
                InputLabelProps={{
                  FormLabelClasses: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                  },
                }}
              />
              <Button className={classes.loginButton} onClick={this.onSignIn}>Aceptar</Button>
            </FormControl>
            <CartelInformativo
              texto='Si no tiene usuario, póngase en contacto con nosotros. recepcion@colebiosanjuan.com.ar'
            />
        </>
      );
    }

    return (
      <>
      <div className={classes.loggedHeader}>
        <p className={classes.welcome}>Bienvenido <span>{this.state.nombre}</span></p>
          <Chip
            label="Cerrar Sesión"
            onDelete={this.logout}
            onClick={this.logout}
            className={classes.logoutButton}
          />
        </div>
      </>
    );
  }
}

export default withStyles(loginStyles)(Login);
