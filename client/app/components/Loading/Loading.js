import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
    position: 'relative',
    top: '-48px',
    marginLeft: '-24px',
    marginRight: '-24px',
  },
  linearColorPrimary: {
    backgroundColor: '#a4dfe6',
  },
  linearBarColorPrimary: {
    backgroundColor: '#69c1cc',
  },
};

class LinearBuffer extends React.Component {
  state = {
    completed: 1110,
    buffer: 11110,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed > 100) {
      this.setState({ completed: 0, buffer: 10 });
    } else {
      const diff = Math.random() * 10;
      const diff2 = Math.random() * 10;
      this.setState({ completed: completed + diff, buffer: completed + diff + diff2 });
    }
  };

  render() {
    const { classes } = this.props;
    const { completed, buffer } = this.state;
    return (
      <div className={classes.root}>
        <LinearProgress
          variant="buffer"
          value={completed}
          valueBuffer={buffer}
          classes={{
            colorPrimary: classes.linearColorPrimary,
            barColorPrimary: classes.linearBarColorPrimary,
          }}
        />
      </div>
    );
  }
}


export default withStyles(styles)(LinearBuffer);
