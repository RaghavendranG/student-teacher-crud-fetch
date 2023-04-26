import React, { useState, useContext } from "react";
import { context } from '../../App'
import Base from "../../Base/Base";
import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const AddTeacher = () => {

  const {teacherData, setTeacherData}= useContext(context)
  const history = useHistory()
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("")

  const addTeacher = async (event) => {

    event.preventDefault()
    try {
      const newTeacherData = {
        firstname,
        lastname,
        gender,
        department,
        experience
    }

    const response = await fetch("https://6353a57accce2f8c02fa4329.mockapi.io/teacher",{
      method : "POST",
      body : JSON.stringify(newTeacherData),
      headers : {
        "Content-Type": "application/json"
      }
    })

    const data = await response.json()

    setTeacherData([...teacherData, data])

    history.push('/teacher')
      
    } catch (error) {
      console.log(error)
    }
 
  }

  return (
    <Base title="Add Teacher Data">
      <div>
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
          <Button variant="contained" className="btn" onClick={addTeacher}>
            Add Teacher
          </Button>
        </div>
      </div>
    </Base>
  );
};

export default AddTeacher;
