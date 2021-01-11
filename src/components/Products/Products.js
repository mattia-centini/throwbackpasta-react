import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  { id: 1, name: "Pasta Workshop", date: "12/12/12", price: "90zł" },
  { id: 2, name: "Pasta Workshop", date: "12/12/12", price: "90zł" },
  { id: 3, name: "Pasta Workshop", date: "12/12/12", price: "90zł" },
];

function Products() {
  return (
    <main>
      <Grid container direction="column" justify="flex-start" spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={12} md={12}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
