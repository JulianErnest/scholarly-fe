import * as React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Field from "./Field";
import { Box, Button, Grid } from "@mui/material";
import { Test } from "../types/Test";
import testService from "../services/testService";
import { UserContextType } from "../context/User";
import { UserContext } from "../context/UserContext";
import itemService from "../services/itemService";
import { Item } from "../types/Item";
import toastService from "../services/toastService";
const theme = createTheme();

export default function ShowQuestion() {
  const [test, setTest] = useState<Test | null>(null);
  const [questions, setQuestions] = useState<Item[]>([]);
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
      setQuestions(questions_response.data);
      setTest(response.data[0]);
    })();
  }, []);

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
            width: "100%",
            height: "90%",
            backgroundColor: "gold",
          }}
        >
          <Typography variant="h4" textAlign="center" paddingTop={10}>
            Test Details
          </Typography>
          <Typography variant="h6" textAlign="left" paddingTop={5}>
            Test Name
          </Typography>
          <Typography variant="h6" textAlign="left" paddingLeft={2}>
            {test?.test_name}
          </Typography>
          <Typography variant="h6" textAlign="left" paddingTop={5}>
            Test Description
          </Typography>
          <Typography variant="h6" textAlign="left" paddingLeft={2}>
            {test?.test_description}
          </Typography>
          <Typography variant="h6" textAlign="left" paddingTop={5}>
            Time Limit
          </Typography>
          <Typography variant="h6" textAlign="left" paddingLeft={2}>
            {test?.time_limit}
          </Typography>
          <Typography variant="h6" textAlign="left" paddingTop={5}>
            Number of Questions
          </Typography>
          <Typography variant="h6" textAlign="left" paddingLeft={2}>
            {questions.length}
          </Typography>
        </Box>
        <Box></Box>
      </Grid>
    </Grid>
  );
}
