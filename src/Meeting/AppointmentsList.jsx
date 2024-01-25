import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [reason, setReason] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleGetDetails = async () => {
    try {
      var basicAuth = "Basic " + btoa("c4econsumer".concat(":", "7A2Q5W4S6E8D9R0T1Y3U2I5O4P6L8K9"));
      const response = await fetch('https://utilities-shikshakpro.care4edu.com/c4e/appointments/details', {
        method: 'GET',
        headers: {
          'Authorization': basicAuth,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
        
      } else {
        alert("Failed to fetch appointments");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUpdateAppointment = (id) => {
    setSelectedIndex(id);
    setOpenDialog(true);
  };

  useEffect(() => {
    handleGetDetails();
  }, []);
  const handleCancelAppointment = async (e) => {
    e.preventDefault();

    if (selectedIndex === null) {
      return;
    }

    const canceledAppointment = scheduledAppointments[selectedIndex];

    try {
      const basicAuth = "Basic " + btoa("c4econsumer".concat(":", "3G2F4D5S7A8Q9W0E1R2T6Y4U8I3O9P5"));

      const response = await fetch('https://appointments-shikshakpro.care4edu.com/consumer/appointments/cancel', {
        method: 'POST',
        headers: {
          'Authorization': basicAuth,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: canceledAppointment.id,
          customer: canceledAppointment.customer,
          provider: canceledAppointment.provider,
          instituteId: canceledAppointment.instituteId,
          mode: canceledAppointment.mode,
          cost: canceledAppointment.cost,
          skill: canceledAppointment.skill,
          venue: canceledAppointment.venue,
          invoice: canceledAppointment.invoice,
          location: canceledAppointment.location,
          meetLink: canceledAppointment.meetLink,
          status: canceledAppointment.status,
          canceler: canceledAppointment.customer, 
          canceledAt: "2023-09-11T12:00",
          end: canceledAppointment.end,
          start: canceledAppointment.start,
          description: reason,
        }),
      });
      const currentDateTime = new Date().toISOString();
        console.log(currentDateTime)
      if (response.ok) {
        alert("Appointment canceled successfully");
      } else {
        alert("Failed to cancel appointment");
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setSelectedIndex(null);
    setReason('');
    setOpenDialog(false);
  };

  
  const scheduledAppointments = appointments.filter(appointment => appointment.status === 'SCHEDULED');

  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Typography variant="h4" align="center" gutterBottom>
          Appointments List 
        </Typography>
        <ul>
          {scheduledAppointments.map((appointment, index) => (
            <li key={appointment.id}>
              <form
                key={appointment.id}
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdateAppointment(index);
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Provider"
                      name="provider"
                      defaultValue={appointment.provider}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Customer"
                      name="customer"
                      defaultValue={appointment.customer}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Status"
                      name="status"
                      defaultValue={appointment.status}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Id"
                      name="id"
                      defaultValue={appointment.id}
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                     Cancel
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </li>
          ))}
        </ul>
      </Grid>
      <Dialog open={openDialog && selectedIndex !== null } onClose={() => setOpenDialog(false)}>                
        <DialogTitle>Cancellation Reason  </DialogTitle>
        <DialogContent>
          
          <TextField
            fullWidth
            multiline rows={10}
            label="Reason"
            variant="outlined"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Close
          </Button>
          <Button onClick={handleCancelAppointment} color="primary">
            Cancel Appointment
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
    
  );
};

export default AppointmentsList;
