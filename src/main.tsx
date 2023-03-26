import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { router } from '@/router';
import { counterStore } from '@/store';
import 'normalize.css';
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={counterStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
