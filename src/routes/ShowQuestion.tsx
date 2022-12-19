import * as React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Button, Grid, MenuItem, Select, TextField } from "@mui/material";
import { Test } from "../types/Test";
import testService from "../services/testService";
import { UserContextType } from "../context/User";
import { UserContext } from "../context/UserContext";
import itemService from "../services/itemService";
import { Item } from "../types/Item";
import toastService from "../services/toastService";
import { Subject } from "../types/Subject";
import subjectService from "../services/subjectService";

export default function ShowQuestion() {
  const [test, setTest] = useState<Test | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [questions, setQuestions] = useState<Item[]>([]);
  const [testName, setTestName] = useState("");
  const [testDescription, setTestDescription] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [subject, handleSubject] = useState("");
  const { token, user } = React.useContext(UserContext) as UserContextType;
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await testService.getTestsById(
        token,
        params.id as unknown as number
      );
      const questions_response = await itemService.getTestItems(
        params.id as unknown as number,
        token
      );
      const subject_response = await subjectService.getAllSubjects(token);
      setSubjects(subject_response.data);
      setQuestions(questions_response.data);
      setTest(response.data[0]);
    })();
  }, []);

  useEffect(() => {
    setTestName(test?.test_name as string);
    setTestDescription(test?.test_description as string);
    setTimeLimit(test?.time_limit as any);
    handleSubject(
      subjects.find((s) => s.id === test?.subject_id)?.id as any
    );
  }, [test, subjects]);

  async function handleDelete(item: Item) {
    const response = await itemService.deleteItem(item.id, token);
    toastService.showToast(response);
    if (response.success) {
      const questions_response = await itemService.getTestItems(
        params.id as unknown as number,
        token
      );
      setQuestions(questions_response.data);
    }
  }

  async function handleUpdate() {
    const response = await testService.updateTest(
      {
        test_description: testDescription,
        test_name: testName,
        subject_id: subject,
        time_limit: timeLimit.toString(),
      },
      user.id,
      token
    );
    setTest(response.data);
    toastService.showToast(response);
  }

  return (
    <Grid
      container
      spacing={0}
      sx={{ height: "90vh", backgroundColor: "green" }}
    >
      <Grid
        item
        xs={9}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h4" paddingTop={5} textAlign="center">
          Questions
        </Typography>
        {questions.map((item, key) => (
          <Box key={key} width="90%" height={150}>
            <Typography>{item.question}</Typography>
            <Typography>{item.answer}</Typography>
            <Button
              onClick={() => handleDelete(item)}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Delete Question
            </Button>
          </Box>
        ))}
        <Button
          variant="contained"
          onClick={() => navigate("/questioncreate/" + params.id)}
          style={{ backgroundColor: "gold", color: "black", marginTop: "20px" }}
        >
          Add new question
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Box
          sx={{
            height: "90%",
            backgroundColor: "gold",
            display: "flex",
            flexDirection: "column",
            paddingLeft: 3,
            paddingRight: 3,
          }}
        >
          <Typography variant="h5" textAlign="center" paddingTop={3}>
            Test Details
          </Typography>

          <Typography variant="h6" textAlign="left" paddingTop={3}>
            Test Name
          </Typography>
          <TextField
            value={testName}
            onChange={(t) => setTestName(t.target.value)}
          />

          <Typography variant="h6" textAlign="left" paddingTop={3}>
            Test Description
          </Typography>
          <TextField
            value={testDescription}
            onChange={(t) => setTestDescription(t.target.value)}
          />

          <Typography variant="h6" textAlign="left" paddingTop={3}>
            Time Limit
          </Typography>
          <TextField
            value={timeLimit}
            onChange={(t) => setTimeLimit(t.target.value)}
          />

          <Typography variant="h6" textAlign="left" paddingTop={3}>
            Number of Questions
          </Typography>
          <Typography variant="h6" textAlign="left" paddingLeft={2}>
            {questions.length}
          </Typography>

          <Typography variant="h6" textAlign="left" paddingTop={3}>
            Subject
          </Typography>
          <Select
            style={{ marginTop: 20 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={subject}
            label="Age"
            onChange={(e) => handleSubject(e.target.value)}
          >
            {subjects.map((item, key) => (
              <MenuItem value={item.id} key={key}>
                {item.subject_name}
              </MenuItem>
            ))}
          </Select>

          <Button
            onClick={handleUpdate}
            style={{ backgroundColor: "green", color: "white", marginTop: 50 }}
          >
            Update Test
          </Button>
        </Box>
        <Box></Box>
      </Grid>
    </Grid>
  );
}
