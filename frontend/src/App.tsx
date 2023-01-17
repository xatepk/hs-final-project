import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ApartmentsPage from './pages/ApartmentsPage';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import NewsDetailPage from './pages/NewsDetailsPage';
import NewsPage from './pages/NewsPage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className='page'>
    <Header />
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
      <Route path='/auth' element={<AuthPage />}></Route>
      <Route path='/news' element={<NewsPage />}></Route>
      <Route path='/apartments' element={<ApartmentsPage />}></Route>
      <Route path='/news/:id' element={<NewsDetailPage />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
