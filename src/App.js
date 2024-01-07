import { BrowserRouter, Route, Navigate } from "react-router-dom";
import RoutesList from "./routes/RoutesList";
import NavBar from "./navigation/NavBar";
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
