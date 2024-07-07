import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import Attendance from './pages/Attendance';
import EmployeeDetails from './pages/EmployeeDetails';
import ContactUs from './pages/ContactUs';
import CreateEmployee from './pages/CreateEmployee';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/attendance' element={<Attendance />}/>
        <Route path='/employee-details' element={<EmployeeDetails />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
        <Route path='login/logout' element={<LoginPage />}/>
        <Route path='create-employee' element={<CreateEmployee />} />
      </Routes>
    </div>
  );
}

export default App;