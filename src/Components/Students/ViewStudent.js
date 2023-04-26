import React, { useContext } from 'react'
import Base from "../../Base/Base";
import { context } from '../../App';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

const ViewStudent = () => {
    const {studentData}= useContext(context)

    const history = useHistory()
    const {id} = useParams()
    const selectedStudent = studentData[id]
    
  return (
    <Base
    title="View Student Card">
<div className='view'>
<Card sx={{ maxWidth: 345 }} className='card'>
      <CardContent className='CardContent'>
        <Typography gutterBottom variant="h5" component="div">
          Fist Name : {selectedStudent.firstname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last Name : {selectedStudent.lastname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Class : {selectedStudent.class}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender : {selectedStudent.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Department : {selectedStudent.department}
        </Typography>
      </CardContent>
      <CardActions className='card-btn'>
        <Button size="small" variant='contained' color='secondary' onClick={() => history.push('/student')}>Back to list</Button>
      </CardActions>
    </Card>
</div>
    </Base>
  )
}

export default ViewStudent