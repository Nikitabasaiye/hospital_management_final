
import React from "react";
import "./patientAilments.css"; // CSS for animations and custom styling
import Sidebar from "../../components/Sidebar";
import { Container, Card, Typography, Grid, Box } from "@mui/material";

const ailments = [
  "High Fever: 50°C (as per doctor’s guideline)",
  "Palpitations: [Details if needed]",
  "Cough: [Details if needed]",
  "Vomiting: [Details if needed]",
  "Running Nose: [Details if needed]",
  "Tongue (Color): [Details if needed]",
  "Throat Rash: [Details if needed]",
  "Eyes: [Details if needed]",
  "Malnutrition: [Details if needed]",
];

const PatientAilments = () => {
  return (<>
   <section className="bg-dashboard">
                 <div className="container-fluid">
                    <div className="row">                   
                            <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
  
 
    <Container className="ailments-container ">
      <Card elevation={3} className="ailments-card fade-in">
        <Typography variant="h4" className="text-center ailments-title">
          Patient’s Ailments
        </Typography>
        <Box className="ailments-list">
          {ailments.map((item, index) => (
            <Grid
              container
              alignItems="center"
              className="ailment-item"
              key={index}
            >
              <Grid item>
                <span className="ailment-icon">💊</span>
              </Grid>
              <Grid item xs>
                <Typography variant="body1" className="ailment-text">
                  {`${index + 1}. ${item}`}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Card>
    </Container>

    </div>
    </div>
    </section>
    </>);
};

export default PatientAilments;
