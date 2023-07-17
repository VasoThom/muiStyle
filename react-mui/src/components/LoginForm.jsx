import * as React from "react";

import Button from "@material-ui/core/Button";
import useStyles from "./styles.js";

const LoginForm = () => {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <div className={classes.div}>
        <label htmlFor="email" className={classes.label}>
          Email
        </label>
        <input className={classes.input} id="email" type="text" />
      </div>
      <div className={classes.div}>
        <label className={classes.label} htmlFor="password">
          Password
        </label>
        <input className={classes.input} id="password" type="password" />
      </div>
      <Button className={classes.root}>Submit</Button>
    </form>
  );
};

export default LoginForm;
