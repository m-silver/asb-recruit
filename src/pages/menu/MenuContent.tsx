import {
  MenuList,
  MenuItem,
  Typography
} from '@mui/material'

const MenuContent = () => {
  const menuItems = [
    'Change Password',
    'Card PIN',
    'Set Netcode Limit',
    'Manage Devices',
    'Logout'
  ]

  return (
    <MenuList>
      {
        menuItems.map(menuItem => (
          <MenuItem key={menuItem}>
            <Typography variant='h4' m={'1em'}>{menuItem}</Typography>
          </MenuItem>
        ))
      }
    </MenuList>
  )
}

export default MenuContent
