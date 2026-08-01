import { createHashRouter } from 'react-router'
import RootLayout from './layouts/RootLayout.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
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
      { path: 'projects', element: <Projects /> },
      { path: 'professional', element: <Professional /> },
      { path: 'hockey', element: <Hockey /> },
    ],
  },
])