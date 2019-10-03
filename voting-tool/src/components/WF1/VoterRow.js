import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const VoterRow = props => {
  const {
    voter: {
      id,
      firstName: dFirstName,
      lastName: dLastName,
      address: dAddress,
      city: dCity,
      birthDate: dBirthDate,
      email: dEmail,
      phone: dPhone
    },
    isEditing,
    isChecked, onCheck,
    onEdit, onSave, onDelete,
  } = props;

  const [firstName, setFirstName] = useState(dFirstName);
  const [lastName, setLastName] = useState(dLastName);
  const [address, setAddress] = useState(dAddress);
  const [city, setCity] = useState(dCity);
  const [birthDate, setBirthDate] = useState(dBirthDate);
  const [email, setEmail] = useState(dEmail);
  const [phone, setPhone] = useState(dPhone);

  const handleChange = (setter) => (e) => setter(e.target.value);
  const handleSave = () => onSave({
    id, firstName, lastName, address,
    city, birthDate, email, phone,
  });

  const tdStyle = {
    borderLeft: '1px solid black',
    paddingLeft: 5,
  };

  return (
    <tr>
      <td style={tdStyle}><Checkbox checked={isChecked} onChange={onCheck} /></td>
      <td style={tdStyle}>{id}</td>

      <td style={tdStyle}>{
        isEditing ?
          <TextField label="First Name" value={firstName} onChange={handleChange(setFirstName)} fullWidth />
          : firstName
      }</td>
      <td style={tdStyle}>{
        isEditing ?
          <TextField label="Last Name" value={lastName} onChange={handleChange(setLastName)} fullWidth />
          : lastName
      }</td>
      <td style={tdStyle}>{
        isEditing ?
          <TextField label="Address" value={address} onChange={handleChange(setAddress)} fullWidth />
          : address
      }</td>
      <td style={tdStyle}>{
        isEditing ?
          <TextField label="City" value={city} onChange={handleChange(setCity)} fullWidth />
          : city
      }</td>
      <td style={tdStyle}>{
        isEditing ?
          <TextField label="Birth Date" value={birthDate} onChange={handleChange(setBirthDate)} fullWidth />
          : birthDate
      }</td>
      <td style={tdStyle}>{
        isEditing ?
          <TextField label="Email" value={email} onChange={handleChange(setEmail)} fullWidth />
          : email
      }</td>
      <td style={tdStyle}>{
        isEditing ?
          <TextField label="Phone" value={phone} onChange={handleChange(setPhone)} fullWidth />
          : phone
      }</td>

      <td style={tdStyle}>
        {isEditing && <Button variant="contained" color="secondary" onClick={handleSave}>Save</Button>}
        <Button variant="contained" color="primary" onClick={onEdit}>{isEditing ? 'Cancel' : 'Edit'}</Button>
        <Button variant="contained" color="secondary" onClick={onDelete}>Delete</Button>
      </td>
    </tr>
  )
};

VoterRow.defaultProps = {
  isChecked: false,
};

export default VoterRow;
