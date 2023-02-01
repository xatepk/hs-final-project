import { Routes, Route } from 'react-router-dom';
import ApartmentsPage from './pages/ApartmentsPage';
import AuthPage from './pages/AuthPage';
import ContactsPage from './pages/ContactsPage';
import MainPage from './pages/MainPage';
import NewsDetailPage from './pages/NewsDetailsPage';
import NewsPage from './pages/NewsPage';
import PageNotFound from './pages/PageNotFound';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/auth' element={<AuthPage />}></Route>
        <Route path='/register' element={<RegistrationPage />}></Route>
        <Route path='/news' element={<NewsPage />}></Route>
        <Route path='/apartments' element={<ApartmentsPage />}></Route>
        <Route path='/news/:id' element={<NewsDetailPage />}></Route>
        <Route path='/contacts' element={<ContactsPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
