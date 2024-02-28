import { useGlobalContext } from '../AppContext'
import sublinks from '../data'
export function NavLinks() {
  const { onLinkHover, onLinkRemoveHover } = useGlobalContext()
  return (
    <>
      {sublinks.map(link => <button
        onMouseEnter={() => onLinkHover(link.pageId)}
        onMouseLeave={onLinkRemoveHover}
        className='nav-link'
        key={link.pageId}
      >
        {link.page}
      </button>)}
    </>
  )
}