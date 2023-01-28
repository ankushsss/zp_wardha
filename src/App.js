import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Table from "./Components/Table";
// import Form from "./Form";
import Ragistration from "./Components/Ragistration";
import Detail from "./Components/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Ragistration />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/table" element={<Table />} />
        <Route path="/dashboard/Form" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
