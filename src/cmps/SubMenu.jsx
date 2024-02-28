import { useGlobalContext } from '../AppContext'
import sublinks from '../data'
export function SubMenu() {
  const { isLinkHover, linkHovered } = useGlobalContext()
  const hoveredLink = sublinks.find(link => link.pageId === linkHovered)
  return (
    isLinkHover ? (
      <div className="submenu show-submenu">
        <h5>{hoveredLink.page}</h5>
        <div className="submenu-links">
          {hoveredLink.links.map(link => <a key={link.id}>{link.icon}{link.label}</a>)}
        </div>
      </div>
    ) : null
  )
}