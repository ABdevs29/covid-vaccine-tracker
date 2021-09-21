import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, MenuItem } from "@mui/material";

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

export default function FormPropsTextFields(props) {
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
          variant="filled"
        />
        <TextField
          required
          id="filled-select-gender"
          select
          label="Gender"
          value={props.gender}
          onChange={props.handleGenderChange}
          variant="filled"
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
          variant="filled"
        />
        <TextField
          required
          id="filled-required"
          label="State"
          onChange={props.handleStateChange}
          variant="filled"
        />
        <TextField
          required
          id="filled-select-brand"
          select
          label="Vaccine brand"
          value={props.brand}
          onChange={props.handleBrandChange}
          variant="filled"
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
          value={props.dose}
          onChange={props.handleDoseChange}
          variant="filled"
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
          variant="filled"
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        onClick={props.handleProfileSubmit}
      >
        Add Profile
      </Button>
    </Box>
  );
}
