import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './stylesheet/style.scss';
import routers from './routers';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {routers.map((router, i) => (
            <Route key={i} path={router.path} element={router.element} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
