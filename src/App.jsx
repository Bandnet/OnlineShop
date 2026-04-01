import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';


import HomePage from "./HomePage.jsx";
import SalePage from "./SalePage.jsx";
import LoginPage from "./LoginPage.jsx";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/Sale">Sale</Link> | <Link to="/Login">Login</Link>
                </nav>

                <h2>Hello</h2>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Sale" element={<SalePage />} />
                    <Route path="/Login" element={<LoginPage/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;