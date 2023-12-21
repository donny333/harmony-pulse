import './App.css';
import Bacground from './components/atoms/background/Backgr';
import NavMain from './components/organisms/nav_main/NavMain';
import SideMain from './components/organisms/side_main/SideMain';
import Contacts from './components/pages/contacts/Contacts';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Bacground/>
      <main id='viewer'>
        <NavMain />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <SideMain />
      </main>
    </>
  );
}

export default App;