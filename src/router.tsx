import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/App';
import { Hiring, JobDescription, NotFound, Search, UserProfile } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'search',
        element: <Search />
      },
      {
        path: 'hiring',
        element: <Hiring />
      },
      {
        path: 'jobDescription/:jobId',
        element: <JobDescription />
      },
      {
        path: 'user/:userId',
        element: <UserProfile />
      }
    ]
  }
]);
