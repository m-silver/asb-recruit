import { render, screen } from '@testing-library/react'

import WelcomeText from './WelcomeText'

describe('WelcomeText', () => {
  it('renders the users first name', () => {
    const user: User = {
      firstName: 'Sally',
      lastName: 'Johnson'
    }

    render(<WelcomeText user={user}/>)
    
    const element = screen.getByText(/welcome sally/i)
    expect(element).toBeInTheDocument()
  })
})
