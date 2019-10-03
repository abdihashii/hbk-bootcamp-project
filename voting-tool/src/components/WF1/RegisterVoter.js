import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import AddNewVoterModal from './AddNewVoterModal';
import ListVoterModal from './ListVoterModal';

const RegisterVoter = (props) => {
  const {
    refreshVoters, createVoter, updateVoter, deleteVoter,
    voters,
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

  console.log(props);
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleAddOpen}>Open Add</Button>
      <Button variant="contained" color="secondary" onClick={handleListOpen}>Open List</Button>
      <AddNewVoterModal
        createVoter={createVoter}
        onClose={handleAddClose}
        open={openAdd}
      />
      <ListVoterModal
        updateVoter={updateVoter}
        deleteVoter={deleteVoter}
        voters={voters}
        onClose={handleListClose}
        open={openList}
      />
    </>
  );
};

export default RegisterVoter;
