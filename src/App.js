import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Home from './views/home/home';
import themeOptions from './theme/themeOptions';
import Login from './views/login/login';
import { createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./api";

const userContext = createContext();

function App() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid
    } else {
      
    }
  });
  return (
    <ThemeProvider theme={themeOptions}>
      <div className="App">
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
