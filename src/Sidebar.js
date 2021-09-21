import * as React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import AddBoxIcon from "@mui/icons-material/AddBox";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Switch, Route } from "react-router-dom";
import { Cards } from "./Cards";
import FormPropsTextFields from "./AddProfile";
import ProfileDetails from "./ProfileDetails";
import EditProfile from "./EditProfile";

const drawerWidth = 240;

const profile = [
  {
    id: 0,
    name: "Abhiraj Kundan",
    age: 21,
    gender: "male",
    state: "Maharashtra",
    vaccineBrand: "Covishield",
    doseNumber: "1",
    vaccineDate: "21/08/2021",
  },
  {
    id: 1,
    name: "Usha Mann",
    age: 47,
    gender: "female",
    state: "Uttar Pradesh",
    vaccineBrand: "Covaxin",
    doseNumber: "2",
    vaccineDate: "01/09/2021",
  },
  {
    id: 2,
    name: "Kamal Khan",
    age: 62,
    gender: "male",
    state: "Bihar",
    vaccineBrand: "Covishield",
    doseNumber: "2",
    vaccineDate: "15/09/2021",
  },
  {
    id: 3,
    name: "Malini Sharma",
    age: 31,
    gender: "female",
    state: "Madhya Pradesh",
    vaccineBrand: "Sputnik",
    doseNumber: "1",
    vaccineDate: "16/08/2021",
  },
];

function ResponsiveDrawer(props) {
  const history = useHistory();
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [states, setStates] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [dose, setDose] = React.useState("");
  const [date, setDate] = React.useState("");
  const [profiles, setProfiles] = React.useState(profile);

  const handleNameChange = (event) => {
    console.log(event);
    event.target.value == ""
      ? setName(event.target.defaultValue)
      : setName(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleStateChange = (event) => {
    setStates(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleDoseChange = (event) => {
    setDose(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleProfileSubmit = () => {
    setProfiles([
      ...profiles,
      {
        name: name,
        age: age,
        gender: gender,
        state: states,
        vaccineBrand: brand,
        doseNumber: dose,
        vaccineDate: date,
      },
    ]);
    // setName("");
    // setAge("");
    // setGender("");
    // setStates("");
    // setBrand("");
    // setDose("");
    // setDate("");
    history.push("/profiles");
  };

  const handleProfileEdit = (e) => {
    let newData = {
      name: name,
      age: age,
      gender: gender,
      state: states,
      vaccineBrand: brand,
      doseNumber: dose,
      vaccineDate: date,
    };
    let revisedProfileData = profiles;
    revisedProfileData[e] = newData;
    setProfiles([...revisedProfileData]);

    // setName("");
    // setAge("");
    // setGender("");
    // setStates("");
    // setBrand("");
    // setDose("");
    // setDate("");
    history.push("/profiles");
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Link
          exact
          to="/"
          style={{ textDecoration: "none", color: "darkslategray" }}
        >
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link
          exact
          to="/profiles"
          style={{ textDecoration: "none", color: "darkslategray" }}
        >
          <ListItem button>
            <ListItemIcon>
              <RecentActorsIcon />
            </ListItemIcon>
            <ListItemText primary="Profiles" />
          </ListItem>
        </Link>
        <Link
          exact
          to="/profiles/add/new"
          style={{ textDecoration: "none", color: "darkslategray" }}
        >
          <ListItem button>
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Add Profile" />
          </ListItem>
        </Link>
        <Link
          exact
          to="/about"
          style={{ textDecoration: "none", color: "darkslategray" }}
        >
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Covid Vaccination Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="list users"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Switch>
          <Route exact path="/">
            <h2>Dashboard</h2>
          </Route>
          <Route exact path="/profiles">
            {profiles.map((el, index) => {
              return <Cards el={el} index={index} />;
            })}
          </Route>
          <Route exact path="/profiles/edit/:profileId">
            <EditProfile
              name={name}
              setName={setName}
              age={age}
              setAge={setAge}
              gender={gender}
              setGender={setGender}
              states={states}
              setStates={setStates}
              brand={brand}
              setBrand={setBrand}
              dose={dose}
              setDose={setDose}
              date={date}
              setDate={setDate}
              profiles={profiles}
              setProfiles={setProfiles}
              handleNameChange={handleNameChange}
              handleAgeChange={handleAgeChange}
              handleGenderChange={handleGenderChange}
              handleStateChange={handleStateChange}
              handleBrandChange={handleBrandChange}
              handleDoseChange={handleDoseChange}
              handleDateChange={handleDateChange}
              handleProfileEdit={handleProfileEdit}
            />
          </Route>
          <Route exact path="/profiles/:id">
            <ProfileDetails profiles={profiles} />
          </Route>
          <Route exact path="/profiles/add/new">
            <FormPropsTextFields
              name={name}
              setName={setName}
              age={age}
              setAge={setAge}
              gender={gender}
              setGender={setGender}
              states={states}
              setStates={setStates}
              brand={brand}
              setBrand={setBrand}
              dose={dose}
              setDose={setDose}
              date={date}
              setDate={setDate}
              profiles={profiles}
              setProfiles={setProfiles}
              handleNameChange={handleNameChange}
              handleAgeChange={handleAgeChange}
              handleGenderChange={handleGenderChange}
              handleStateChange={handleStateChange}
              handleBrandChange={handleBrandChange}
              handleDoseChange={handleDoseChange}
              handleDateChange={handleDateChange}
              handleProfileSubmit={handleProfileSubmit}
            />
          </Route>
          <Route exact path="/about">
            <h2>About the Virus</h2>
            <div>
              Coronavirus disease (COVID-19) is an infectious disease caused by
              the SARS-CoV-2 virus.
            </div>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
