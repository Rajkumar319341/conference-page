// import React from 'react';
// import { Button, Grid, TextField, Typography } from '@material-ui/core';


// const handleSubmit = async (e)=> {
//      e.preventDefault();
// //    const data = new FormData(e.currentTarget);


//   const appointmentData = {
//     id:0,
//     customer:e.target.to.value,
//     provider:e.target.from.value,
//     instituteId:e.target.instituteId.value,
//     mode:e.target.mode.value,
//     cost:e.target.cost.value,
//     skill:e.target.skill.value,
//     venue:0,
//     invoice:"",
//     location:e.target.location.value,
//     meetLink:e.target.meetingLink.value,
//     status:e.target.status.value,
//     canceler:"",
//     canceledAt:"",
//     end:"2024-01-24T06:04",
//     start:"2024-01-24T05:04",
//     description:e.target.description.value
// };

// try {
//     var basicAuth = "Basic " + btoa("admin".concat(":", "Smarter@1234"));
//   const response = await fetch('https://appointments-shikshakpro.care4edu.com/consumer/appointments/book  ', {
//     method: 'POST',
    
//     headers: {
//         'Authorization': basicAuth,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(appointmentData),
//   });
//  console.log(response.body);
//  console.log(response.status);
//   if (response.ok) {
//     alert("success");
    
//   } else {
//     alert("Not succeesss")
   
//   }
// } catch (error) {
//   console.error('Error:', error);
// }
// }

// const Schedule = () => {
//   return (
    
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//         <Typography variant="subtitle1">From</Typography>
//         <TextField required
//                   fullWidth
//                   id="from"
                  
//                   name="from"
//                   type="string"
//                   autoComplete="from" />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <Typography variant="subtitle1">To</Typography>
//         <TextField fullWidth   id="to"
                 
//                   name="to"
//                   type="string"
//                   autoComplete="to" />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <Typography variant="subtitle1">Institute ID</Typography>
//         <TextField fullWidth  id="instituteId"
                  
//                   name="instituteId"
//                   type="string"
//                   autoComplete="instituteId"/>
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <Typography variant="subtitle1">Mode</Typography>
//         <TextField fullWidth  id="mode"
                  
//                   name="mode"
                  
//                   type="string"
//                   autoComplete="mode" />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <Typography variant="subtitle1">Cost</Typography>
//         <TextField fullWidth  id="cost"
                
//                   name="cost"
//                   type="string"
//                   autoComplete="cost" />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <Typography variant="subtitle1">Skill</Typography>
//         <TextField fullWidth id="skill"
                 
//                   name="skill"
//                   type="string"
//                   autoComplete="skill" />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <Typography variant="subtitle1">Location</Typography>
//         <TextField fullWidth id="location"
                  
//                   name="location"
//                   type="string"
//                   autoComplete="Location" />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <Typography variant="subtitle1">Meeting Link</Typography>
//         <TextField fullWidth id="meetingLink"
                 
//                   name="meetingLink"
//                   type="string"
//                   autoComplete="meetingLink" />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <Typography variant="subtitle1">Status</Typography>
//         <TextField fullWidth  id="status"
                  
//                   name="status"
//                   type="string"
//                   autoComplete="status"/>
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <Typography variant="subtitle1">Start Date</Typography>
//         <TextField fullWidth  id="startDate"
                  
//                   name="startDate"type="date" />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <Typography variant="subtitle1">End Date</Typography>
//         <TextField fullWidth id="endDate"
                  
//                   name="endDate" type="date" />
//       </Grid>
//       <Grid item xs={12}>
//         <Typography variant="subtitle1" >Description</Typography>
//         <TextField multiline fullWidth id="description"
                 
//                   name="description"
//                   type="string"
//                   autoComplete="description" rows={4} />
//       </Grid>
//       <Grid item xs={12}>
//         <Button variant='contained' color='secondary' onClick={handleSubmit}> Schedule</Button>
//       </Grid>
//     </Grid>
       
//   );

// };


// export default Schedule;


import React from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';




export default function Schedule() {




    const handleSubmit = async (e)=> {
     e.preventDefault();
//    const data = new FormData(e.currentTarget);


  const appointmentData = {
    id:0,
    customer:e.target.to.value,
    provider:e.target.from.value,
    instituteId:e.target.instituteId.value,
    mode:e.target.mode.value,
    cost:e.target.cost.value,
    skill:e.target.skill.value,
    venue:0,
    invoice:"",
    location:e.target.location.value,
    meetLink:e.target.meetingLink.value,
    status:e.target.status.value,
    canceler:"",
    canceledAt:"",
    end:"2024-01-24T06:04",
    start:"2024-01-24T05:04",
    description:e.target.description.value
};
console.log(appointmentData);
try {
    var basicAuth = "Basic " + btoa("c4econsumer".concat(":", "3G2F4D5S7A8Q9W0E1R2T6Y4U8I3O9P5"));
  const response = await fetch('https://appointments-shikshakpro.care4edu.com/consumer/appointments/book  ', {
    method: 'POST',
    
    headers: {
        'Authorization': basicAuth,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appointmentData),
  });
 console.log(response.body);
 console.log(response.status);
  if (response.ok) {
    alert("success");
    
  } else {
    alert("Not succeesss")
   
  }
} catch (error) {
  console.error('Error:', error);
}
}


  return (
    <div>
        <form  onSubmit={handleSubmit}>
        <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1">From</Typography>
        <TextField required
                  fullWidth
                  id="from"
                  
                  name="from"
                  type="string"
                  autoComplete="from" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1">To</Typography>
        <TextField fullWidth   id="to"
                 
                  name="to"
                  type="string"
                  autoComplete="to" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1">Institute ID</Typography>
        <TextField fullWidth  id="instituteId"
                  
                  name="instituteId"
                  type="string"
                  autoComplete="instituteId"/>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1">Mode</Typography>
        <TextField fullWidth  id="mode"
                  
                  name="mode"
                  
                  type="string"
                  autoComplete="mode" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1">Cost</Typography>
        <TextField fullWidth  id="cost"
                
                  name="cost"
                  type="string"
                  autoComplete="cost" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1">Skill</Typography>
        <TextField fullWidth id="skill"
                 
                  name="skill"
                  type="string"
                  autoComplete="skill" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1">Location</Typography>
        <TextField fullWidth id="location"
                  
                  name="location"
                  type="string"
                  autoComplete="Location" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1">Meeting Link</Typography>
        <TextField fullWidth id="meetingLink"
                 
                  name="meetingLink"
                  type="string"
                  autoComplete="meetingLink" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1">Status</Typography>
        <TextField fullWidth  id="status"
                  
                  name="status"
                  type="string"
                  autoComplete="status"/>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1">Start Date</Typography>
        <TextField fullWidth  id="startDate"
                  
                  name="startDate"type="date" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1">End Date</Typography>
        <TextField fullWidth id="endDate"
                  
                  name="endDate" type="date" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1" >Description</Typography>
        <TextField multiline fullWidth id="description"
                 
                  name="description"
                  type="string"
                  autoComplete="description" rows={4} />
      </Grid>
      <Grid item xs={12}>
        <Button variant='contained' color='secondary' type='submit'> Schedule</Button>
      </Grid>
    </Grid>
    </form>
    </div>
  )
}
