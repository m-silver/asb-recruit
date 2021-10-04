import { useContext } from 'react'

import RegisterCard from './pages/registerCard/RegisterCard'
import Menu from './pages/menu/Menu'
import { MenuOpenContext } from './context/MenuContext'

function App() {
  const { menuOpen } = useContext(MenuOpenContext)

  return (
    <div id="App">
      <RegisterCard />
      { menuOpen && <Menu /> }
    </div>
  )
}

export default App