import { useContext } from 'react'
import { Backdrop } from '@mui/material'

import MenuContent from "./MenuContent"
import { MenuOpenContext } from '../../context/MenuContext'

const Menu = () => {
  const {menuOpen} = useContext(MenuOpenContext)
  
  return (
    <Backdrop open={menuOpen}>
      <MenuContent />
    </Backdrop>
  )
}

export default Menu
