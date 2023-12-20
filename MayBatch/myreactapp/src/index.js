import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient,QueryClientProvider } from 'react-query';

const queryClient=new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000, // Global stale time set to 30 seconds
      cacheTime: 60000, // Global cache time set to 1 minute
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider  client={queryClient}><App /></QueryClientProvider>
  </React.StrictMode>
);


