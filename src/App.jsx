import { useContext } from 'react';
import './App.css';
import Bacground from './components/atoms/background/Backgr';
import NavMain from './components/organisms/nav_main/NavMain';
import SideMain from './components/organisms/side_main/SideMain';
import Contacts from './components/pages/contacts/Contacts';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import AdminDashboard from './components/pages/dashboards/admin/AdminDashboard';
import UserDashboard from './components/pages/dashboards/user/UserDashboard';
import { Route, Routes } from 'react-router-dom';
import UsersContext from './contexts/UsersContext';
import TrainingCreate from './components/pages/trainings/create/TrainingCreate';

function App() {

  const {currentUser} = useContext(UsersContext);

  return (
    <>
      <Bacground/>
      <main id='viewer'>
        <NavMain />
        {
          ! currentUser ?
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes> :
          currentUser.admin ?
          <Routes>
            <Route path='/dashboard' element={<AdminDashboard/>} />
            <Route path='/training/create' element={<TrainingCreate/>} />
            <Route path='/training/edit' element={<AdminDashboard/>} />
          </Routes> : 
          <Routes>
            <Route path='/dashboard' element={<UserDashboard/>} />
          </Routes>
        }
        <SideMain />
      </main>
    </>
  );
}

export default App;