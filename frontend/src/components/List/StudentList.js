import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Input, CircularProgress} from '@material-ui/core'

const StudentList = () => {
   const [info, setInfo] = useState([]);
   useEffect(() => {
    axios.get('/user/data').then((res) => { 
      console.log(res.data)
      setInfo(res.data)})
      .catch(err => console.log(err));
   }, [])

  if(!info) return <CircularProgress />
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {info.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fname}
              </TableCell>
              <TableCell align="right">{row.classB}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phoneNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
 }


export default StudentList;