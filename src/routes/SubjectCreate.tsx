import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, MenuItem, Select } from "@mui/material";
import ImageBG from "../assets/login-bg.jpg";
import { useContext, useEffect, useState } from "react";
import subjectService from "../services/subjectService";
import { UserContext } from "../context/UserContext";
import { UserContextType } from "../context/User";
import { Subject } from "../types/Subject";
import toastService from "../services/toastService";
const theme = createTheme();

export default function SubjectCreate() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [subject_name, setSubject] = useState("");
  const { token, user } = useContext(UserContext) as UserContextType;
  useEffect(() => {
    (async () => {
      const response = await subjectService.getAllSubjects(token);
      setSubjects(response.data);
    })();
  }, []);

  async function handleCreate() {
    const response = await subjectService.createSubject(
      {
        subject_name,
      },
      token,
    );
    toastService.showToast(response);
    console.log(response)
    if(response.success) {
    setSubject("");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container 
      maxWidth="lg"
        sx={{
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
          bgcolor: "#323232",
        }}
      >
        <Box
          style={{ background: "#f2f6fc" }}
          textAlign="center"
          sx={{
            width: 'auto',
            height: 'auto',
            boxShadow: 2,
            rowGap: 3,
            my: 8,
            justifyContent: "center",
          }}
        >
          <Typography
            textAlign="center"
            variant="h4"
            color="#F1B461"
            sx={{ my: 5 }}
          >
            Scholarly
          </Typography>
          <Typography color="#F1B461">
            Create subject by filling up the following information below.
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={10} sx={{ my: 4, width: 200 }}>
              <TextField
                value={subject_name}
                onChange={(e) => setSubject(e.target.value)}
                required
                id="subject_name"
                label="Subject Name"
                variant="standard"
              />
            </Grid>
            </Grid>
          <Button
            size="large"
            variant="contained"
            color="success"
            onClick={handleCreate}
            sx={{ my: 4, width: 200 }}
          >
            Create Subject
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
