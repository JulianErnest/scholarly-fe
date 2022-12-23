import { useNavigate, useOutlet, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";

import ImageBG from "../assets/login-bg.jpg";
import { useContext, useState } from "react";
import itemService from "../services/itemService";
import { UserContextType } from "../context/User";
import {UserContext} from "../context/UserContext";
import toastService from "../services/toastService";
const theme = createTheme();

export default function QuestionCreate() {
  const navigate = useNavigate();
  const { token, user } = useContext(UserContext) as UserContextType;
  const params = useParams();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [choiceA, setChoiceA] = useState("");
  const [choiceB, setChoiceB] = useState("");
  const [choiceC, setChoiceC] = useState("");
  const [choiceD, setChoiceD] = useState("");

  async function handleCreate() {
    const response = await itemService.createItem({
        answer,
        question,
        choice_a: choiceA,
        choice_b: choiceB,
        choice_c: choiceC,
        choice_d: choiceD,
        test_id: params.id as unknown as number,
    }, user.id, token)
    toastService.showToast(response);
    console.log(response)
    if (response.success) {
        setQuestion("");
        setAnswer("");
        setChoiceA("");
        setChoiceB("");
        setChoiceC("");
        setChoiceD("");
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
          my: 3,
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
            Create a question by filling up the following information below.
          </Typography>

          <TextField
            name={question}
            onChange={(e) => setQuestion(e.target.value)}
            label="Question"
            id="question"
            margin="normal"
            sx={{ mx: 3, mt: 4, width: 700 }}
          />
          <TextField
            name={answer}
            onChange={(e) => setAnswer(e.target.value)}
            label="Answer"
            id="answer"
            margin="normal"
            sx={{ mx: 3, mb: 4, width: 700 }}
          />

          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item sm={6}>
              <TextField
                name={choiceA}
                onChange={(e) => setChoiceA(e.target.value)}
                id="choice-a"
                label="Choice A"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                name={choiceB}
                onChange={(e) => setChoiceB(e.target.value)}
                id="choice-b"
                label="Choice B"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                name={choiceC}
                onChange={(e) => setChoiceC(e.target.value)}
                id="choice-c"
                label="Choice C"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                name={choiceD}
                onChange={(e) => setChoiceD(e.target.value)}
                id="choice-d"
                label="Choice D"
                variant="outlined"
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
            Create Question
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
