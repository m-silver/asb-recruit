import { formatExpiryDate } from "./utils"

export const isValidStringNumber = (stringNumber: string): boolean => {
  return /^\d+$/.test(stringNumber)
}

export const isValidDate = (date: Date): boolean => {
  return date && Object.prototype.toString.call(date) === "[object Date]"
}

export const validateCardNumber = (cardNumber: string): string => {
  let error = ''
  if (!cardNumber) error = 'Card number is required.'
  else if (cardNumber.length !== 16) error = 'Card number must be 16 digits.'
  else if (!isValidStringNumber(cardNumber)) error = 'Card number must be a number.' 
  return error
}

export const validateCvc = (cvc: string): string => {
  let error = ''
  if (!cvc) error = 'CVC is required.'
  else if (cvc.length !== 3) error = 'CVC must be 3 digits.'
  else if (!isValidStringNumber(cvc)) error = 'CVC must be a number.'
  return error
}

export const validateExpiry = (expiry: string): string  => {
  const date = formatExpiryDate(expiry)
  const today = new Date()

  let error = ''
  if (!expiry) error = 'Expiry date is required.'
  else if (expiry.length < 4) error = 'Expiry date must be MM/YY.'
  else if (!isValidDate(date)) error = 'Expiry date must be a valid date.'
  else if (date < today) error = 'Expiry date must not be in the past.'
  return error
}