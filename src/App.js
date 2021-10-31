import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import themeOptions from './theme/themeOptions';
import { Auth, Home } from './views';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <ThemeProvider theme={themeOptions}>
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/auth">
                <Auth />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
