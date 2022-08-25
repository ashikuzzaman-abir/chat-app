
import './App.css';

import useUser from './hooks/useUser';
import { useEffect } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import NotFound from './pages/NotFound';


function App() {
  const navigator = useNavigate();
  const user = useSelector(state => state.user.data);
  useEffect(() => {
    console.log(user)
    if(user === null ){
      navigator("/login")
    }
  }, [user])
  return (
    <div className="App bg-mainDarkBg min-h-[100vh]">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
