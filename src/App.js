
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Route, Routes,Navigate } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path='/' element={<Navigate to={'/signup'}/>}/>
      </Routes>
    </div>
  );
}

export default App;
