import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddNewVoterModal = (props) => {
  console.log(props);
  const {open, onClose} = props;

  return (
    <Dialog onClose={onClose} aria-labelledby="add-new-voter-modal" open={open}>
      <DialogTitle>Add A New Voter</DialogTitle>
      <DialogContent>FORM GOES HERE</DialogContent>
      <DialogActions>ACTIONS GO HERE</DialogActions>
    </Dialog>
  );
};

export default AddNewVoterModal;
