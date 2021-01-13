import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

import useStyles from "./styles";

function Products({ products, type, onAddToCart }) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container direction="column" justify="flex-start" spacing={2}>
        {products.map((product) => {
          if (product.categories[0].name === type)
            return (
              <Grid item key={product.id} xs={12} sm={12} md={12}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            );
        })}
      </Grid>
    </main>
  );
}

export default Products;
