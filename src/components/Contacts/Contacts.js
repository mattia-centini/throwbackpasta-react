import React from "react";
import {
  Container,
  Typography,
  Link,
  CssBaseline,
  IconButton,
  Grid,
} from "@material-ui/core";
// import { InstagramIcon, PinterestIcon } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import "./Contacts.css";
import ContactForm from "./ContactForm/ContactForm";
import useStyles from "./styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Contacts() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="contacts">
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          If you want to know more about the workshops or would like to organise
          a bespoke event for yourself, don't hesitat to contact us
        </Typography>
        <ContactForm />
      </Container>

      <footer className={classes.footer}>
        <Grid container justify="center">
          <Container maxWidth="sm">
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
            <Copyright />
          </Container>
        </Grid>

        <Grid container justify="center">
          <Grid item>
            <IconButton>
              <a
                className="footer__iconsAnchor"
                target="_blank"
                href="https://www.facebook.com/throwbackpasta/?view_public_for=156178635112991"
              >
                <FacebookIcon fontSize="large" />
              </a>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <a
                className="footer__iconsAnchor"
                target="_blank"
                href="https://www.instagram.com/throwback_pasta/?hl=en"
              >
                <InstagramIcon fontSize="large" />
              </a>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <a
                className="footer__iconsAnchor"
                target="_blank"
                href="https://www.pinterest.com/"
              >
                <PinterestIcon fontSize="large" />
              </a>
            </IconButton>
          </Grid>

          {/* <FacebookPlugin /> */}
        </Grid>
      </footer>
    </div>
  );
}

export default Contacts;
