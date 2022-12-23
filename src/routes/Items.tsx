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
import itemService from "../services/itemService";
import { Item } from "../types/Item";
const theme = createTheme();

export default function Items() {
  const [keyword, setKeyword] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const { token } = useContext(UserContext) as UserContextType;
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      console.log(keyword);
      // Send Axios request here
      if (keyword.length === 0) {
        const response = await itemService.getAllItems(token);
        setItems(response.data);
      } else {
        const response = await itemService.searchItem(token, keyword);
        setItems(response.data);
      }
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [keyword]);

  useEffect(() => {
    (async () => {
      const response = await itemService.getAllItems(token);
      console.log(response);
      setItems(response.data);
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
          sx={{ my: 2 , pt: 2 }}
        >
          All Test Items
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          InputLabelProps={{
            style: { color: "white" },
          }}
          label="Search for a test question"
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
                <h5 style={styles.tableHeader}>Question</h5>
              </Grid>
              <Grid item xs={2}>
                <h5 style={styles.tableHeader}>Answer</h5>
              </Grid>
              <Grid item xs={4}>
                <h5 style={styles.tableHeader}>Created At</h5>
              </Grid>
              <Grid item xs={2}>
                <h5 style={styles.tableHeader}>Test ID</h5>
              </Grid>
            </Grid>
            <List style={styles.list}>
              {items.map((item, key) => (
                <Grid key={key} container sx={{ height: "100%" }}>
                  <Grid item xs={2}>
                    <h3 style={styles.tableHeader}>{item.question}</h3>
                  </Grid>
                  <Grid item xs={2}>
                    <h3 style={styles.tableHeader}>{item.answer}</h3>
                  </Grid>
                  <Grid item xs={4}>
                    <h3 style={styles.tableHeader}>{item.created_at}</h3>
                  </Grid>
                  <Grid item xs={2}>
                    <h3 style={styles.tableHeader}>{item.test_id}</h3>
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
