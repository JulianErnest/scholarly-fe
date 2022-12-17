import { useOutlet } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { spacing } from '@mui/system';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import ImageBG from "../assets/login-bg.jpg";
const theme = createTheme();

export default function TestCreate() {
  const outlet = useOutlet();

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
        textAlign='center' sx={{
        width: 800,
        height: 400,
        boxShadow: 2,
        rowGap: 3,
        justifyContent: 'center'
      }}>
        <Typography textAlign="center" variant="h4" color="#F1B461">
             Scholarly
         </Typography>
        <Typography color="#F1B461">
            Create a test by filling up the following information below.
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={6} sx={{ my: 4, width: 200 }}>
                <TextField required id="standard-basic" label="Subject" variant="standard" />
            </Grid>
            <Grid item xs={6} sx={{ my: 4, width: 200 }}>
                <TextField required id="standard-basic" label="Time Limit" variant="standard" /> 
            </Grid>
            <Grid item xs={6} sx={{ my: 4, width: 200 }}>
                <TextField required id="standard-basic" label="Test Name" variant="standard" />
            </Grid>
            <Grid item xs={6} sx={{ my: 4, width: 200 }}>
                <TextField id="standard-basic" label="Test Description  " variant="standard" />
            </Grid>
        </Grid>
            <Button size="large" variant="contained" color="success">Create Test</Button>
        </Box>
</Container>
    </ThemeProvider>
  );
}
