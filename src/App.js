import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import MainPage from './Pages/MainPage/MainPage';
import Footer from './Components/Footer/Footer';
import ResumePage from './Pages/Resume/ResumePage';

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Header />
        <main className="content-wrap">
          <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/resume' element={<ResumePage />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
