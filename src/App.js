import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
function App() {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
