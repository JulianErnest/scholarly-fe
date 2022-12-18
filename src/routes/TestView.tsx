import { useNavigate, useOutlet } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useContext, useEffect, useState } from "react";
import { Test } from "../types/Test";
import testService from "../services/testService";
import { UserContextType } from "../context/User";
import { UserContext } from "../context/UserContext";

export default function TestView() {
  const [tests, setTests] = useState<Test[]>([]);
  const navigate = useNavigate();
  const { token, user } = useContext(UserContext) as UserContextType;
  useEffect(() => {
    (async () => {
      const response = await testService.getTestsUser(token, user.id);
      if (response.success) {
        setTests(response?.data);
      }
    })();
  }, []);

  return (
    <Container maxWidth="false" sx={{ bgcolor: "#008037", height: "100vh" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {tests.map((test) => (
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                  border: 1,
                  borderRadius: 5,
                  my: 4,
                }}
              >
                {" "}
                <ListItem>
                  <ListItemText primary="Subject" secondary={test.subject_id} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemText
                    primary="Test Name"
                    secondary={test.test_name}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemText
                    primary="Time Limit"
                    secondary={test.time_limit}
                  />
                </ListItem>
              </List>
            ))}
          </Grid>
          <Grid>
            <Paper elevation={3} />
            <Typography
              textAlign="center"
              variant="h4"
              color="#F1B461"
              sx={{ my: 2 }}
            >
              Scholarly
            </Typography>
            <Typography color="#F1B461">
              Create a new test by clicking the button below.
            </Typography>
            <Box textAlign="center">
              <Button
                size="large"
                variant="contained"
                color="success"
                onClick={() => navigate("/testcreate")}
                sx={{ my: 4, width: 200 }}
              >
                Create Test
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
