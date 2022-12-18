import { useState } from "react";
import { useOutlet, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, MenuItem, Select } from "@mui/material";
import ImageBG from "../assets/login-bg.jpg";
<<<<<<< HEAD
import { TestFields } from "../types/fields";
import createService from "../services/createService";

=======
import { useContext, useEffect, useState } from "react";
import subjectService from "../services/subjectService";
import { UserContext } from "../context/UserContext";
import { UserContextType } from "../context/User";
import { Subject } from "../types/Subject";
import testService from "../services/testService";
import toastService from "../services/toastService";
>>>>>>> 004be982fbe294beaf0fa544cb4e16d0f99d553e
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 004be982fbe294beaf0fa544cb4e16d0f99d553e
            Create a test by filling up the following information below.
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} sx={{ my: 4, width: 200 }}>
<<<<<<< HEAD
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
=======
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
>>>>>>> 004be982fbe294beaf0fa544cb4e16d0f99d553e
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
