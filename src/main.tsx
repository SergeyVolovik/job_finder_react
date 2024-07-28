import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import '@/index.css';
import { router } from '@/router';
import { counterStore } from '@/store';
import 'normalize.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={counterStore}>
    <RouterProvider router={router} />
  </Provider>
);
