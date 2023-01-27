import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import { Route ,Routes } from 'react-router-dom';
import Table from './Components/Table';


function App() {
  return (
  
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} >
              <Route path="/dashboard/table" element={<Table/>} />

          </Route>
        </Routes>
    
  );
}

export default App;
