import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";
import chefImg from "../../image/chef.jpg";

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="about">
      <AppBar
        id="workshop-cards"
        position="relative"
        color="transparent"
        className={classes.appBar}
      >
        <Toolbar>
          <div className={classes.pin} />
          <Typography variant="h3" className={classes.title}>
            About Throwback Pasta
          </Typography>
          <div className={classes.pin2} />
        </Toolbar>
      </AppBar>
      <Container fixed className={classes.containerCard}>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Live From Space
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image={chefImg}
            title="Live from space album cover"
          />
        </Card>
      </Container>
    </div>
  );
}

export default About;
