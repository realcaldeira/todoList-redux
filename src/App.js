
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Header from './common/Header';
import Home from './home';
import CreateList from './createList';
import './App.css';


const theme = createTheme({
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
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
