import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Collapse,
} from "@material-ui/core";
import "./Card.css";

const useStyles = makeStyles({
  root: {
    minWidth: 345,
  },
  media: {
    height: 400,
  },
});

export default function MediaCard({ src, title, text, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(true ? { timeout: 1000 } : {})}>
      <Card className={`card ${classes.root}`}>
        <CardActionArea>
          <CardMedia className={classes.media} image={src} />
          <CardContent className="cardContent">
            <Typography
              className="title"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {title}
            </Typography>
            <Typography
              className="text"
              variant="body2"
              color="red"
              component="p"
            >
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Book
          </Button>
        </CardActions>
      </Card>
    </Collapse>
  );
}
