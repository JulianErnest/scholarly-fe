import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import { useContext, useEffect, useState } from "react";
import { UserContextType } from "../context/User";
import { UserContext } from "../context/UserContext";
import { Item } from "../types/Item";
import { Test } from "../types/Test";
import testService from "../services/testService";
const theme = createTheme();

export default function Tests() {
  const [keyword, setKeyword] = useState("");
  const [tests, setTests] = useState<Test[]>([]);
  const { token } = useContext(UserContext) as UserContextType;
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      console.log(keyword);
      // Send Axios request here
      if (keyword.length === 0) {
        const response = await testService.getTests(token);
        setTests(response.data);
        console.log(response.data);
      } else {
        const response = await testService.searchTest(token, keyword);
        console.log(response.data);
        setTests(response.data);
      }
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [keyword]);

  useEffect(() => {
    (async () => {
      const response = await testService.getTests(token);
      console.log(response);
      setTests(response.data);
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "#323232",
          elevation: 5,
          borderRadius: 2,
          height: "80vh",
        }}
      >
        <Typography
          textAlign="center"
          variant="h4"
          color="white"
          sx={{ my: 6, pt: 10 }}
        >
          All Test Items
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid
              container
              sx={{
                marginLeft: "40px",
                marginRight: "40px",
                marginTop: "50px",
                marginBottom: "10px",
              }}
            >
              <Grid item xs={2}>
                <h5 style={styles.tableHeader}>Test Name</h5>
              </Grid>
              <Grid item xs={2}>
                <h5 style={styles.tableHeader}>Test Description</h5>
              </Grid>
              <Grid item xs={2}>
                <h5 style={styles.tableHeader}>Test Creator</h5>
              </Grid>
              <Grid item xs={2}>
                <h5 style={styles.tableHeader}>Subject Name</h5>
              </Grid>
            </Grid>
            <List style={styles.list}>
              {tests.map((item, key) => (
                <Grid key={key} container sx={{ height: "100%" }}>
                  <Grid item xs={2}>
                    <h3 style={styles.tableHeader}>{item.test_name}</h3>
                  </Grid>
                  <Grid item xs={2}>
                    <h3 style={styles.tableHeader}>{item.test_description}</h3>
                  </Grid>
                  <Grid item xs={4}>
                    <h3 style={styles.tableHeader}>
                      {item.first_name + " " + item.last_name}
                    </h3>
                  </Grid>
                  <Grid item xs={2}>
                    <h3 style={styles.tableHeader}>{item.subject_name}</h3>
                  </Grid>
                </Grid>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

const styles = {
  tableHeader: {
    textAlign: "center" as const,
    width: "100%",
    color: "white",
    padding: 0,
    margin: 0,
  },
  list: {
    backgroundColor: "#737373",
    overflow: "auto",
    height: "40vh",
    marginLeft: "40px",
    marginRight: "40px",
    marginTop: "10px",
    marginBottom: "15px",
  },
  text: {
    color: "black",
    fontSize: "1em",
    margin: "auto",
    flexBasis: "100%",
  },
};
