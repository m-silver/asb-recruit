import { render, fireEvent, screen, waitFor } from '@testing-library/react'

import CardForm from './CardForm'

describe('CardForm', () => {
  it('renders a card number field', () => {
    const { getByTestId } = render(<CardForm />)
    expect(getByTestId('cardNumber')).toBeInTheDocument()
  })

  it('renders a cvc field', () => {
    const { getByTestId } = render(<CardForm />)
    expect(getByTestId('cvc')).toBeInTheDocument()
  })

  it('renders an expiry field', () => {
    const { getByTestId } = render(<CardForm />)
    expect(getByTestId('expiry')).toBeInTheDocument()
  })

  it('validates the credit card number', async () => {
    const { getByTestId } = render(<CardForm />)
    const input = getByTestId('cardNumber')

    fireEvent.change(input, { 
      target: { 
        value: '' 
      } 
    })
    fireEvent.blur(input)
    expect(await screen.findByText(/Card number is required./i)).toBeInTheDocument()

    fireEvent.change(input, { 
      target: { 
        value: '1234' 
      } 
    })
    fireEvent.blur(input)
    expect(await screen.findByText(/Card number must be 16 digits./i)).toBeInTheDocument()
  })

  it('validates the CVC number', async () => {
    const { getByTestId } = render(<CardForm />)
    const input = getByTestId('cvc')

    fireEvent.change(input, { 
      target: { 
        value: '' 
      } 
    })
    fireEvent.blur(input)
    expect(await screen.findByText(/CVC is required./i)).toBeInTheDocument()

    fireEvent.change(input, { 
      target: { 
        value: '12' 
      } 
    })
    fireEvent.blur(input)
    expect(await screen.findByText(/CVC must be 3 digits./i)).toBeInTheDocument()
  })

  it('valudates the expiry date', async () => {
    const { getByTestId } = render(<CardForm />)
    const input = getByTestId('expiry')

    fireEvent.change(input, { 
      target: { 
        value: '' 
      } 
    })
    fireEvent.blur(input)
    expect(await screen.findByText(/Expiry date is required./i)).toBeInTheDocument()

    fireEvent.change(input, { 
      target: { 
        value: '12' 
      } 
    })
    fireEvent.blur(input)
    expect(await screen.findByText(/Expiry date must be MM\/YY./i)).toBeInTheDocument()
  })
  
  it('does not submit the form if validation is not successful', async () => {
    console.log = jest.fn()
    const { getByTestId } = render(<CardForm />)
    const cardNumberInput = getByTestId('cardNumber')
    const cvcInput = getByTestId('cvc')
    const expiryInput = getByTestId('expiry')
    const submit = screen.getByRole('button', { name: /register your card/i })

    fireEvent.click(submit)
    await waitFor(() => expect(console.log).toHaveBeenLastCalledWith('Form submission unsuccessful, check required fields.'))

    fireEvent.change(cardNumberInput, {
      target: {
        value: '1234123412341234'
      }
    })
    fireEvent.change(cvcInput, {
      target: {
        value: '123'
      }
    })
    fireEvent.change(expiryInput, {
      target: {
        value: '1008'
      }
    })

    await waitFor(() => fireEvent.click(submit))
    await waitFor(() => expect(console.log).toHaveBeenLastCalledWith('Form submission unsuccessful, check required fields.'))
  })

  it('submits the form if validation is successful', async () => {
    console.log = jest.fn()
    const { getByTestId } = render(<CardForm />)
    const cardNumberInput = getByTestId('cardNumber')
    const cvcInput = getByTestId('cvc')
    const expiryInput = getByTestId('expiry')
    const submit = screen.getByRole('button', { name: /register your card/i })

    fireEvent.change(cardNumberInput, {
      target: {
        value: '1234123412341234'
      }
    })
    fireEvent.change(cvcInput, {
      target: {
        value: '123'
      }
    })
    fireEvent.change(expiryInput, {
      target: {
        value: '1129'
      }
    })

    const body = {
      cardNumber: '1234123412341234',
      cvc: '123',
      expiry: '2029-10-31T11:00:00.000Z'
    }

    fireEvent.click(submit)
    await waitFor(() => expect(console.log).toHaveBeenCalledWith(body))
  })
})