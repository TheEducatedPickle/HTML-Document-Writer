import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menubar: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
  }
};

function MenuBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.menubar} position="static">
          <Typography variant="h6" color="inherit" className={classes.grow}>
            To Do
          </Typography>
      </AppBar>
    </div>
  );
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);
