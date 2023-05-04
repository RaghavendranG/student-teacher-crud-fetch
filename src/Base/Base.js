import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

const Base = ({ title, subtitle, children }) => {

    const history = useHistory()
  return (
    <div className="base">
      <AppBar position="static">
        <Toolbar className="toolbar" variant="dense">
          <Button className="btn" color="inherit" onClick={() => history.push('/')}>
            Dashboard
          </Button>
          {/* <Button className="btn" color="inherit" onClick={() => history.push('/teacher')}>
            Teacher List
          </Button> */}
          <Button className="btn" color="inherit" onClick={() => history.push('/student')}>
            Student List
          </Button>
        </Toolbar>
      </AppBar>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <div>
          <h2>{subtitle}</h2>
        </div>
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Base;
