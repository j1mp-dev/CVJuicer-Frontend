import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import CreateCvPage from './pages/CreateCvPage';

function App() {

  return (
    <BrowserRouter>
            <Routes>
                {/* public routes */}
                <Route path="/" element={<MainPage />} />
                <Route path="/create-cv" element={<CreateCvPage />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
