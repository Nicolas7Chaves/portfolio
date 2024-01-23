import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import MainPage from './Pages/MainPage/MainPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
