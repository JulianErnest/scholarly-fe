import { useOutlet } from "react-router-dom";
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
import testService from "../services/testService";
import toastService from "../services/toastService";
const theme = createTheme();

export default function TestCreate() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [timeLimit, setTimeLimit] = useState("");
  const [testDescription, setTestDescription] = useState("");
  const [testName, setTestName] = useState("");
  const [subject, handleSubject] = useState("");
  const { token, user } = useContext(UserContext) as UserContextType;
  useEffect(() => {
    (async () => {
      console.log(token);
      const response = await subjectService.getAllSubjects(token);
      setSubjects(response.data);
    })();
  }, []);

  async function handleCreate() {
    const response = await testService.createTest(
      {
        test_description: testDescription,
        test_name: testName,
        subject_id: subject,
        time_limit: timeLimit,
      },
      user.id,
      token
    );
    toastService.showToast(response);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="false"
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
        }}
      >
        <Box
          style={{ background: "#f2f6fc" }}
          textAlign="center"
          sx={{
            width: "50%",
            height: "100%",
            boxShadow: 2,
            rowGap: 3,
            my: 1,
            justifyContent: "center",
          }}
        >
          <Typography
            textAlign="center"
            variant="h4"
            color="#F1B461"
            sx={{ my: 4 }}
          >
            Scholarly
          </Typography>
          <Typography color="#F1B461">
            Create a test by filling up the following information below.
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} sx={{ my: 4, width: 200 }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subject}
                label="Age"
                sx={{ width: 200 }}
                onChange={(e) => handleSubject(e.target.value)}
              >
                {subjects.map((item, key) => (
                  <MenuItem value={item.id} key={key}>
                    {item.subject_name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6} sx={{ my: 4, width: 200 }}>
              <TextField
                value={timeLimit}
                onChange={(e) => setTimeLimit(e.target.value)}
                required
                id="time-limit"
                label="Time Limit"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6} sx={{ my: 4, width: 200 }}>
              <TextField
                value={testName}
                onChange={(e) => setTestName(e.target.value)}
                required
                id="test-name"
                label="Test Name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6} sx={{ my: 4, width: 200 }}>
              <TextField
                value={testDescription}
                onChange={(e) => setTestDescription(e.target.value)}
                required
                id="test-description"
                label="Test Description  "
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
            Create Test
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
