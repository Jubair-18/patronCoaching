import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { CssBaseline, Grid, Typography} from '@material-ui/core'

import axios from 'axios'

const LineChart = () => {
  const [yearList , setYearList ] = useState([]);
  useEffect(() => {
    axios.get('/admin/yearlist').then((res) => setYearList(res.data)).catch((err) => console.log(err));
  }, [])
 
  const year = yearList.map((y) =>  y.year);
  const number = yearList.map((n) => n.students);
  console.log(year)
  const data = {
    labels: year,
    datasets: [
      {
        label: '# of Votes',
        data: number,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
  return(<>
    <Grid gutterBottom className='header' style={{ position: 'relative', width:'100vw'}}>
         <Typography variant="h3" className='title' style={{textAlign: 'center'}}>Success Rate Since 2016</Typography>
    </Grid>
    <CssBaseline />
    <Line data={data} options={options} />
  </>
)};

export default LineChart;