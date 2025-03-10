import { Container, MenuItem, Select, FormControl, Button, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CelestialBody, celestialPositions } from '../data/celestialBodies';
import { useSMContext } from '../context/smContext';

const CreateBusiness: React.FC = (): React.ReactElement => {
    const [businessDetails, setBusinessDetails] = useState({
        ownerName: '',
        businessName: '',
        headquarters: '',
    });
    const {
        //gameObject, setGameObject,
        setView
    } = useSMContext();
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setBusinessDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (event: any) => {
        const { name, value } = event.target;
        setBusinessDetails(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                p: 3,
                background: 'black',
                color: 'red'
            }}>
                {/* Left Column: Form */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" gap={2} mt={4}>
                        <Typography variant="h5" color="primary">Create Your Business</Typography>

                        {/* Owner Name Input */}
                        <Typography>What is your name:</Typography>
                        <input
                            id="ownerName"
                            name="ownerName"
                            type="text"
                            value={businessDetails.ownerName}
                            onChange={handleInputChange}
                            style={{ backgroundColor: 'black', color: 'white' }}
                        />

                        {/* Business Name Input */}
                        <Typography>Name your business:</Typography>
                        <input
                            id="businessName"
                            name="businessName"
                            type="text"
                            value={businessDetails.businessName}
                            onChange={handleInputChange}
                            style={{ backgroundColor: 'black', color: 'white' }}
                        />

                        {/* Select Headquarters Location */}
                        <FormControl fullWidth>
                            <Typography>Select headquarters location</Typography>
                            <Select
                                id="selectHeadquarters"
                                name="headquarters"
                                value={businessDetails.headquarters}
                                onChange={handleSelectChange}
                                sx={{
                                    color: 'white',
                                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }
                                }}
                            >
                                <MenuItem value="" disabled>Select a location</MenuItem>
                                {celestialPositions.map((body: CelestialBody) => (
                                    <MenuItem key={body.name} value={body.name}>{body.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* Start Button */}
                        {businessDetails.ownerName && businessDetails.businessName && businessDetails.headquarters ? (
                            <Button variant="contained" color="primary" onClick={
                                () =>
                                    setView('play')
                            }>
                                Start Your Business
                            </Button>
                        ) : (
                            <Typography variant="body1" color="textSecondary">
                                Fill in all details to start your business.
                            </Typography>
                        )}
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default CreateBusiness;
