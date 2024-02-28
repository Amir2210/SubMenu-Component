import { useGlobalContext } from '../AppContext'

export function Sidebar() {
  const { isSidebarOpen } = useGlobalContext()
  return (
    isSidebarOpen ? (
      <aside className='sidebar show-sidebar'>
        <div className="sidebar-container">
          <button className="close-btn">X</button>

        </div>
      </aside>
    ) : null
  )
}