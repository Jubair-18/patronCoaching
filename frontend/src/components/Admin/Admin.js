import { Grid, TextField, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react'
import { useHistory  } from 'react-router';
import axios from 'axios';

const Admin = () => {
    const history = useHistory();
    const [year, setYear] = useState(0);
    const [students, setStudents] =useState(0);
    const [teacherName, setTeacherName] = useState('');
    const [teacherQualification, setTeacherQualification] = useState('');
    const [teacherNumber, setTeacherNumber] = useState('');

    const handleYearSubmit = (e) => {
        e.preventDefault();
        axios.post('/admin/year',{
            year: year,
            students: students
          }).then(() => {
            alert('added successfully')
            history.push('/')
          }).catch(err => alert(err));    
    }

    const handleTeacherSubmit = (e) => {
        e.preventDefault();
        axios.post('/admin/teacher',{
            name: teacherName,
            degree: teacherQualification,
            number: teacherNumber
          }).then(() => {
            alert('added successfully')
            history.push('/')
          }).catch(err => alert(err));    
    }

    return (
        <div>
            <Grid>
                <form onSubmit={handleYearSubmit}> 
                    <Typography variant="h4"> year and students </Typography>
                    <TextField
                    variant='outlined'
                    type="number"
                    label="Enter the year"
                    onChange={(e) => setYear(e.target.value)}
                    />
                    <TextField
                    variant='outlined'
                    type="number"
                    label="Enter the number of students"
                    onChange={(e) => setStudents(e.target.value)}
                    />
                    <Button type="submit"> 
                        ADD
                    </Button>
                </form>
            </Grid>
            <Grid>
                <form onSubmit={handleTeacherSubmit}>
                    <Typography variant="h4"> Add Teacher </Typography>
                    <TextField
                    variant='outlined'
                    label="Enter the name"
                    onChange={(e) => setTeacherName(e.target.value)}
                    />
                    <TextField
                    variant='outlined'
                    label="Enter the number of degree"
                    onChange={(e) => setTeacherQualification(e.target.value)}
                    />
                    <TextField
                    variant='outlined'
                    label="Enter the number of number"
                    onChange={(e) => setTeacherNumber(e.target.value)}
                    />
                    <Button type="submit"> 
                        ADD
                    </Button>
                    </form>
            </Grid>
        </div>
    )
}

export default Admin;
