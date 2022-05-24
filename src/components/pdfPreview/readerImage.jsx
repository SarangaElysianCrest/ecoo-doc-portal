import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ImageList,
  ImageListItem,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";

export default function ReaderImage({ path, ...props }) {
  return (
    <Card
      style={{ width: "350px" || props.width, height: "400px" || props.height }}
    >
      <CardMedia component="img" height="50" image={path} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Reload</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
