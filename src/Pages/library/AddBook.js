import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ColorPrimaryButton,
  ColorRefreshButton,
  ColorExcelButton,
  ColorTest,
} from "../../Helper/ColorButton";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import * as RIIcons from "react-icons/ri";
import CardContent from "@material-ui/core/CardContent";
import { Divider } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";


import ThemeButton from "../../Hoc/ThemeButton";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: 10,
  },
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  avatar: {
    background: "linear-gradient(45deg, #283747   30%, #283747   90%)",
    // backgroundColor: colors.red[500],
  },
}));

export default function AddBook() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const SearchButton = () => (
    <IconButton>
      <SearchIcon />
    </IconButton>
  );

  const checkAlert = () => {
    alert("Sample");
  };
  return (
    <div className="content-wrapper">
      <div className="content">
        <Grid item sm={12}>
          <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  <RIIcons.RiArtboardFill />
                </Avatar>
              }
              titleTypographyProps={{ variant: "h6" }}
              title="ADD BOOK"
            />
            <Divider />
            <CardContent>
              <Grid
                container
                direction="column-reverse"
                justify="flex-end"
                alignItems="stretch"
              >
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="flex-start"
                >
                  <Grid item xs={6}>
                    <TextField
                      id="standard-name"
                      placeholder="Search by"
                      fullWidth
                      InputProps={{ endAdornment: <SearchButton /> }}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  direction="row-reverse"
                  justify="flex-end"
                  alignItems="flex-start"
                >
                  <ThemeButton
                    theme="primary"
                    text="Testing"
                    icon="addIcon"
                    onClick={() => checkAlert()}
                  />
                  <ThemeButton theme="danger" text="Sample" icon="resetIcon" />
                  <ColorExcelButton
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    text="EXPORT"
                  >
                    ADD STUDENT
                  </ColorExcelButton>
                  <ColorRefreshButton
                    variant="contained"
                    color="primary"
                    text="REFRESH RECORD"
                    className={classes.button}
                  />

                  <ColorPrimaryButton
                    variant="contained"
                    color="primary"
                    text="ADD BOOK"
                    className={classes.button}
                  />
                </Grid>
              </Grid>

              <br></br>

              <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.code}
                            >
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
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
              </Paper>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </div>
  );
}
