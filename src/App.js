import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import themeOptions from './theme/themeOptions';
import Auth from './views/auth/auth';
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
                <p>This is home</p>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
