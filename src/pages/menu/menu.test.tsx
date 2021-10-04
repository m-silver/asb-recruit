import { render, fireEvent, screen } from '@testing-library/react'

import App from '../../App'
import MenuContent from './MenuContent'
import { MenuOpenProvider } from '../../context/MenuContext'


describe('Menu', () => {
  it('renders the menu links', () => {
    render(<MenuContent />)

    const element = screen.getByText('Change Password')
    expect(element).toBeInTheDocument()
  })

  it('opens when the menu button is clicked', () => {
    render(
      <MenuOpenProvider>
        <App />
      </MenuOpenProvider>
    )
    
    const menuButton = screen.getByRole('button', { name: /menu/i })
    fireEvent.click(menuButton)
    const element = screen.getByText('Change Password')
    expect(element).toBeInTheDocument()
  })

  it('closes when the menu button is clicked', () => {
    render(
      <MenuOpenProvider>
        <App />
      </MenuOpenProvider>
    )

    const menuButton = screen.getByRole('button', { name: /menu/i })
    fireEvent.click(menuButton)
    const element = screen.getByText('Change Password')
    expect(element).toBeInTheDocument()

    const backButton = screen.getByRole('button', { name: /back/i })
    fireEvent.click(backButton)
    expect(screen.queryByText(/change password/i)).not.toBeInTheDocument()
  })
})
