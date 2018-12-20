import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InputElement from './InputElement'
import FloatingAddButton from './FloatingAddButton'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: 'transparent',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class InputList extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"
        className={classes.root}
      >
        <ListItem disableGutters>
          <InputElement />
        </ListItem>
        <FloatingAddButton />
      </List>
      
    );
  }
}

InputList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputList);
