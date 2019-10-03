import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddNewVoterModal = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const { open, onClose, createVoter } = props;

  const handleChange = (setter) => (e) => setter(e.target.value);
  const handleSubmit = () => {
    createVoter({firstName, lastName, address, city, birthDate, email, phone});
    onClose();
  };

  return (
    <Dialog onClose={onClose} aria-labelledby="add-new-voter-modal" open={open}>
      <DialogTitle>Add a New Voter</DialogTitle>
      <DialogContent>
        <TextField label="First Name" value={firstName} onChange={handleChange(setFirstName)} fullWidth />
        <TextField label="Last Name" value={lastName} onChange={handleChange(setLastName)} fullWidth />
        <TextField label="Address" value={address} onChange={handleChange(setAddress)} fullWidth />
        <TextField label="City" value={city} onChange={handleChange(setCity)} fullWidth />
        <TextField label="Birth Date" value={birthDate} onChange={handleChange(setBirthDate)} fullWidth />
        <TextField label="Email" value={email} onChange={handleChange(setEmail)} fullWidth />
        <TextField label="Phone" value={phone} onChange={handleChange(setPhone)} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Complete Registration</Button>
        <Button variant="contained" color="secondary" onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewVoterModal;
