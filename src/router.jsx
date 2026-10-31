import { createHashRouter, redirect } from 'react-router'
import RootLayout from './layouts/RootLayout.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Professional from './pages/Professional.jsx'
import Hockey from './pages/Hockey.jsx'
import BusinessCard from './pages/BusinessCard.jsx'
import NotFound from './pages/NotFound.jsx'

// Phones (narrow touch screens) get the business card instead of the full site
const isPhone = () =>
  window.matchMedia('(max-width: 768px) and (pointer: coarse)').matches

export const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    loader: () => (isPhone() ? redirect('/BusinessCard') : null),
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'professional', element: <Professional /> },
      { path: 'hockey', element: <Hockey /> },
    ],
  },
  {
    path: '/BusinessCard',
    element: <BusinessCard />,
    errorElement: <NotFound />,
  },
])