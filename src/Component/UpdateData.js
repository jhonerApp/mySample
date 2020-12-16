import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';



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
  

export default function UpdateData(props){


    const { enqueueSnackbar } = useSnackbar();

    const classes = useStyles();
    const initialFormState = { id: props.state.id, firstname: props.state.firstname, email:props.state.email }
    const [stateStudent,setStudent] = useState(initialFormState);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      const arr = {id:props.state.id, firstname: data.firstname, email:data.email};
      // ApiService.UpdateData('api/StudentTest/UpdateTestStudent',JSON.stringify(arr)).then(() =>{
      //   enqueueSnackbar('Successfully Updated',{
      //       variant:'success',
      //     },);
      //   props.refresh();
      // }).catch((err) =>{
      //   enqueueSnackbar('API Error, Please check connection',{
      //       variant:'error',
      //     },);
      // });
   
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        console.log(stateStudent.id);
        setStudent({ ...stateStudent, [name]: value })
      }
  
 
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    
    };
  
    const handleClose = () => {
        console.log("EDIT" + props.state);
      setOpen(false);
    };
    
  
    const buttonEdit = () =>{

        return(
            <Button variant="contained" color="primary" className={props.classStyle} onClick={handleClickOpen}>
            EDIT
             </Button>
             
        )
    }

    return (
        <React.Fragment>
        <Button variant="contained" color="primary" className={props.classStyle} onClick={handleClickOpen}>
                EDIT
                </Button>
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
             Edit Student
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
                  value={stateStudent.firstname}
                  onChange={handleInputChange}
               
                 
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
                  value={stateStudent.email}
                  onChange={handleInputChange}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} variant="contained" color="secondary">
                  Cancel
              </Button>
                <Button onClick={handleClose} variant="contained" color="primary" type="submit">
                  Update
              </Button>
    
              </DialogActions>
            </form>
          </Dialog>
          </React.Fragment>
     
    
    
      )
}