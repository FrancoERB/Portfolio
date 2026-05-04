import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/theme-context';
import './index.css';
import { PortfolioApp } from './pages/PortfolioApp';
createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <StrictMode>
      <PortfolioApp />
    </StrictMode>
  </ThemeProvider>,
);
