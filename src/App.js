import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                {/* public routes */}
                <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
