import React, { Fragment, useEffect, useState, forwardRef } from "react";
// import ApiService from "../../Context/ApiService";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import IconThemeButton from "../../Hoc/IconThemeButton";
import CardContent from "@material-ui/core/CardContent";

import ClassForm from "../../Forms/Setting/ClassForm";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  button: {
    margin: theme.spacing(1),
  },
  button_refresh: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  success: { backgroundColor: "purple" },
  error: { backgroundColor: "blue" },
  warning: { backgroundColor: "green" },
  info: { backgroundColor: "yellow" },
}));

export default function ClassSetting() {
  const classes = useStyles();

  const [stateData, setstateData] = useState([]);
  const [stateClass, setClass] = useState([]);
  const [stateReload, setReload] = useState([]);
  const [stateSearch, setSearch] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const onClickEdit = () => {
    alert(stateData);
    console.log(stateData);
  };

  // useEffect(() => {
  //   ApiService.fetchData("api/SchoolClass/GetSchoolClassName")
  //     .then((response) => {
  //       setClass(response.data);
  //     })
  //     .catch((err) => {
  //       alert("Error API Failed");
  //     });
  // }, [stateReload]);

  let filterStudent = stateClass.filter((student) => {
    return student.class_name.indexOf(stateSearch) !== -1;
  });
  const renderBody =
    filterStudent.length !== 0 ? (
      filterStudent
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((c) => {
          return (
            // <ClassTableContext.Provider values={"1"}>

            <TableRow key={c.id}>
              <TableCell align="left">{c.class_name}</TableCell>
              <TableCell align="right">
                <IconThemeButton
                  theme="primary"
                  icon="editIcon"
                  onClick={() => setstateData(c)}
                />
                <IconThemeButton theme="danger" icon="deleteIcon" />
              </TableCell>
            </TableRow>
            // </ClassTableContext.Provider>
          );
        })
    ) : (
      <TableRow>
        <TableCell align="right"></TableCell>
      </TableRow>
    );

  return (
    <Fragment>
      <CardContent>
        <ClassForm {...stateData} />
      </CardContent>
      <Container maxWidth="sm">
        <Grid item xs={12} sm={12}>
          <TableContainer component={Paper}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">CLASS NAME</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderBody}</TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 25, 100]}
            component="div"
            count={stateClass.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Grid>
      </Container>
    </Fragment>
  );
}

export const ClassCrud = () => {};
