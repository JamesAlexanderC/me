import { NavLink, Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <>
      <nav>
        <ul id="navbar">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/now">Now</NavLink></li>
          <li><NavLink to="/professional">Professional</NavLink></li>
          <li><NavLink to="/hockey">Hockey</NavLink></li>
          <li id="push-right"><a href="/James-Clarke-CV.pdf">CV</a></li>
        </ul>
      </nav>

      <div id="main">
        <Outlet />
      </div>

      <footer>
        <ul id="footer">
          <li><a href="https://github.com/JamesAlexanderC"><img src="github.svg" id="github-svg" /></a></li>
          <li><a href="https://www.linkedin.com/in/james-clarke-a3376931b"><img src="linkedin.svg" id="linkedin-svg" /></a></li>
        </ul>

        <p>&copy; 2026 James Clarke. All rights reserved.</p>
      </footer>
    </>
  )
}