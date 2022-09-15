import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </StrictMode>
);
