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
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../image/logonobg-01.png";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./styles";

function Navbar({ totalItems }) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
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
            <Link href="#test">
              <Button>About Me</Button>
            </Link>

            <Link>
              <Button>Workshops</Button>
            </Link>

            <Link>
              <Button>Contacts</Button>
            </Link>
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
