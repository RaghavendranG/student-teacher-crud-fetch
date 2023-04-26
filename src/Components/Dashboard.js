import React from "react";
import Base from "../Base/Base";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
    const history = useHistory()
  return (
    <Base
      title="Student-Teacher Management"
      subtitle="Welcome to student and teacher management system"
    >
      <div>
        <div>
          <h3>
            Please click below button to navigate to student or teacher list
          </h3>
        </div>
        <div className="dashboard-btn">
          <Button className="btn" variant="contained" onClick={() => history.push('/student')}>
            Student List
          </Button>
          <Button className="btn" variant="contained" onClick={() => history.push('/teacher')}>
            Teacher List
          </Button>
        </div>
      </div>
    </Base>
  );
};

export default Dashboard;
