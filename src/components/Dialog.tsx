import {  Dialog } from '@mui/material';
import React from 'react';
import { useSMContext } from '../context/smContext';

const InventoryDialog: React.FC = (): React.ReactElement => {
    const { dialogOpen, setDialogOpen } = useSMContext();
    return (
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            dia
        </Dialog>
    );
}

export default InventoryDialog; 