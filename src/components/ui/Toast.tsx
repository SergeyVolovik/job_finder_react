import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Toast = () => (
  <ToastContainer
    bodyClassName="text-black"
    progressClassName="bg-green"
    position="bottom-right"
    autoClose={4000}
    closeOnClick
    pauseOnFocusLoss
    pauseOnHover
    hideProgressBar={false}
    newestOnTop={false}
    rtl={false}
    draggable={false}
    theme="light"
  />
);
