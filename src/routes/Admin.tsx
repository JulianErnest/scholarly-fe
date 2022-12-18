import { useOutlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const theme = createTheme();

export default function Admin() {
  const outlet = useOutlet();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ bgcolor: "#323232", elevation: 5, borderRadius: 2}}>
                <Typography textAlign="center" variant="h4" color="black" sx={{ my: 6, pt: 10}}>
                    Admin Dashboard
                </Typography>
                <Box>
            </Box>
        <Grid container spacing={2}>
            <Grid item xs={6}>
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
              <Grid container sx={{}}>
                <Grid item xs={2}>
                  <h5 style={styles.tableHeader}></h5>
                </Grid>
                <Grid item xs={2}>
                  <h5 style={styles.tableHeader}></h5>
                </Grid>
                <Grid item xs={2}>
                  <h5 style={styles.tableHeader}></h5>
                </Grid>
                <Grid item xs={4}>
                  <h5 style={styles.tableHeader}></h5>
                </Grid>
                <Grid item xs={2}>
                  <h5 style={styles.tableHeader}></h5>
                </Grid>
              </Grid>
          </List>
            </Grid>
            <Grid item xs={6}>
                <Grid
            container
            sx={{
              marginLeft: "40px",
              marginRight: "40px",
              marginTop: "50px",
              marginBottom: "10px",
            }}
          >
            <Grid item xs={10}>
              <h5 style={styles.tableHeader}>Subject Name</h5>
              <List style={styles.list}>
              <Grid container sx={{}}>
                <Grid item xs={2}>
                  <h5 style={styles.tableHeader}></h5>
                </Grid>
              </Grid>
          </List>
            </Grid>
          </Grid>
            </Grid>
            <Grid item xs={6}>
            <Box textAlign='center'>
                <Button size="medium" variant="contained" color="success" sx={{ my: 4, width: 300 }}>Load all customer records</Button>
            </Box>
            </Grid>
            <Grid item xs={6}>
            <Box textAlign='center'>
                <Box textAlign='center'>
                    <TextField id="filled-basic" label="Add Subject" variant="outlined" size="small" />
                </Box>
                <Button size="medium" variant="contained" color="success" sx={{ my: 4, width: 300 }}>Load all subjects</Button>
            </Box>
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
        color: "black",
        padding: 0,
        margin: 0,
      },
      list: {
        backgroundColor: "#737373",
        overflow: "auto",
        height: "10em",
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