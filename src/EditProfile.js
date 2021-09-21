import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, MenuItem } from "@mui/material";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const genders = [
  {
    value: "male",
    label: "male",
  },
  {
    value: "female",
    label: "female",
  },
  {
    value: "other",
    label: "other",
  },
];

const brands = [
  {
    value: "Covishield",
    label: "Covishield",
  },
  {
    value: "Covaxin",
    label: "Covaxin",
  },
  {
    value: "Sputnik",
    label: "Sputnik",
  },
];

const doses = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
];

function EditProfile(props) {
  const { profileId } = useParams();

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="filled-required"
          label="Name"
          onChange={props.handleNameChange}
          variant="outlined"
          defaultValue={props.profiles[profileId].name}
        />
        <TextField
          required
          id="filled-select-gender"
          select
          label="Gender"
          defaultValue={props.profiles[profileId].gender}
          onChange={props.handleGenderChange}
          variant="outlined"
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="filled-number"
          label="Age"
          type="number"
          onChange={props.handleAgeChange}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          defaultValue={props.profiles[profileId].age}
        />
        <TextField
          required
          id="filled-required"
          label="State"
          onChange={props.handleStateChange}
          variant="outlined"
          defaultValue={props.profiles[profileId].state}
        />
        <TextField
          required
          id="filled-select-brand"
          select
          label="Vaccine brand"
          defaultValue={props.profiles[profileId].vaccineBrand}
          onChange={props.handleBrandChange}
          variant="outlined"
        >
          {brands.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="filled-select-dose"
          select
          label="Dose No."
          defaultValue={props.profiles[profileId].doseNumber}
          onChange={props.handleDoseChange}
          onLoad
          variant="outlined"
        >
          {doses.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="filled-required"
          label="Date in DD/MM/YYYY"
          onChange={props.handleDateChange}
          defaultValue={props.profiles[profileId].vaccineDate}
          variant="outlined"
        />
      </div>
      <Link to={"/profiles/edit/" + profileId}>
        <Button
          type="submit"
          variant="contained"
          onClick={() => {
            props.handleProfileEdit(profileId);
          }}
        >
          Edit Profile
        </Button>
      </Link>
    </Box>
  );
}

export default EditProfile;
