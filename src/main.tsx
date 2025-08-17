import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';  // 👈 Import HashRouter
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <Router>  {/* 👈 Wrap App with HashRouter */}
    <App />
  </Router>
);
