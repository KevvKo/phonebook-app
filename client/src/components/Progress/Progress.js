import React from 'react';
// Components
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

function Progress() {
  return (
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={ true }
    >
        <CircularProgress data-testid='progress-spinner' color='inherit' />
    </Backdrop>
  );
}

export default Progress;
