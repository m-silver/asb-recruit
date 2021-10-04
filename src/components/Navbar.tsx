import { useContext } from "react"
import { Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MenuIcon from '@mui/icons-material/Menu'

import Logo from '../assets/logo-yellow.png'
import { MenuOpenContext } from '../context/MenuContext'

const Navbar = () => {
  const { menuOpen, setMenuOpen } = useContext(MenuOpenContext)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const buttonIcon = menuOpen ? <ArrowBackIcon /> : <MenuIcon />
  const buttonText = menuOpen ? 'Back' : 'Menu'
  const title = menuOpen ? 'Menu' : 'Register Card'

  return (
    <div className='navbar'>
      <Button startIcon={buttonIcon} onClick={toggleMenu}>{buttonText}</Button>
      <header>{title}</header>
      <img src={Logo} width={'60px'} alt='logo'/>
    </div>
  )
}

export default Navbar
