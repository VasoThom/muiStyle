import * as React from "react";

import Button from "@material-ui/core/Button";
import useStyles from "./styles.js";

const LoginForm = () => {
  const classes = useStyles();
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <Button className={classes.root}>Submit</Button>;
    </form>
  );
};

export default LoginForm;
