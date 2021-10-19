import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Home from './views/home/home';
import themeOptions from './theme/themeOptions';
import Login from './views/login/login';

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <div className="App">
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
