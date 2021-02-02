import React from "react";
import Grid from "@material-ui/core/Grid";
import Products from "../Products/Products";
import Card from "./Card/Card";

import useStyles from "./styles";

function WineWork({ products, onAddToCart }) {
  const classes = useStyles();

  return (
    <Grid
      className={classes.content}
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item className={classes.card}>
        <Card />
      </Grid>
      <Grid item>
        <Products
          products={products}
          type={"Wine Category"}
          onAddToCart={onAddToCart}
        />
      </Grid>
    </Grid>
  );
}

export default WineWork;
