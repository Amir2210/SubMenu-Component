import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export function AppContext({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isLinkHover, setIsLinkHover] = useState(false)
  const [linkHovered, setLinkHovered] = useState(null)
  function onOpenSidebar() {
    setIsSidebarOpen(true)
  }
  function onCloseSidebar() {
    setIsSidebarOpen(false)
  }

  function onLinkHover(linkId) {
    setIsLinkHover(true)
    setLinkHovered(linkId)
  }

  function onLinkRemoveHover() {
    setIsLinkHover(false)
    setLinkHovered(null)
  }
  return (
    <GlobalContext.Provider value={{ onOpenSidebar, onCloseSidebar, onLinkHover, onLinkRemoveHover, isLinkHover, linkHovered }}>
      {children}
    </GlobalContext.Provider>
  )
}