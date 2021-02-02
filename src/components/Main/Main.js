import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import {
  CssBaseline,
  Typography,
  Collapse,
  IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

function Main() {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Collapse
          in={checked}
          {...(true ? { timeout: 1000 } : {})}
          collapsedHeight={50}
        >
          <Typography variant="h1" style={{ color: "white" }} color="inherit">
            Discover more
          </Typography>
          <Scroll to="workshop-cards" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.expandIcon} />
            </IconButton>
          </Scroll>
        </Collapse>
      </div>
    </div>
  );
}

export default Main;
