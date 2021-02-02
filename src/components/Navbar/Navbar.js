import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Button,
} from "@material-ui/core";
import { Link as Scroll } from "react-scroll";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../image/logonobg-01.png";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./styles";

function Navbar({ totalItems }) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar
        position="absolute"
        className={classes.appBar}
        color="inherit"
        id="header"
      >
        <Toolbar>
          <Typography
            style={{ outline: "none" }}
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="throwback pasta logo"
              height="35px"
              className={classes.image}
            />
            Throwback Pasta
          </Typography>
          <div className={classes.grow}>
            <Scroll to="about" smooth={true}>
              <Button>About Me</Button>
            </Scroll>

            <Scroll to="workshops" smooth={true}>
              <Button>Workshops</Button>
            </Scroll>

            <Scroll to="contacts" smooth={true}>
              <Button>Contacts</Button>
            </Scroll>
          </div>

          {location.pathname === "/cart" ? null : (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
