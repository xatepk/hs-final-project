import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import NewsDetailPage from './pages/NewsDetailPage';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
      <Route path='/auth' element={<AuthPage />}></Route>
      <Route path='/news' element={<NewsPage />}></Route>
      <Route path='/news/:id' element={<NewsDetailPage />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
