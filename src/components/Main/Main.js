import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import {
  CssBaseline,
  Typography,
  Collapse,
  IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
      <Collapse
        in={checked}
        {...(true ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <Typography variant="h1" style={{ color: "white" }} color="inherit">
          Landing Page
        </Typography>
        <IconButton>
          <ExpandMoreIcon className={classes.expandIcon} />
        </IconButton>
      </Collapse>
    </div>
  );
}

export default Main;
