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
import CssBaseline from "@mui/material/CssBaseline";

export default function TestView() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="false" sx={{ bgcolor: "#008037", height: "100vh" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <h3>Test 1</h3>
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
                <ListItemText primary="Subject" secondary="Sample Subject" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemText
                  primary="Test Name"
                  secondary="Sample Test Name"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemText
                  primary="Time Limit"
                  secondary="Sample Time Limit"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <h3>Test 2</h3>
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
                <ListItemText primary="Subject" secondary="Sample Subject" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemText
                  primary="Test Name"
                  secondary="Sample Test Name"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemText
                  primary="Time Limit"
                  secondary="Sample Time Limit"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <h3>Test 3</h3>
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
                <ListItemText primary="Subject" secondary="Sample Subject" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemText
                  primary="Test Name"
                  secondary="Sample Test Name"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemText
                  primary="Time Limit"
                  secondary="Sample Time Limit"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <h3>Test 4</h3>
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
                <ListItemText primary="Subject" secondary="Sample Subject" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemText
                  primary="Test Name"
                  secondary="Sample Test Name"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemText
                  primary="Time Limit"
                  secondary="Sample Time Limit"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <h3>Test 5</h3>
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
                <ListItemText primary="Subject" secondary="Sample Subject" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemText
                  primary="Test Name"
                  secondary="Sample Test Name"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemText
                  primary="Time Limit"
                  secondary="Sample Time Limit"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              borderRadius: 5,
              my: 9,
              mx: 6,
              boxShadow: 5,
            }}
          >
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
