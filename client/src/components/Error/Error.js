import React from 'react';
// Components
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
// Hooks
import { useTranslation } from 'react-i18next';

function Error() {

    const [ t ] = useTranslation('common');
    return (
        <Box sx={{ display: 'flex' }}>
            <Alert data-testid={'error-message'} severity="error">{ t('error.message') } </Alert>
        </Box>
    );
}

export default Error;
