import { useState } from "react";
import { useOutlet, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import ImageBG from "../assets/login-bg.jpg";
import { TestFields } from "../types/fields";
import createService from "../services/createService";

const theme = createTheme();

export default function TestCreate() {
  const outlet = useOutlet();

  const navigate = useNavigate();
  const [test_subject, setSubject] = useState("");
  const [test_timelim, setTimelim] = useState("");
  const [test_name, setName] = useState("");
  const [test_description, setDescription] = useState("");

  const handleSubmit = async (event: any) => {
    const response = await createService.testcreate({
      test_subject,
      test_timelim: +test_timelim,
      test_name,
      test_description
    });

    if (response.success) {
      setSubject("");
      setTimelim("");
      setName("");
      setDescription("");
      navigate("/testview");
    }
  };

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="false" sx={{
            backgroundImage: `url(${ImageBG})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>

        <Box style={{ background: '#f2f6fc' }}
        onSubmit={handleSubmit}
        textAlign='center' sx={{
        width: '50%',
        height: '100%',
        boxShadow: 2,
        rowGap: 3,
        my: 1,
        justifyContent: 'center'
      }}>
        <Typography textAlign="center" variant="h4" color="#F1B461" sx={{ my: 4}}>
             Scholarly
         </Typography>
        <Typography color="#F1B461">
            Create a test by filling up the following information below.
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={6} sx={{ my: 4, width: 200 }}>
                <TextField required id="test_subject" label="Subject" variant="standard" onChange={(t) => setSubject(t.target.value)}/>
            </Grid>
            <Grid item xs={6} sx={{ my: 4, width: 200 }}>
                <TextField required id="test_timelim" label="Time Limit" variant="standard" onChange={(t) => setTimelim(t.target.value)}/> 
            </Grid>
            <Grid item xs={6} sx={{ my: 4, width: 200 }}>
                <TextField required id="test_name" label="Test Name" variant="standard" onChange={(t) => setName(t.target.value)}/>
            </Grid>
            <Grid item xs={6} sx={{ my: 4, width: 200 }}>
                <TextField id="test_description" label="Test Description  " variant="standard" onChange={(t) => setDescription(t.target.value)}/>
            </Grid>
        </Grid>
            <Button size="large" variant="contained" color="success" sx={{ my: 4, width: 200 }}>Create Test</Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
