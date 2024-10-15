import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import GoogleOAuthProvider from the package
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the app in GoogleOAuthProvider and pass the client ID */}
    <GoogleOAuthProvider clientId="1095227271331-1afa8aeojkmjimp56eo9sbddejsg1tb4.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
);
