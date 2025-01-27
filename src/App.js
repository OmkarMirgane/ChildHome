
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Applicantreg from './Components/Registration/Applicantreg'
import Childhhomereg from './Components/Registration/Childhhomereg';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Applicantreg' element={<Applicantreg />} />
        <Route path='/Childhomereg' element={<Childhhomereg />} />
        <Route path='/login' element={<Login />} />
      </Routes>


    </>
  );
}

export default App;
