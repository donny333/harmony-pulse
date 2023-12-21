import './App.css';
import Bacground from './components/atoms/background/Backgr';
import NavMain from './components/organisms/nav_main/NavMain';
import SideMain from './components/organisms/side_main/SideMain';
import Home from './components/pages/home/Home';

function App() {
  return (
    <>
      <Bacground/>
      <main id='viewer'>
        <NavMain />
        <Home />
        <SideMain />
      </main>
    </>
  );
}

export default App;