import './Fonts.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './Routes/protected.route';
import Homepage from './Pages/homepage';
import ProfilePage from './Pages/Profile'
import Login from './Pages/Login/index';
import Register from './Pages/Register';
import { Error } from './Pages/Error';


function App() {


  return (
    <div className='main'>
      <Router>
        <Routes>
          <Route  path='/' element={<Homepage />} />
          <Route path='/profile' element={<ProtectedRoute />} >
            {/* Profile page is only accessible if user is logged in */}
            <Route path='/profile' element={<ProfilePage />} />
            {/* Profile page is only accessible if user is logged in */}
          </Route>
          <Route  path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route  path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
