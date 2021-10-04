import {
  isValidDate, 
  isValidStringNumber, 
  validateCardNumber, 
  validateCvc, 
  validateExpiry} from './validate'

describe('isValidStringNumber', () => {
  it('returns true if given only string numbers', () => {
    const stringNumber = '123'
    const isValid = isValidStringNumber(stringNumber)
    expect(isValid).toBeTruthy()
  })

  it('returns false if given any letters', () => {
    const stringNumber = 'one'
    const isValid = isValidStringNumber(stringNumber)
    expect(isValid).toBeFalsy()
  })

  it('returns false if given any white space', () => {
    const stringNumber = '1 2 3'
    const isValid = isValidStringNumber(stringNumber)
    expect(isValid).toBeFalsy()
  })

  it('returns false if given any special characters', () => {
    const stringNumber = '12$'
    const isValid = isValidStringNumber(stringNumber)
    expect(isValid).toBeFalsy()
  })
})

describe('isValidDate', () => {
  it('returns true if given a date object', () => {
    const date = new Date()
    const isValid = isValidDate(date)
    expect(isValid).toBeTruthy()
  })

  it('returns false if given a string date', () => {
    const date = new Date().toDateString()
    const isValid = isValidDate(date as unknown as Date)
    expect(isValid).toBeFalsy()
  })
})

describe('validateCardNumber', () => {
  it('returns no error if given a 16 digit string number', () => {
    const cardNumber = '1234123412341234'
    const error = validateCardNumber(cardNumber)
    expect(error).toBe('')
  })

  it('returns "Card number is required" if given no input', () => {
    const cardNumber = ''
    const error = validateCardNumber(cardNumber)
    expect(error).toBe('Card number is required.')
  })

  it('returns "Card number must be 16 digits." if given less than 16 digits', () => {
    const cardNumber = '123'
    const error = validateCardNumber(cardNumber)
    expect(error).toBe('Card number must be 16 digits.')
  })

  it('returns "Card number must be 16 digits." if given more than 16 digits', () => {
    const cardNumber = '12341234123412341234'
    const error = validateCardNumber(cardNumber)
    expect(error).toBe('Card number must be 16 digits.')
  })

  it('returns "Card number must be a number." if given any letters', () => {
    const cardNumber = 'x234123412341234'
    const error = validateCardNumber(cardNumber)
    expect(error).toBe('Card number must be a number.')
  })

  it('returns "Card number must be a number." if given any special characters', () => {
    const cardNumber = '$234123412341234'
    const error = validateCardNumber(cardNumber)
    expect(error).toBe('Card number must be a number.')
  })

  it('returns "Card number must be a number." if given any white space', () => {
    const cardNumber = ' 234123412341234'
    const error = validateCardNumber(cardNumber)
    expect(error).toBe('Card number must be a number.')
  })
})

describe('validateCvc', () => {
  it('returns no error if given a 3 digit string number', () => {
    const cvc = '123'
    const error = validateCvc(cvc)
    expect(error).toBe('')
  })

  it('returns "CVC is required." if given no input', () => {
    const cvc = ''
    const error = validateCvc(cvc)
    expect(error).toBe('CVC is required.')
  })

  it('returns "CVC must be 3 digits." if given less than 3 digits', () => {
    const cvc = '12'
    const error = validateCvc(cvc)
    expect(error).toBe('CVC must be 3 digits.')
  })

  it('returns "CVC must be 3 digits." if given more than 3 digits', () => {
    const cvc = '1234'
    const error = validateCvc(cvc)
    expect(error).toBe('CVC must be 3 digits.')
  })

  it('returns "CVC must be a number." if given any letters', () => {
    const cvc = 'x23'
    const error = validateCvc(cvc)
    expect(error).toBe('CVC must be a number.')
  })

  it('returns "CVC must be a number." if given any special characters', () => {
    const cvc = '$23'
    const error = validateCvc(cvc)
    expect(error).toBe('CVC must be a number.')
  })

  it('returns "CVC must be a number." if given any white space', () => {
    const cvc = ' 23'
    const error = validateCvc(cvc)
    expect(error).toBe('CVC must be a number.')
  })
})

describe('validateExpiry', () => {
  it('returns no error if given a valid date in the future', () => {
    const expiry = '1299' 
    const error = validateExpiry(expiry)
    expect(error).toBe('')
  })

  it('returns "Expiry date is required." if given no input', () => {
    const expiry = ''
    const error = validateExpiry(expiry)
    expect(error).toBe('Expiry date is required.')
  })

  it('returns "Expiry date must be MM/YY." if given less than 4 digits', () => {
    const expiry = '12'
    const error = validateExpiry(expiry)
    expect(error).toBe('Expiry date must be MM/YY.')
  })

  it('returns "Expiry date must not be in the past." if given a date older than the current day', () => {
    const expiry = '0120'
    const error = validateExpiry(expiry)
    expect(error).toBe('Expiry date must not be in the past.')
  })
})