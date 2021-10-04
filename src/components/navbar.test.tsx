import { render, fireEvent, screen } from '@testing-library/react'

import Navbar from './Navbar'
import { MenuOpenProvider } from '../context/MenuContext'

describe('Navbar', () => {
  it('renders the Register Card title when the menu is not open', () => {
    render(
      <MenuOpenProvider>
        <Navbar />
      </MenuOpenProvider>
    )

    const element = screen.getByRole('banner')
    expect(element).toHaveTextContent(/register card/i)
  })

  it('renders the Menu title when the menu is open', () => {
    render(
      <MenuOpenProvider>
        <Navbar />
      </MenuOpenProvider>
    )
    
    const menuButton = screen.getByRole('button', { name: /menu/i })
    fireEvent.click(menuButton)
    const element = screen.getByRole('banner')
    expect(element).toHaveTextContent(/menu/i)
  })

  it('renders the Menu button when the menu is not open', () => {
    render(
      <MenuOpenProvider>
        <Navbar />
      </MenuOpenProvider>
    )

    const element = screen.getByRole('button', { name: /menu/i })
    expect(element).toBeInTheDocument()
  })

  it('renders the Back button when the menu is not open', () => {
    render(
      <MenuOpenProvider>
        <Navbar />
      </MenuOpenProvider>
    )

    const menuButton = screen.getByRole('button', { name: /menu/i })
    fireEvent.click(menuButton)
    const element = screen.getByRole('button', { name: /back/i })
    expect(element).toBeInTheDocument()
  })
})
