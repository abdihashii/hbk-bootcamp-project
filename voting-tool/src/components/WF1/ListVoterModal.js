import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const ListVoterModal = (props) => {
  console.log(props);
  const { open, onClose } = props;

  return (
    <Dialog onClose={onClose} aria-labelledby="add-new-voter-modal" open={open}>
      <DialogTitle>List Voters</DialogTitle>
      <DialogContent>LIST GOES HERE</DialogContent>
      <DialogActions>ACTIONS GO HERE</DialogActions>
    </Dialog>
  );
};

export default ListVoterModal;
