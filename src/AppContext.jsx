import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export function AppContext({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function onOpenSidebar() {
    setIsSidebarOpen(true)
  }
  function onCloseSidebar() {
    setIsSidebarOpen(false)
  }
  return (
    <GlobalContext.Provider value={{ onOpenSidebar, onCloseSidebar }}>
      {children}
    </GlobalContext.Provider>
  )
}