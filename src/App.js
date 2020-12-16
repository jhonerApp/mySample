import React, {useEffect, useState} from 'react';
import { makeStyles  } from '@material-ui/core/styles';

import TablePagination from '@material-ui/core/TablePagination';

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import { useSnackbar  } from 'notistack';
// import ApiService from './Hoc/ApiService';
import InsertData from './Component/InsertData';
import UpdateData from './Component/UpdateData'
import Header from './Base/Header';

import TextField from '@material-ui/core/TextField';
import Navbar from './Base/Navbar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import './App.css';

import AddStudent  from './Pages/Student/AddStudent';
import AddBook from './Pages/library/AddBook';
import ReturnBook from './Pages/library/ReturnBook';
import ClassTermStream from './Pages/Setting/ClassTermStream';
import Finance from './Pages/Setting/Finance';


function  App()  {
  //const {result} = useGetData('https://localhost:5001/api/StudentTest/GetStudentTest');

const [stateStudent, setStudent] = useState([]);
const [stateReload, setReload] = useState([]);
const [stateSearch, setSearch] = useState('');
const { enqueueSnackbar } = useSnackbar();


const refreshData= () =>{
  if(stateSearch !== undefined){
    setReload([]);
    console.log( "RELOAD" + stateReload);
  }

}



const deletePerStudent = (id) =>{
  // ApiService.DeleteData('api/StudentTest/DeleteTestStudent/' + id).then((res)=>{
  //   enqueueSnackbar('Successfully Deleted',{
  //     variant:'success',

  //   },);
  //    setReload([]);
  // }).catch((err) =>{
  //   enqueueSnackbar('API Error, Please check connection',{
  //     variant:'error',
  //   },);
  // });
}
const searchValue = (e) =>{
     console.log(e.target.value);
     setSearch(e.target.value)

}

  // useEffect(() => {
  // ApiService.fetchData('api/StudentTest/GetStudentTest').then((response) =>{
  //   setStudent(response.data);
  //   console.log(response.data);
  // }).catch((err) =>{
  //   console.log("Error API Failed");
  // })


  // }, [stateReload]);


// STTYLING
  const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    button: {
      margin: theme.spacing(1)
    },
    button_refresh:{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'

    },
    success: { backgroundColor: 'purple' },
    error: { backgroundColor: 'blue' },
    warning: { backgroundColor: 'green' },
    info: { backgroundColor: 'yellow' },
  }));

  const classes = useStyles();


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };



  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);

  };




// result.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((student) => {
 let filterStudent = stateStudent.filter(
    (student) =>{
      return student.firstname.indexOf(stateSearch) !==-1 ||  student.email.indexOf(stateSearch) !==-1;
    }

 )
const  renderBody  =  filterStudent.length !==0 ? filterStudent.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((student) => {
          return(
              <TableRow key={student.id}>
                <TableCell component="th" scope="row">
                {student.id}
                </TableCell>
                <TableCell align="right">{student.firstname}</TableCell>
                <TableCell align="right">{student.email}</TableCell>
                <TableCell align="right">

                <UpdateData refresh = {refreshData} state ={student} classStyle={classes.button}/>
                <Button variant="contained" color="secondary" onClick={() => deletePerStudent(student.id)}>
                  Delete
                </Button>
                </TableCell>
            </TableRow>
        )
        }) :
        <TableRow >
            <TableCell align="right"></TableCell>
              </TableRow>




    return (

      <Router>
          <Navbar />
          <div className="page-wrapper">
             <Header />
            <Switch>
              <Route path="/add_edit_student" exact  component={AddStudent} />
              <Route path="/addbook" component={AddBook} />
              <Route path="/return_book" component={ReturnBook} />
              <Route path="/create_class_stream_term" component={ClassTermStream} />
              <Route path="/finance" component={Finance} />
            </Switch>
        </div>
      </Router>



      //   <Container className="App">


      //       <Button variant="contained" color="secondary" className={classes.button_refresh} onClick={refreshData} >
      //         Refresh
      //       </Button>
      //   <InsertData refresh = {refreshData}/>



      //   <TextField
      //     id="standard-full-width"
      //     style={{ margin: 8 }}
      //     placeholder="Search Student"
      //     fullWidth
      //     margin="normal"
      //     InputLabelProps={{
      //       shrink: true,
      //     }}
      //     onChange={searchValue}
      //   />
      //     <TableContainer component={Paper}>
      //   <Table className={classes.table} aria-label="simple table">
      //     <TableHead>
      //       <TableRow>
      //         <TableCell>#</TableCell>
      //         <TableCell align="right">FULLNAME</TableCell>
      //         <TableCell align="right">EMAIL</TableCell>
      //         <TableCell align="right">Actions</TableCell>
      //       </TableRow>
      //     </TableHead>
      //     <TableBody>
      //     {renderBody}

      //     </TableBody>



      //   </Table>
      // </TableContainer>
      // <TablePagination
      //   rowsPerPageOptions={[5, 25, 100]}
      //   component="div"
      //   count={stateStudent.length}
      //   rowsPerPage={rowsPerPage}
      //   page={page}
      //   onChangePage={handleChangePage}
      //   onChangeRowsPerPage={handleChangeRowsPerPage}
      // />

      // </Container>

    );



}

export default App;
