import { createHashRouter } from 'react-router'
import RootLayout from './layouts/RootLayout.jsx'
import Home from './pages/Home.jsx'
import Personal from './pages/Personal.jsx'
import Professional from './pages/Professional.jsx'
import Hockey from './pages/Hockey.jsx'
import NotFound from './pages/NotFound.jsx'

export const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'personal', element: <Personal /> },
      { path: 'professional', element: <Professional /> },
      { path: 'hockey', element: <Hockey /> },
    ],
  },
])