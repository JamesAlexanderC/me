import { NavLink, Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <>
      <nav>
        <ul id="navbar">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/personal">Personal</NavLink></li>
          <li><NavLink to="/professional">Professional</NavLink></li>
          <li><NavLink to="/hockey">Hockey</NavLink></li>
          <li id="push-right"><a href="/James-Clarke-CV.pdf">CV</a></li>
        </ul>
      </nav>

      <div id="main">
        <Outlet />
        <footer><p>&copy; 2026 James Clarke. All rights reserved.</p></footer>
      </div>
    </>
  )
}