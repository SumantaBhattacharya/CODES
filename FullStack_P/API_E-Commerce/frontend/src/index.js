import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import "./utils/i18.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

// Create a client
const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 mins
        refetchOnMount: false, // don't refetch on mount if data is fresh
        refetchOnWindowFocus: false, // avoid refetch on tab switch
        refetchOnReconnect: false, // avoid refetch when network reconnects what are these for
      },
    },
  }
)

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App /> {/* App still contains Redux Provider*/}
      {/* <ReactQueryDevtools initialIsOpen={false} />*/}
      {/* By default, React Query Devtools are only included in bundles when process.env.NODE_ENV === 'development', so you don't need to worry about excluding them during a production build. */}
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
