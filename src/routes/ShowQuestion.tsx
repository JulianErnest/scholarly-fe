import * as React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Field from './Field';
const theme = createTheme();



export default function ShowQuestion(){
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <Typography textAlign="center" variant="h5" color="#F1B461">
      Questions
    </Typography>
    <Field question={data}/>
    </ThemeProvider>
  );
};