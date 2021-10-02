import React, { useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function CouponHome(props) {
  const useStyles = makeStyles((theme) => ({
    comingSoonImg: {
      display: "flex",
      justifyContent: "center",
      padding: "2rem",
    },
  }));
  const classes = useStyles(classes);
  
  return (
    <div className={classes.comingSoonImg}>
      <img src="https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg?size=626&ext=jpg" />
    </div>
  );
}