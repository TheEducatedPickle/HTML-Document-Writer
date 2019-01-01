import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      text: this.props.text
    };
    this.handleSetAttributes = this.handleSetAttributes.bind(this)
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      open: newProps.open,
      text: newProps.text,
    });
  }

  handleSetAttributes() {
    this.props.onSetAttributes(this.state.text);
    this.props.toggleDialog();
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.props.toggleDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Attributes</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Set attributes for your <b>{this.props.type}</b> tag here
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Attributes"
              type="text"
              fullWidth
              value={this.state.text}
              onChange={(e) => this.setState({text: e.target.value})}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.toggleDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSetAttributes} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}