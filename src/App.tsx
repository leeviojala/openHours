import { CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import { DayProperties } from "./models";
import { DisplayCard } from "./components/DisplayCard";
import data from "./data.json";
import { theme } from "./theme";

const App: React.FC = () => {
  const days: DayProperties = data;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        className="App"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <DisplayCard days={days}></DisplayCard>
      </Container>
    </ThemeProvider>
  );
};

export default App;
