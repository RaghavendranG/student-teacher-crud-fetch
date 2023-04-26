import React, { useContext } from 'react'
import { context } from '../../App'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import Base from '../../Base/Base'
import { useHistory } from "react-router-dom";

const TeacherList = () => {

    const {teacherData, setTeacherData} = useContext(context)
    const history = useHistory()

    const removeData = async (id) => {

      try {

        const response = await fetch(`https://6353a57accce2f8c02fa4329.mockapi.io/teacher/${id}`,{
          method : 'DELETE'
        })
        const data = await response.json()
        console.log(data)
        const deletedData = teacherData.filter((items) => items.id !== id)
        
        setTeacherData(deletedData)
      } catch (error) {
        
      }
        
            }

  return (
    <Base
    title="Teachers List"> 
    <div className="add-btn">
<Button variant='contained' className='btn' onClick={() => history.push('/add-teacher')}>Add Teacher</Button>
</div>
<div className='studentList'>
{teacherData.map((items, key) => (
    <Card sx={{ maxWidth: 345 }} key={key} className='card'>
      <CardContent className='CardContent'>
        <Typography gutterBottom variant="h5" component="div">
          Fist Name : {items.firstname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last Name : {items.lastname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Department : {items.department}
        </Typography>
      </CardContent>
      <CardActions className='card-btn'>
        <Button size="small" variant='contained' color='secondary' onClick={() => history.push(`/edit-teacher/${items.id}`)}>Edit</Button>
        <Button size="small" variant='contained' color='error' onClick={() => removeData(items.id)}>Delete</Button>
        <Button size="small" variant='contained' color='success' onClick={() => history.push(`/view-teacher/${key}`)}>View</Button>
      </CardActions>
    </Card>
))}
</div>
    </Base>
  )
}

export default TeacherList