import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';


import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
// import ApiService from '../Hoc/ApiService';
import { useSnackbar  } from 'notistack';




const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),

  }

}));


export default function InsertData(props) {

  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  
  const onSubmit = (data) => {
    props.refresh();
    // ApiService.AddData('api/StudentTest/InsertTestStudent',JSON.stringify(data)).then((res)=>{
    //   enqueueSnackbar('Successfully Inserted',{
    //     variant:'success',
    //   },);

    // }).catch((err) => {
    //   enqueueSnackbar('API Error, Please check connection',{
    //     variant:'error',
    //   },);
    // });
 
  }


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  
  };

  const handleClose = () => {
    setOpen(false);
  };
  


  return (
   
    <Grid container justify="flex-end" className={classes.root}>

      <Button variant="contained" color="primary" onClick={handleClickOpen}>
       ADD STUDENT
        </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Add Student
        </DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)} >
          <DialogContent dividers>
            <TextField
              id="outlined-full-width"
              label="Fullname"
              placeholder="Fullname"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              name="firstname"
              inputRef={register}
             
            />
            <TextField
              id="outlined-full-width"
              label="Email"
              placeholder="Email"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              name="email"
              inputRef={register}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="secondary">
              Cancel
          </Button>
            <Button onClick={handleClose} variant="contained" color="primary" type="submit">
              Save
          </Button>

          </DialogActions>
        </form>
      </Dialog>
    </Grid>


  )

}