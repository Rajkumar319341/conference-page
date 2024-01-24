import React, { useState } from 'react';
import { Typography, Grid, Button, Card, CardContent, Link, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";
import Schedule from '../Meeting/Schedule'; // Import your form component
import '../App.css';

export const AboutUs = () => {
  const [isFormOpen, setFormOpen] = useState(false);

  const handleOpenForm = () => {
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
  };

  return (
    <div className="about-us-container">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{ margin: "2rem" }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Meeting
              </Typography>
              <Typography>Create a meeting, invite participants, and interact through screen sharing and audio/video conferencing.</Typography>
              <br />
              <br />
              <Button variant="contained" color="primary">
                Meet Now
              </Button>
              <Button variant="outlined" color="primary" style={{ marginLeft: '8px' }} onClick={handleOpenForm}>
                Schedule
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog open={isFormOpen} onClose={handleCloseForm} fullWidth maxWidth="sm">
        <DialogTitle>Schedule Meeting</DialogTitle>
        <DialogContent>
          <Schedule/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};