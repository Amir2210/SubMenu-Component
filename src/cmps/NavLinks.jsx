import sublinks from '../data'
export function NavLinks() {
  return (
    <>
      {sublinks.map(link => <button className='nav-link' key={link.pageId}>{link.page}</button>)}
    </>
  )
}