import './App.css'
import Table from './Table';
import { BrowserRouter as Router, Route, Routes, Link, Navigate  } from 'react-router-dom'; // Імпортуємо компоненти для маршрутизації з react-router-dom.
import About from "./Actions/About";
import PersonPage from "./Actions/PersonPage";
import "antd/dist/reset.css";


function App() {

  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link  to="/">Головна</Link>
            </li>
            <li>
              <Link to="/about">Про нас</Link>
            </li>
            
          </ul>
        </nav>
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Table />} />
        <Route path="*" element={<Navigate to="/" />} /> 
        <Route path="/user/:id"
        element={<PersonPage />}>
        </Route>
      </Routes>
    </Router>

  )
}

export default App;
