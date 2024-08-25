import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Login from './pages/Login';
import LoginMethod from './pages/LoginMethod'


function App() {
  return (
    <Router>
      <Routes path='/' element={<Layout/>}>
        <Route index element={<Login/>}/>
        <Route path='/loginmethod' element={<LoginMethod/>}/>
      </Routes>
    </Router>
  );
}

export default App;
