import React from 'react'
import { AppContext, type AppContextProps } from '../context/AppContext'

const useAppContext = (): AppContextProps => {
  const context = React.useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider')
  }
  return context
}

export default useAppContext
