import { makeStyles } from "@material-ui/core/styles";
import pin from "../../image/pin-01.png";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  root: {
    heigh: "100vh",
  },
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  pin: {
    backgroundImage: `url(${pin})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "70px",
    width: "70px",
  },
  pin2: {
    backgroundImage: `url(${pin})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "70px",
    width: "70px",
    webkitTransform: "scaleX(-1)",
    transform: "scaleX(-1)",
  },

  card: {
    display: "flex",
    height: "80%",
    justifyContent: "center",
    padding: 50,
    margin: 50,
    [theme.breakpoints.down("sm")]: {
      display: "block",
      padding: 10,
      margin: 0,
    },
  },

  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  cover: {
    minWidth: "40%",
  },
  containerCard: {
    height: "100vh",
  },
}));
