import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ColorPrimaryButton, ColorResetButton } from "../../Helper/ColorButton";
import Avatar from "@material-ui/core/Avatar";
import * as RIIcons from "react-icons/ri";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Image from "react-image-resizer";
import { Divider } from "@material-ui/core";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import TabPanel from "@material-ui/lab/TabPanel";
import TabContext from "@material-ui/lab/TabContext";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import TabList from "@material-ui/lab/TabList";
import Tabs from "@material-ui/core/Tabs";
import * as BIIcons from "react-icons/bi";

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

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  { title: "Star Wars: Episode VI - Return of the Jedi", year: 1983 },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004 },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
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
  PaperDesign: {
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),

      height: theme.spacing(16),
    },
  },
  tabTheme: {
    // style: { background: "cyan", height: "10px", top: "35px" }

    background: "linear-gradient(45deg, #283747   30%, #283747   90%)",
  },
  avatar: {
    background: "linear-gradient(45deg, #283747   30%, #283747   90%)",
    // backgroundColor: colors.red[500],
  },
}));

export default function AddStudent() {
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
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState("1");

  const handleChangeValue = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="content-wrapper">
      <div className="content">
        <Grid item xs={12} sm={12} >
          <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  <RIIcons.RiArtboardFill />
                </Avatar>
              }
              titleTypographyProps={{ variant: "h6" }}
              title="ADD / EDIT STUDENT"
            />
            <Divider />
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={3}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      {/* <CardMedia
                          style={{ height: 40, paddingTop: "60%" }}
                          image="./assets/img/icons8-male-user-100.png"
                          title="Contemplative Reptile"
                        /> */}
                      <CardContent>
                        <Grid
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                        >
                          <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                            style={{ margin: 8 }}
                          >
                            <Grid
                              container
                              direction="row"
                              justify="flex-start"
                              alignItems="flex-start"
                            >
                              <Typography
                                variant="button"
                                display="block"
                                gutterBottom
                                style={{ color: "black" }}
                              >
                                ADM:
                              </Typography>
                              <Typography
                                variant="button"
                                display="block"
                                gutterBottom
                                style={{ color: "red" }}
                              >
                                12/12/221
                              </Typography>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              justify="flex-start"
                              alignItems="flex-start"
                            >
                              <Typography
                                variant="button"
                                display="block"
                                gutterBottom
                                style={{ color: "black" }}
                              >
                                CLASS / STREAM:
                              </Typography>
                              <Typography
                                variant="button"
                                display="block"
                                gutterBottom
                                style={{ color: "red" }}
                              >
                                12/12/221
                              </Typography>
                            </Grid>
                          </Grid>
                          <Image
                            src="./assets/img/icons8-male-user-100.png"
                            height={100}
                            width={100}
                            className="center"
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                        </Grid>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        ></Typography>
                      </CardContent>
                    </CardActionArea>

                    <CardActions>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <TextField
                          disabled
                          id="standard-disabled"
                          label="Penalty Status"
                          defaultValue="Hello World"
                          fullWidth
                        />
                        <Divider variant="middle" />
                        <ColorPrimaryButton
                          width="100%"
                          className={classes.button}
                          text="BROWSE"
                        ></ColorPrimaryButton>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Autocomplete
                    id="size-small-standard"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    defaultValue={top100Films[13]}
                    renderInput={(params) => (
                      <TextField
                        style={{ margin: 8 }}
                        {...params}
                        variant="standard"
                        label="Search Student"
                        placeholder="Favorites"
                      />
                    )}
                  />
                  <TextField
                    label="Fullname"
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    label="Address"
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="Status"
                        select
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        defaultValue={0}
                      >
                        <MenuItem value={0}>Today</MenuItem>
                        <MenuItem value={1}>24 Hours</MenuItem>
                        <MenuItem value={7}>7 Days</MenuItem>
                        <MenuItem value={15}>15 Days</MenuItem>
                        <MenuItem value={30}>30 Days</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="Group"
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="House"
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                  {/* GROUP END */}
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="Dormitory"
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="Adm date"
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        helperText="Full width!"
                        defaultValue="2017-05-24"
                        fullWidth
                        type="date"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="Type"
                        select
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        defaultValue={0}
                      >
                        <MenuItem value={0}>Today</MenuItem>
                        <MenuItem value={1}>24 Hours</MenuItem>
                        <MenuItem value={7}>7 Days</MenuItem>
                        <MenuItem value={15}>15 Days</MenuItem>
                        <MenuItem value={30}>30 Days</MenuItem>
                      </TextField>
                    </Grid>
                  </Grid>
                  {/* GROUP END */}
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="DOB"
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="Date Out"
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        helperText="Full width!"
                        defaultValue="2017-05-24"
                        fullWidth
                        type="date"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="Gender"
                        select
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        defaultValue={0}
                      >
                        <MenuItem value={0}>Today</MenuItem>
                        <MenuItem value={1}>24 Hours</MenuItem>
                        <MenuItem value={7}>7 Days</MenuItem>
                        <MenuItem value={15}>15 Days</MenuItem>
                        <MenuItem value={30}>30 Days</MenuItem>
                      </TextField>
                    </Grid>
                  </Grid>
                  {/* GROUP END */}
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="Phone number"
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="Email Address"
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="Transport"
                        select
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        defaultValue={0}
                      >
                        <MenuItem value={0}>Today</MenuItem>
                        <MenuItem value={1}>24 Hours</MenuItem>
                        <MenuItem value={7}>7 Days</MenuItem>
                        <MenuItem value={15}>15 Days</MenuItem>
                        <MenuItem value={30}>30 Days</MenuItem>
                      </TextField>
                    </Grid>
                  </Grid>
                  {/* GROUP END */}
                </Grid>
              </Grid>
              <hr></hr>
              <div>
                <TabContext value={value}>
                  <AppBar position="static">
                    {/* <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    > */}
                    <TabList
                      variant="fullWidth"
                      onChange={handleChangeValue}
                      aria-label="simple tabs example"
                      className={classes.tabTheme}
                    >
                      <Tab
                        label="Item One"
                        icon={<BIIcons.BiAddToQueue />}
                        value="1"
                      />
                      <Tab
                        label="Item Two"
                        icon={<BIIcons.BiAddToQueue />}
                        value="2"
                      />
                      <Tab
                        label="Item Three"
                        icon={<BIIcons.BiAddToQueue />}
                        value="3"
                      />
                      <Tab
                        label="Item Four"
                        icon={<BIIcons.BiAddToQueue />}
                        value="4"
                      />
                    </TabList>
                    {/* </Grid> */}
                  </AppBar>
                  <Paper elevation={3}>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                    <TabPanel value="4">Item Four</TabPanel>
                  </Paper>
                </TabContext>
              </div>
            </CardContent>
          </Card>
        </Grid>

      </div>
    </div>
  );
}
