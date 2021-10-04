import React, {useState, createContext} from 'react'

type MenuOpenContextType = {
  menuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuOpenContext = createContext<MenuOpenContextType>(undefined!)

export const MenuOpenProvider: React.FunctionComponent = ({children}) => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<MenuOpenContext.Provider value={{menuOpen, setMenuOpen}}>
			{children}
		</MenuOpenContext.Provider>
	)
} 
