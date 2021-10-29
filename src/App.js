import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import themeOptions from './theme/themeOptions';
import Login from './views/home/components/login/login';
import Home from './views/home/home';


function App() {

  return (
    <ThemeProvider theme={themeOptions}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
