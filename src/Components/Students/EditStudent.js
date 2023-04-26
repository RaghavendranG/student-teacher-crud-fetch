import React, { useContext, useEffect, useState } from "react";
import Base from "../../Base/Base";
import { context } from "../../App";
import { useHistory, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";

const EditStudent = () => {
  const { studentData, setStudentData } = useContext(context);
  const history = useHistory();
  const [idx, setIdx] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [grade, setGrade] = useState("");
  const [department, setDepartment] = useState("");

  const { id } = useParams();

  const studentIndex = studentData.findIndex((item) => item.id === id);

  const selectedStudent = studentData[studentIndex];

  useEffect(() => {
    setIdx(selectedStudent.id);
    setFirstName(selectedStudent.firstname);
    setLastName(selectedStudent.lastname);
    setGender(selectedStudent.gender);
    setGrade(selectedStudent.class);
    setDepartment(selectedStudent.department);
  }, []);

  const updateStudent = async (event) => {
    event.preventDefault();
    try {
      const updatedStudent = {
        id: idx,
        firstname,
        lastname,
        gender,
        class: grade,
        department,
      };

      const response = await fetch(
        `https://6353a57accce2f8c02fa4329.mockapi.io/student/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedStudent),
          headers: {
            "content-type": "application/json",
          },
        }
      );

      const data = await response.json();
      studentData[studentIndex] = data;

      setStudentData([...studentData]);

      history.push("/student");
    } catch (error) {}
  };

  return (
    <Base title="Edit Student Details">
      <div>
        <div className="add-student">
          <TextField
            id="outlined-basic"
            label="Id"
            variant="outlined"
            size="small"
            disabled
            value={idx}
          />
        </div>
        <div className="add-student">
          <TextField
            id="outlined-basic"
            label="Fist Name"
            variant="outlined"
            size="small"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstname}
          />
        </div>
        <div className="add-student">
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            size="small"
            onChange={(event) => setLastName(event.target.value)}
            value={lastname}
          />
        </div>
        <div className="add-student">
          <TextField
            id="outlined-basic"
            label="Gender"
            variant="outlined"
            size="small"
            onChange={(event) => setGender(event.target.value)}
            value={gender}
          />
        </div>
        <div className="add-student">
          <TextField
            id="outlined-basic"
            label="Class"
            variant="outlined"
            size="small"
            onChange={(event) => setGrade(event.target.value)}
            value={grade}
          />
        </div>
        <div className="add-student">
          <TextField
            id="outlined-basic"
            label="Department"
            variant="outlined"
            size="small"
            onChange={(event) => setDepartment(event.target.value)}
            value={department}
          />
        </div>
        <div>
          <Button variant="contained" className="btn" onClick={updateStudent}>
            Update Student
          </Button>
        </div>
      </div>
    </Base>
  );
};

export default EditStudent;
