import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import Attendance from './pages/Attendance';
import EmployeeDetails from './pages/EmployeeDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/attendance' element={<Attendance />}/>
        <Route path='/employee-details' element={<EmployeeDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
