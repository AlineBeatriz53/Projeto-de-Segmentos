import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/login-page/page-login';


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>      
        <Route path="/pagina-inicial" element={<p>Página inicial</p>} />
        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      </Routes>
    </BrowserRouter>

  );
}