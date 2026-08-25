import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';
import SEO from './components/seo/SEO';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <AppRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
