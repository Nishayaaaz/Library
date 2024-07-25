import { Route, Routes } from 'react-router-dom';
import Sidenav from './Components/Sidenav';
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import AuthorManagement from './Components/AuthorManagement';
import BookManagement from './Components/BookManagement';
import './App.css';

function App() {

  return (
    <>
      <div className='app'>
        <Sidenav>
            <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/authors' element={<AuthorManagement/>} />
              <Route path='/books' element={<BookManagement/>} />
            </Routes>
        </Sidenav>
      </div>
    </>
  )
}

export default App