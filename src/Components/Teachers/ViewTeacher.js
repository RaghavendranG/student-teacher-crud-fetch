import React, { useContext } from 'react'
import Base from "../../Base/Base";
import { context } from '../../App';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';


const ViewTeacher = () => {

    const {teacherData} = useContext(context)

    const history = useHistory()
    const {id} = useParams()

    const selectedTeacher = teacherData[id]

  return (
    <Base
    title="View Teacher Card">
<div className='view'>
<Card sx={{ maxWidth: 345 }} className='card'>
      <CardContent className='CardContent'>
        <Typography gutterBottom variant="h5" component="div">
          First Name : {selectedTeacher.firstname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last Name : {selectedTeacher.lastname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender : {selectedTeacher.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Department : {selectedTeacher.department}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Experience : {selectedTeacher.experience}
        </Typography>
      </CardContent>
      <CardActions className='card-btn'>
        <Button size="small" variant='contained' color='secondary' onClick={() => history.push('/teacher')}>Back to list</Button>
      </CardActions>
    </Card>
</div>
    </Base>
  )
}

export default ViewTeacher