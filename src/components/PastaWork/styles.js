import { makeStyles } from "@material-ui/core/styles";
import picture from "../../image/pastachef.jpg";

export default makeStyles((theme) => ({
  card: {
    height: "50vh",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    height: "100vh",
    background: `linear-gradient(
        rgba(224, 224, 224, 0.3),
        rgba(224, 224, 224, 0.3)
      ),
      url(${picture})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: theme.spacing(3),
  },
}));
