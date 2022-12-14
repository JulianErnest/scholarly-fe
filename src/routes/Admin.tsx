import { useOutlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext, useEffect, useState } from "react";
import authService from "../services/authService";
import { UserContextType } from "../context/User";
import { UserContext } from "../context/UserContext";
const theme = createTheme();

export default function Admin() {
  const outlet = useOutlet();
  const [keyword, setKeyword] = useState("");
  const [users, setUsers] = useState([]);
  const { token } = useContext(UserContext) as UserContextType;
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      console.log(keyword);
      // Send Axios request here
      if (keyword.length === 0) {
        const response = await authService.getAllUsers(token);
        setUsers(response.data);
      } else {
        const response = await authService.searchUser(token, keyword);
        setUsers(response.data);
      }
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [keyword]);

  useEffect(() => {
    (async () => {
      const response = await authService.getAllUsers(token);
      console.log(response);
      setUsers(response.data);
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
          All Users
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          InputLabelProps={{
            style: { color: "white" },
          }}
          label="Search for a user"
          sx={{ input: { color: "white", backgroundColor: "green" } }}
          value={keyword}
          onChange={(t) => setKeyword(t.target.value)}
          autoFocus
        />
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
                <h5 style={styles.tableHeader}>First Name</h5>
              </Grid>
              <Grid item xs={2}>
                <h5 style={styles.tableHeader}>Last Name</h5>
              </Grid>
              <Grid item xs={4}>
                <h5 style={styles.tableHeader}>Email</h5>
              </Grid>
              <Grid item xs={2}>
                <h5 style={styles.tableHeader}>User Type</h5>
              </Grid>
            </Grid>
            <List style={styles.list}>
              {users.map((user: any, key) => (
                <Grid key={key} container sx={{ height: "100%" }}>
                  <Grid item xs={2}>
                    <h3 style={styles.tableHeader}>{user.first_name}</h3>
                  </Grid>
                  <Grid item xs={2}>
                    <h3 style={styles.tableHeader}>{user.last_name}</h3>
                  </Grid>
                  <Grid item xs={4}>
                    <h3 style={styles.tableHeader}>{user.email}</h3>
                  </Grid>
                  <Grid item xs={2}>
                    <h3 style={styles.tableHeader}>{user.user_type}</h3>
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
