import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Cart Overview",
  "Shipping Information",
  "Payment Information",
  "Order Summary",
];

const ProgressBar = ({ activeStep }) => {
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      sx={{
        "& .MuiStep-root .MuiStepIcon-root.Mui-active, & .MuiStep-root .MuiStepIcon-root.Mui-completed":
          {
            color: "black", // Color for the active and completed step icons
          },
        "& .MuiStepLabel-label": {
          color: "black !important", // Color for the step labels
        },
        "& .MuiStepLabel-label.Mui-active": {
          fontWeight: "bold", // Make the active step label bold
        },
      }}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default ProgressBar;
