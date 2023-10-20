import './App.css';
import { Routes, Route } from 'react-router';
import Nav from './ui/sidebar';
import RecordTraining from './components/register-training';
import UserRegister from './components/register-user';
import Trainings from './components/trainings';
import Login from './components/login';
import { AuthProvider } from './firebase/context';
import Home from './components/home';

function App() {
  return (
    <div>
      <AuthProvider>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register-user' element={<UserRegister />} />
          <Route path='/trainings' element={<Trainings />} />
          <Route path='/register-training' element={<RecordTraining />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
