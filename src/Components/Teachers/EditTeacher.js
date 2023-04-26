import React, { useContext, useEffect, useState } from "react";
import Base from "../../Base/Base";
import { context } from "../../App";
import { useHistory, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";

const EditTeacher = () => {
  const { teacherData, setTeacherData } = useContext(context);
  const { id } = useParams();
  const history = useHistory();

  const [idx, setId] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");


  const teacherIndex = teacherData.findIndex((item)=> item.id === id)
  const selectedTeacher = teacherData[teacherIndex];

  useEffect(() => {
    setId(selectedTeacher.id);
    setFirstName(selectedTeacher.firstname);
    setLastName(selectedTeacher.lastname);
    setGender(selectedTeacher.gender);
    setExperience(selectedTeacher.experience);
    setDepartment(selectedTeacher.department);
  }, []);

  const updateTeacher = async (event) => {

    event.preventDefault()
    try {
      const updatedTeacherData = {
        id: idx,
        firstname,
        lastname,
        gender,
        department,
        experience,
      };

      const response = await fetch(`https://6353a57accce2f8c02fa4329.mockapi.io/teacher/${id}`,{
        method : 'PUT',
        body : JSON.stringify(updatedTeacherData),
        headers : {
          "Content-Type": "application/json"
        }
      })
  
      const data = await response.json()
      teacherData[teacherIndex] = data;
  
      setTeacherData([...teacherData]);
  
      history.push("/teacher");
      
    } catch (error) {
      
    }
    
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
            label="Department"
            variant="outlined"
            size="small"
            onChange={(event) => setDepartment(event.target.value)}
            value={department}
          />
        </div>
        <div className="add-student">
          <TextField
            id="outlined-basic"
            label="Experience"
            variant="outlined"
            size="small"
            onChange={(event) => setExperience(event.target.value)}
            value={experience}
          />
        </div>
        <div>
          <Button variant="contained" className="btn" onClick={updateTeacher}>
            Update Teacher
          </Button>
        </div>
      </div>
    </Base>
  );
};

export default EditTeacher;
