import { Card, CardContent, Typography } from "@mui/material";
import { Button, CardActions } from "@mui/material";
import React from "react";
import { useHistory, useParams } from "react-router";

function ProfileDetails({ profiles }) {
  const history = useHistory();
  const { id } = useParams();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
          style={{ display: "inline-block" }}
        >
          {profiles[id].vaccineBrand} &nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <CardActions style={{ display: "inline-block" }}>
            <Button size="small" onClick={() => history.goBack()}>
              ← Go Back
            </Button>
            <Button
              size="small"
              onClick={() => history.push("/profiles/edit/" + id)}
            >
              Edit Profile
            </Button>
          </CardActions>
        </Typography>

        <Typography variant="h5" component="div">
          {profiles[id].name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {profiles[id].age}, {profiles[id].gender}
        </Typography>
        <Typography variant="body2">
          {profiles[id].state}, Dose No: {profiles[id].doseNumber}
          <br />
          Date: {profiles[id].vaccineDate}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProfileDetails;
