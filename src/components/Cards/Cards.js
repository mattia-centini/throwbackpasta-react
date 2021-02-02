import React from "react";
import Card from "./Card/Card";
import pastachef from "../../image/pastachef.jpg";
import winepour from "../../image/winepour.jpg";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import useWindowPosition from "../../hooks/useWindowPosition";

function Cards() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  const details = [
    {
      title: "Pasta Workshop",
      text: "Become a Pro Pasta Maker",
    },
    {
      title: "Wine Tasting",
      text: "Learn Tasting Skills",
    },
  ];

  return (
    <div className={classes.root} id="workshops">
      <AppBar
        id="workshop-cards"
        position="relative"
        color="transparent"
        className={classes.appBar}
      >
        <Toolbar>
          <div className={classes.pin} />
          <Typography variant="h3" className={classes.title}>
            The Workshops
          </Typography>
          <div className={classes.pin2} />
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="space-around" spacing={2}>
          <Grid item xs={12} sm={4} md={6}>
            <Link to="./pasta">
              <Card
                src={pastachef}
                title={details[0].title}
                text={details[0].text}
                checked={checked}
              />
            </Link>
          </Grid>

          <Grid item xs={12} sm={4} md={6}>
            <Link to="./wine">
              <Card
                src={winepour}
                title={details[1].title}
                text={details[1].text}
                checked={checked}
              />
            </Link>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default Cards;
