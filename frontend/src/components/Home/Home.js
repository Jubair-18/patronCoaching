import * as React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Box, Typography, Container, Link} from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';

import data from '../data'



const cards = [1, 2, 3];

const theme = createTheme();

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              P@TRON COACHING
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Grid
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Grid>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* Admin's Bio */}
          <Typography variant="h4" style={{ textAlign: 'center', padding: "1rem"}}>Founder & CEO</Typography>
          <Grid container spacing={4} style={{display: 'flex', justifyContent: 'center'}}>
            {data.teachers.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.url}
                    alt={card.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.qualification}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* End hero unit */}
          <Typography variant="h4" style={{ textAlign: 'center', padding: "1rem"}}> Campus </Typography>
          <Grid container spacing={4}>
            {data.campus.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.url}
                    alt="random"
                  />
                  {/* <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* map */}
      <Grid style={{marginTop:'.5rem', display: 'flex', flexDirection: 'column'}}>
          <Typography variant="h4" style={{textAlign: 'center', padding: "1rem"}}> Campus Location</Typography>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.490707894513!2d91.81835854266122!3d22.448186989568033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI2JzUzLjUiTiA5McKwNDknMTIuNyJF!5e0!3m2!1sen!2sbd!4v1633145361493!5m2!1sen!2sbd" style={{ width:"100%", height:"550", style:"border:0;",loading:"lazy"}}></iframe>
      </Grid>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          contect : 01821023627, 01918902975
          <br />
          email: patroncoaching@gmail.com
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          style= {{display: "flex", justifyContent: "center", alignItems: "center", padding: "auto"}}
        >
          <Link href="https://www.facebook.com/Patron-coaching-sultan-monjil-105999545051886">
            <FacebookIcon style={{ height: "5rem", width: "5rem"}}/>
          </Link>
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default Home;