import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/registration' element={<Registration/>} />
        </Routes>
      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
