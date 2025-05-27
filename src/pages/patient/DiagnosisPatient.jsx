import React from 'react'
import './diagnosisPatient.css'
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import Sidebar from "../../components/Sidebar";

const DiagnosisPatient = () => {

  return  (<>
    <section className="bg-dashboard">
                 <div className="container-fluid">
                    <div className="row">                   
                            <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
  
    <Container
      maxWidth="md"
      className="page-container"
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Section: Diagnosis Symptoms */}
        <Grid item xs={12} md={6} className="fade-in-left">
          <Typography variant="h5" gutterBottom>
            <strong>Diagnosis Symptoms</strong>
          </Typography>
          <Card
            elevation={3}
            className="custom-card"
          >
            <CardContent>
              <FormControlLabel
                control={<Checkbox />}
                label="1. Temp/Fever"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="2. Cough"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="3. Body Pain"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Middle Section: Arrows & Icons */}
        <Grid item xs={12} md={2} className="fade-in">
          <Typography variant="h6" color="textSecondary">
            i/p
          </Typography>
          <Button
            variant="outlined"
            className="middle-button"
          >
            db
          </Button>
          <Button
            variant="outlined"
            className="middle-button mt-3" 
          >
            AI
          </Button>
        </Grid>

        {/* Right Section: Possible Outcomes */}
        <Grid item xs={12} md={4} className="fade-in-right">
          <Typography variant="h5" gutterBottom>
            <strong>Possible Outcomes</strong>
          </Typography>
          <Card
            elevation={3}
            className="custom-card"
          >
            <CardContent>
              <FormControlLabel
                control={<Checkbox />}
                label="1. Cold"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="2. Viral Fever"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="3. Pneumonia"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>

    </div>
    </div>
    </section>
    </> );
}

export default DiagnosisPatient