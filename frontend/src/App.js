import './App.css';
import NavBar from './Pages/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import General from './Pages/General';
import AuthLogin from './db/auth';
const a=AuthLogin.getInstance();
function App() {
  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<General />} />
          <Route path='/signin' element={<SignIn auth={a} />} />
          <Route path='/signup' element={<SignUp auth={a}/>} />
        </Routes>
      </BrowserRouter>
    </>


  );
}
export default App;
