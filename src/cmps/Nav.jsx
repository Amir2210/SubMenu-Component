import { FaBars } from 'react-icons/fa'
import {NavLinks} from './NavLinks'
export function Nav() {
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">Component</h3>
        <button className="toggle-btn"><FaBars /></button>
        <div className="nav-links">
          <NavLinks />
        </div>
      </div>
    </nav>
  )
}