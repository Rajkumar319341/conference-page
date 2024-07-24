import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { APIData, org } from '../Authentication/APIData';
import { TextField, Button, Container, Typography, Grid, MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Schedule = () => {
  const [formData, setFormData] = useState({
    title: '',
    provEmailId: '',
    custEmailId: '',
    description: '',
    startTime: '',
    endTime: '',
  });

  const [toOption, setToOption] = useState('All');
  const [department, setDepartment] = useState('');
  const [emails, setEmails] = useState([]);
  const [externalEmails, setExternalEmails] = useState('');

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        if (toOption === 'All') {
          const url = APIData.api1 + `employee/emails?org=${org}`;
          const response = await axios.get(url, { headers: APIData.headers });
          setEmails(response.data);
          setFormData((prevData) => ({
            ...prevData,
            custEmailId: response.data.join(', '),
          }));
        } else if (toOption === 'Department' && department) {
          const url = APIData.api1 + `employee/email?department=${department}&org=${org}`;
          const response = await axios.get(url, { headers: APIData.headers });
          setEmails(response.data);
          setFormData((prevData) => ({
            ...prevData,
            custEmailId: response.data.join(', '),
          }));
        }
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    fetchEmails();
  }, [toOption, department]);

  const handleToChange = (e) => {
    const selectedOption = e.target.value;
    setToOption(selectedOption);
    setDepartment('');
    setEmails([]);
    setFormData((prevData) => ({
      ...prevData,
      custEmailId: '',
    }));
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleExternalEmailsChange = (e) => {
    setExternalEmails(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const internalEmails = formData.custEmailId ? formData.custEmailId.split(',').map((email) => email.trim()) : [];

    const externalEmailList = externalEmails ? externalEmails.split(',').map((email) => email.trim()) : [];

    const allEmails = [...new Set([...internalEmails, ...externalEmailList])].join(', ');

    const formattedData = {
      ...formData,
      custEmailId: allEmails.split(',').map((email) => email.trim()),
    };

    try {
      const url = APIData.api + 'web-conf/meeting';
      const response = await axios.post(url, formattedData, { headers: APIData.headers });
      console.log('Meeting scheduled successfully:', response.data);
      toast.success("Meeting scheduled Successfully");
    } catch (error) {
      console.error('Error scheduling meeting:', error);
      toast.error(error)
    }
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>To</InputLabel>
              <Select value={toOption} onChange={handleToChange}>
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Department">Department</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {toOption === 'Department' && (
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Department</InputLabel>
                <Select value={department} onChange={handleDepartmentChange}>
                  <MenuItem value="TECHNICAL">TECHNICAL</MenuItem>
                  <MenuItem value="SALES">SALES</MenuItem>
                  <MenuItem value="FINANCE">FINANCE</MenuItem>
                  <MenuItem value="HR">HR</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          )}
          <Grid item xs={12}>
            <TextField
              label="External Email IDs"
              value={externalEmails}
              onChange={handleExternalEmailsChange}
              fullWidth
              helperText="Email IDs should be comma separated"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Provider Email ID"
              name="provEmailId"
              value={formData.provEmailId}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Org Email IDs"
              name="custEmailId"
              value={formData.custEmailId}
              onChange={handleChange}
              fullWidth
              // required
              helperText="Email IDs should be comma separated"
              disabled={toOption === 'Department' && emails.length > 0}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Subject"
              name="title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Body"
              name="description"
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Start Time"
              name="startTime"
              type="datetime-local"
              value={formData.startTime}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="End Time"
              name="endTime"
              type="datetime-local"
              value={formData.endTime}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ padding: '10px' }}
            >
              Schedule
            </Button>
          </Grid>

        </Grid>
        <ToastContainer />
      </form>
    </Container>
  );
};

export default Schedule;
