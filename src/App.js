import {Route, BrowserRouter, Routes } from 'react-router-dom';
import AlertsPage from './AlertsPage';
import HelpOptions from './HelpOptions';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/help" element={<HelpOptions />} />
        <Route path="/alerts" element={<AlertsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
