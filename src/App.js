
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Header from './common/Header';
import Home from './home';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f50057',
    },
    secondary: {
      main: '#2196f3',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
