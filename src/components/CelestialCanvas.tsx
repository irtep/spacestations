import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
//import { CelestialAsset } from '../data/celestialAssets';
import { CelestialBody, celestialPositions } from '../data/celestialBodies';
import { canvasSize, centerX, centerY } from '../measures/measures';

const CelestialCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [showRoutes, setShowRoutes] = useState(true);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedCelestial, setSelectedCelestial] = useState<CelestialBody | null>(null);
    

    
    // Adjust moon orbits to avoid overlap
    celestialPositions.forEach(body => {
        if (body.parent) {
            const parentBody = celestialPositions.find(b => b.name === body.parent);
            if (parentBody) {
                // Adjust moon's orbit so it does not overlap the parent
                const minOrbitRadius = parentBody.radius + body.radius + 2; // Add a small buffer
                if (body.orbitRadius < minOrbitRadius) {
                    body.orbitRadius = minOrbitRadius;
                }
            }
        }
    });
    const handleClickCelestial = (body: CelestialBody) => {
        setSelectedCelestial(body);
        setOpenDialog(true);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (showRoutes) {
            ctx.strokeStyle = "gray";
            ctx.lineWidth = 1;
            celestialPositions.forEach(body => {
                if (body.orbitRadius > 0 && !body.parent) {
                    ctx.beginPath();
                    ctx.arc(centerX, centerY, body.orbitRadius, 0, Math.PI * 2);
                    ctx.stroke();
                }
            });
        }

        celestialPositions.forEach(body => {
            let parentX = centerX;
            let parentY = centerY;

            if (body.parent) {
                const parent = celestialPositions.find(b => b.name === body.parent);
                if (parent) {
                    parentX = centerX + parent.orbitRadius * Math.cos(parent.angle);
                    parentY = centerY + parent.orbitRadius * Math.sin(parent.angle);
                }
            }

            const x = parentX + body.orbitRadius * Math.cos(body.angle);
            const y = parentY + body.orbitRadius * Math.sin(body.angle);

            ctx.beginPath();
            ctx.arc(x, y, body.radius, 0, Math.PI * 2);
            ctx.fillStyle = body.color;
            ctx.fill();

            ctx.fillStyle = body.color;
            ctx.fillText(body.name, x + body.radius + 5, y);

            // Detect click on celestial body
            canvas.addEventListener('click', (event) => {
                const distance = Math.sqrt(Math.pow(event.offsetX - x, 2) + Math.pow(event.offsetY - y, 2));
                if (distance < body.radius) {
                    handleClickCelestial(body);
                }
            });
        });
    }, [showRoutes]);

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedCelestial(null);
    };

    return (
        <div style={{ display: 'flex' }}>
            {/* Fixed Top Left Components */}
            <div style={{ position: 'fixed', top: 0, left: 0, padding: '10px', zIndex: 10, background: 'rgba(0, 0, 0, 0.7)', color: 'white' }}>
                <h3>Controls</h3>
                <button onClick={() => setShowRoutes(!showRoutes)} style={{ marginBottom: '10px', color: 'white', background: 'gray', border: 'none', padding: '5px 10px' }}>
                    Toggle Routes
                </button>
            </div>
            {/* Canvas */}
            <canvas ref={canvasRef} width={canvasSize} height={canvasSize} style={{ border: '1px solid white', background: 'black' }} />
            
            {/* Dialog */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>{selectedCelestial?.name}</DialogTitle>
                <DialogContent>
                    {selectedCelestial && (
                        <>
                            <p>{selectedCelestial.name} Information</p>
                            <img
                                src={`/images/${selectedCelestial.name.toLowerCase()}.jpg`} 
                                alt={selectedCelestial.name}
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <p>Orbit Radius: {selectedCelestial.orbitRadius}</p>
                            <p>Radius: {selectedCelestial.radius}</p>
                            <p>Color: {selectedCelestial.color}</p>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CelestialCanvas;
