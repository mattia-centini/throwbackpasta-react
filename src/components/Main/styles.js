import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    color: "#f6f6f6",
    minHeight: "100vh",
    backgroundImage:
      'url("https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_1280.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  expandIcon: {
    color: "#f6f6f6",
    fontSize: "4rem",
  },
  title: {
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: "30%",
    },
  },
}));
