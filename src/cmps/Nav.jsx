import { FaBars } from 'react-icons/fa'
import { NavLinks } from './NavLinks'
import { useGlobalContext } from '../AppContext'
export function Nav() {
  const { onToggleSidebar } = useGlobalContext()
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">Component</h3>
        <button onClick={onToggleSidebar} className="toggle-btn"><FaBars /></button>
        <div className="nav-links">
          <NavLinks />
        </div>
      </div>
    </nav>
  )
}