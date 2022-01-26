
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './common/Header';
import Home from './home';
import CreateList from './createList';
import './App.css';


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
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
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/lista' component={CreateList} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
