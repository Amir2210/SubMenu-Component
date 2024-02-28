import { useGlobalContext } from '../AppContext'
import sublinks from '../data'
export function Sidebar() {
  const { isSidebarOpen, onToggleSidebar } = useGlobalContext()
  return (
    isSidebarOpen ? (
      <aside className='sidebar show-sidebar'>
        <div className="sidebar-container">
          <button onClick={onToggleSidebar} className="close-btn">X</button>
          <div className="sidebar-links">
            {sublinks.map(link => <article key={link.pageId}>
              <h4>{link.page}</h4>
              <div className="sidebar-sublinks">
                {link.links.map(icon => <a href={icon.url} key={icon.id}>{icon.icon}{icon.label}</a>)}
              </div>
            </article>)}
          </div>
        </div>
      </aside>
    ) : null
  )
}