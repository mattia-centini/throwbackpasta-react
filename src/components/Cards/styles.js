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
  },
  pin: {
    backgroundImage: `url(${pin})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundColor: "red",
    height: "70px",
    width: "70px",
  },
  pin2: {
    backgroundImage: `url(${pin})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundColor: "red",
    height: "70px",
    width: "70px",
    webkitTransform: "scaleX(-1)",
    transform: "scaleX(-1)",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

  title: {},
}));
