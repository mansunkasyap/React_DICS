import React from 'react'
import themeContext from './themeContext'
const ThemeContextProvider = ({children}) => {
    //define all states here to 
    const [theme, setTheme] = React.useState() 
  return (
    <themeContext.Provider value={{theme, setTheme}}>
        {children}
    </themeContext.Provider>
  )
}

export default ThemeContextProvider