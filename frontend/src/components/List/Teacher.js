import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';

import axios from 'axios';

const Teacher = () => {
    const [teacher, setTeacher] = useState([]);

    useEffect(() => {
        axios.get('/admin/teacherlist').then((res) => setTeacher(res.data)).catch((err) => console.log(err))
    }, [])

    console.log(teacher)
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell> Name</TableCell>
                <TableCell align="right">Qualification</TableCell>
                <TableCell align="right">Phone Number</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {teacher.map((row, index) => (
                <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                   {row.name}
                </TableCell>
                <TableCell align="right">{row.degree}</TableCell>
                <TableCell align="right">{row.number}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
}

export default Teacher
