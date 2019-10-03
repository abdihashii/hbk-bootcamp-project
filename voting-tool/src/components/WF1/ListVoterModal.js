import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import VoterRow from './VoterRow';
import ListTableHeader from './ListTableHeader';

const AddNewVoterModal = (props) => {
  const {
    open, onClose, voters,
    updateVoter, deleteVoter, deleteMultipleVoters,
    sortAscAction,
  } = props;

  const [ editId, setEditId ] = useState(-1);
  const [ isChecked, setChecked ] = useState({});
  const [ isAnythingChecked, setIsAnythingChecked ] = useState(false);

  const onToggleChecked = (voterId) => {
    const newSelection = !isChecked[voterId];
    if (newSelection) {
      setIsAnythingChecked(true);
    } else {
      let hasCheck = false;
      Object.keys(isChecked).forEach((key) => {
        if (parseInt(key, 10) !== parseInt(voterId, 10) && isChecked[key]) {
          hasCheck = true;
        }
      });
      setIsAnythingChecked(hasCheck);
    }

    setChecked({
      ...isChecked,
      [voterId]: newSelection,
    });
  };

  const handleSave = (voter) => {
    updateVoter(voter);
    setEditId(-1);
  }

  const handleMultiDelete = () => {
    const toDelete = [];
    Object.keys(isChecked).forEach((key) => {
      if (isChecked[key]) {
        toDelete.push(key);
      }
    });
    deleteMultipleVoters(toDelete);
    setChecked({});
    setIsAnythingChecked(false);
  }

  return (
    <Dialog onClose={onClose} aria-labelledby="list-voters-modal" open={open} maxWidth="lg">
      <DialogTitle>List Voters</DialogTitle>
      <DialogContent>
        <table>
          <tbody>
            <ListTableHeader sortAscAction={sortAscAction} />
            { voters.map((voter, i) => {
              const isEditing = editId === i;
              const onEdit = () => !isEditing ? setEditId(i) : setEditId(-1);
              const onCheck = () => onToggleChecked(voter.id);
              const onDelete = () => deleteVoter(voter.id);

              return (
                <VoterRow
                  key={voter.id}
                  voter={voter}
                  isEditing={isEditing}
                  isChecked={isChecked[voter.id]}
                  onCheck={onCheck}
                  onEdit={onEdit}
                  onSave={handleSave}
                  onDelete={onDelete}
                />
              );
            })}
          </tbody>
        </table>
      </DialogContent>
      <DialogActions>
        {isAnythingChecked && <Button variant="contained" color="primary" onClick={handleMultiDelete}>Delete Selected Voters</Button> }
        <Button variant="contained" color="secondary" onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewVoterModal;
