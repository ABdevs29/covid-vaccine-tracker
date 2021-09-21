import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import { useHistory } from "react-router";

export function Cards({ index, el }) {
  const history = useHistory();
  return (
    <Card
      key={index}
      sx={{ minWidth: 275 }}
      onClick={() => history.push("/profiles/" + index)}
      style={{ cursor: "pointer" }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
          style={{ display: "inline-block" }}
        >
          {el.vaccineBrand} &nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <CardActions style={{ display: "inline-block" }}></CardActions>
        </Typography>

        <Typography variant="h5" component="div">
          {el.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
