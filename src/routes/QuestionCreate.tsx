import { useOutlet } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import { spacing } from '@mui/system';
import ImageBG from "../assets/login-bg.jpg";
const theme = createTheme();

export default function QuestionCreate() {
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

                <TextField label="Question" id="question" margin="normal" sx={{mx: 3, my: 4, width: 700}}/>

                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item sm={6}>
                        <TextField id="choice-a" label="Choice A" variant="outlined" />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField id="choice-b" label="Choice B" variant="outlined" />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField id="choice-c" label="Choice C" variant="outlined" />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField id="choice-d" label="Choice D" variant="outlined" />
                    </Grid>
                </Grid>
                <Button size="large" variant="contained" color="success" sx={{ my: 4, width: 200 }}>Create Question</Button>
            </Box>
</Container>
    </ThemeProvider>
  );
}
