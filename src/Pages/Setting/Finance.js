import React from "react";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Container from "@material-ui/core/Container";

import IconThemeButton from "../../Hoc/IconThemeButton";
import ThemeButton from "../../Hoc/ThemeButton";
import CardHeader from "../../Hoc/CardHeader";


export default function Finance() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  ];

  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }
  const rows = [
    createData("India"),
    createData("China"),
    createData("Italy"),
    createData("United States"),
  ];



  return (
    <div className="content-wrapper">
      <div className="content">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardHeader icon="ItemIcon" title="CREATE ITEM" />
              <CardContent>
                <TextField
                  id="standard-full-width"
                  label="Label"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </CardContent>
              <CardActions>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="flex-end"
                >
                  <ThemeButton theme="primary" icon="addIcon" text="SAVE" />
                </Grid>
              </CardActions>
              <Container maxWidth="sm">
                <Grid item xs={12} sm={12}>
                  <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Class Name</TableCell>
                          <TableCell align="right">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell align="left">class 1</TableCell>
                          <TableCell align="right">
                            <IconThemeButton theme="primary" icon="editIcon" />
                            <IconThemeButton theme="danger" icon="deleteIcon" />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Grid>
              </Container>
            </Card>
          </Grid>
          {/* END CARD */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardHeader icon="ModeIcon" title="CREATE MODE" />
              <CardContent>
                <TextField
                  id="standard-full-width"
                  label="Label"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </CardContent>
              <CardActions>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="flex-end"
                >
                  <ThemeButton theme="primary" icon="addIcon" text="SAVE" />
                </Grid>
              </CardActions>
              <Container maxWidth="sm">
                <Grid item xs={12} sm={12}>
                  <TableContainer >
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Class Name</TableCell>
                          <TableCell align="right">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell align="left">class 1</TableCell>
                          <TableCell align="right">
                            <IconThemeButton theme="primary" icon="editIcon" />
                            <IconThemeButton theme="danger" icon="deleteIcon" />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Grid>
              </Container>
            </Card>
          </Grid>
          {/* END CARD */}

          <Grid item xs={12} sm={4}>
            <Card>
              <CardHeader icon="transportIcon" title="CREATE TRANSPORT" />
              <CardContent>
                <TextField
                  id="standard-full-width"
                  label="Label"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </CardContent>
              <CardActions>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="flex-end"
                >
                  <ThemeButton theme="primary" icon="addIcon" text="SAVE" />
                </Grid>
              </CardActions>
              <Container maxWidth="sm">
                <Grid item xs={12} sm={12}>
                  <TableContainer >
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Class Name</TableCell>
                          <TableCell align="right">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell align="left">class 1</TableCell>
                          <TableCell align="right">
                            <IconThemeButton theme="primary" icon="editIcon" />
                            <IconThemeButton theme="danger" icon="deleteIcon" />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Grid>
              </Container>
            </Card>
          </Grid>
          {/* END CARD */}
        </Grid>
      </div>
    </div>
  );
}
