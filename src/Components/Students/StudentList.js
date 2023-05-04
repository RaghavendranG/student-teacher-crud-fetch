import React, { useContext } from "react";
import Base from "../../Base/Base";
import { context } from "../../App";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";

const StudentList = () => {
  const { studentData, setStudentData } = useContext(context);

  const history = useHistory();
  const removeData = async (id) => {
    try {
      const response = await fetch(
        `https://nodemongo-ten.vercel.app/students/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();

      console.log(data);
      const deletedData = studentData.filter((items) => items.id !== id);

      setStudentData(deletedData);
    } catch (error) {}
  };
  return (
    <Base title="Student List">
      <div className="add-btn">
        <Button
          variant="contained"
          className="btn"
          onClick={() => history.push("/add-student")}
        >
          Add Student
        </Button>
      </div>
      <div className="studentList">
        {studentData.map((items, key) => (
          <Card sx={{ maxWidth: 345 }} key={key} className="card">
            <CardContent className="CardContent">
              <Typography gutterBottom variant="h5" component="div">
                First Name : {items.firstname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Last Name : {items.lastname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Class : {items.class}
              </Typography>
            </CardContent>
            <CardActions className="card-btn">
              <Button
                size="small"
                variant="contained"
                color="secondary"
                onClick={() => history.push(`/edit-student/${items.id}`)}
              >
                Edit
              </Button>
              <Button
                size="small"
                variant="contained"
                color="error"
                onClick={() => removeData(items.id)}
              >
                Delete
              </Button>
              <Button
                size="small"
                variant="contained"
                color="success"
                onClick={() => history.push(`/view-student/${key}`)}
              >
                View
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </Base>
  );
};

export default StudentList;
