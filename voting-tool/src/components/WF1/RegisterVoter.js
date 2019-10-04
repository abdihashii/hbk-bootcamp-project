import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import AddNewVoterModal from './AddNewVoterModal';
import ListVoterModal from './ListVoterModal';

const RegisterVoter = (props) => {
  const {
    refreshVoters, createVoter, updateVoter, deleteVoter, deleteMultipleVoters,
    voters, editVoterId, sortAscAction, editVoterIdAction,
  } = props;

  useEffect(() => {
    refreshVoters();
  }, [refreshVoters]);

  const [openAdd, setOpenAdd] = useState(false);
  const [openList, setOpenList] = useState(false);

  const handleAddOpen = () => setOpenAdd(true);
  const handleAddClose = () => setOpenAdd(false);
  const handleListOpen = () => setOpenList(true);
  const handleListClose = () => setOpenList(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleAddOpen}>Register Voter</Button>
      <Button variant="contained" color="secondary" onClick={handleListOpen}>See List of Voters</Button>
      <AddNewVoterModal
        createVoter={createVoter}
        onClose={handleAddClose}
        open={openAdd}
      />
      <ListVoterModal
        updateVoter={updateVoter}
        deleteVoter={deleteVoter}
        deleteMultipleVoters={deleteMultipleVoters}
        sortAscAction={sortAscAction}
        voters={voters}
        editId={editVoterId}
        setEditId={editVoterIdAction}
        onClose={handleListClose}
        open={openList}
      />
    </>
  );
};

export default RegisterVoter;
