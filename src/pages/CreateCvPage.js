import React from "react";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/pages/create-cv-page.css"

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

function CreateCvPage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const requestOptions = {
    method: "POST",
    headers: {"Content-Type": "application/json", 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Authorization': 'Bearer key'},
    body: JSON.stringify({
      html: `<!DOCTYPE html>
      <html lang="en">
          <head>
              <meta charset="UTF-8" />
              <title>Resume</title>
      
              
      
              <!--<link rel="stylesheet" href="style.css" />-->
              <style>
                  @Page {
                      margin: 0;
                  }
                  
                  @font-face {
                    font-family: "Roboto";
                    src: url("Roboto-Bold.ttf");
                  }

                  body {
                      font-family: "Nunito", sans-serif;
                      margin: 0;
                  }
      
                  h1,
                  h2 {
                      // font-family: 'Koulen', cursive;
                      margin-top: 0.5rem;
                      margin-bottom: 0.5rem;
                  }
      
                  h3 {
                      font-weight: bolder;
                      margin-top: 0.5rem;
                      margin-bottom: 0.5rem;
                  }
      
                  .header-avatar {
                      height: 180px;
                      width: 18%;
                      float: left;
                  }
      
                  .avatar {
                      width: 100%;
                      height: 100%;
                  }
      
                  .header-info {
                      background-color: #ffcd38;
                      height: 180px;
                      width: 77%;
                      padding-left: 4%;
                      float: right;
                  }
                  
                  .clear-float {
                      clear: both;
                  }
                  
                  .person-title {
                      font-size: 2.4rem;
                  }
      
                  .main {
                      padding: 2% 14% 2% 14%;
                  }
      
                  .main-title {
                      color: #fff;
                      background-color: black;
                      display: inline-block;
                      letter-spacing: 4px;
                      padding: 0 15px;
                  }
      
                  .bolder-text {
                      font-weight: bold;
                  }
              </style>
          </head>
          <body>
              <div class="header">
                  <div class="header-avatar">
                      <img
                          class="avatar"
                          src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
                      />
                  </div>
                  <div class="header-info">
                      <h1 class="person-title">Layla Smith</h1>
                      <h3 class="person-profession">Frontend</h3>
                  </div>
                  <div class="clear-float"></div>
              </div>
      
              <div class="main">
                  <div class="main-details">
                      <h2 class="main-title">Details</h2>
                      <p class="country-field">Portugal</p>
                      <p class="email-field">laylasmith@gmail.com</p>
                      <p class="phone-field">967564734</p>
                  </div>
      
                  <div class="main-profile">
                      <h2 class="main-title">Profile</h2>
                      <p class="profile-description">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's
                          standard dummy text ever since the 1500s, when an unknown
                          printer took a galley of type and scrambled it to make a
                          type specimen book. It has survived not only five centuries,
                          but also the leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s with
                          the release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing software
                          like Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                  </div>
      
                  <div class="main-education">
                      <h2 class="main-title">Education</h2>
                      <div class="education-description">
                          <p class="education-info bolder-text">
                              Redes informaticas, Atec, Palmela
                          </p>
                          <p class="education-date">February 2022 - March 2022</p>
                          <p class="education-content">
                              - Html<br />
                              - CSS<br />
                              Lot a things
                          </p>
                      </div>
                  </div>
      
                  <div class="main-employment-history">
                      <h2 class="main-title">Employment History</h2>
                      <div class="job-description">
                          <p class="job-info bolder-text">
                              Engineer, Google, San Francisco
                          </p>
                          <p class="job-date">February 2022 - March 2022</p>
                          <p class="job-content">
                              - Html<br />
                              - CSS<br />
                              Lot a things
                          </p>
                      </div>
                  </div>
      
                  <div class="main-skills">
                      <h2 class="main-title">Skills</h2>
                      <ul>
                          <li>Java</li>
                          <li>Python</li>
                          <li>React</li>
                          <li>JavaScript</li>
                      </ul>
                  </div>
      
                  <div class="main-languages">
                      <h2 class="main-title">Languages</h2>
                      <ul>
                          <li>Portuguese</li>
                          <li>English</li>
                          <li>German</li>
                      </ul>
                  </div>
              </div>
          </body>
      </html>
      `,
    }),
  };
  fetch("http://localhost:10257/cv/htmlToPdf", requestOptions).then(
    (response) => {
      console.log(response);
    }
  );

  return (
    <div>
      <Navbar></Navbar>
      <div class="create-cv-page">
        <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                );
                }
                if (isStepSkipped(index)) {
                stepProps.completed = false;
                }
                return (
                <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
                );
            })}
            </Stepper>

            {activeStep === steps.length ? (
            <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
                </Box>
            </React.Fragment>
            ) : (
            <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                {(() => {
                    switch (activeStep) {
                        case 0:   return <h1>1</h1>;
                        case 1: return <h1>2</h1>;
                        case 2:  return <h1>3</h1>;
                        default:   return <h1>Could not load form</h1>;
                    }
                })()}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>Back</Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>Skip</Button>
                )}

                <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
                </Box>
            </React.Fragment>
            )}
        </Box>
      </div>
    </div>
  );
}

export default CreateCvPage;
