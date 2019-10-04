import React, { useState } from 'react';

import {
  Button, Input, Dialog,
  DialogContent, DialogContentText,
  DialogTitle, DialogActions
} from '@material-ui/core';

const Vote = ({goToSecondForm}) => {

  const [ inputVal, setInputVal ] = useState("");
  const [ openAlert, setOpenAlert ] = React.useState(false);

  const handleInputChange = e => {
    setInputVal(e.target.value);
  }

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const routeToBallot = () => {
    console.log(inputVal);
    goToSecondForm(inputVal)
      .then((isValid) => {
        if(isValid) {
          window.location.href = '/#/vote/ballot';
        } else {
          console.log("Please enter valid voter id");
          handleOpenAlert();
        }
      });
  };

  return (
    <div>
      <div>
        <form>
          <h3>Please Voter ID to continue to ballot</h3>
          <div>
            <Input type="number" id="voter-valid-input" onChange={handleInputChange} name="voterId" autoFocus={true} />
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={routeToBallot}>Submit</Button>
          </div>
        </form>
      </div>
      <Dialog 
        open={openAlert}
        onClose={handleCloseAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Invalid Voter ID!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please enter a valid "Voter ID" in order to continue.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleCloseAlert} color="primary" autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Vote;
