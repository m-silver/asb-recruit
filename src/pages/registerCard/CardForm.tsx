import { useState } from 'react'
import NumberFormat from 'react-number-format'
import {
  Button,
	TextField,
  Grid
} from '@mui/material'

import { 
  validateCardNumber,
  validateCvc,
  validateExpiry
 } from '../../utils/validate'
 import { formatExpiryDate } from '../../utils/utils'

const CardForm = () => {
  const [cardNumber, setCardNumber] = useState<string>('')
  const [cardNumberError, setCardNumberError] = useState<string>('')
  const [cvc, setCvc] = useState<string>('')
  const [cvcError, setCvcError] = useState<string>('')
  const [expiry, setExpiry] = useState<string>('')
  const [expiryError, setExpiryError] = useState<string>('')

  const cardNumberBlur = () => {
    setCardNumberError('')
    const error = validateCardNumber(cardNumber)
    if (error) setCardNumberError(error)
  }

  const cvcBlur = () => {
    setCvcError('')
    const error = validateCvc(cvc)
    if (error) setCvcError(error)
  }

  const expiryBlur = () => {
    setExpiryError('')
    const error = validateExpiry(expiry)
    if (error) setExpiryError(error)
  }

  const registerCard = (body: RegisterCardBody) => {
    console.log(body)
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    cardNumberBlur()
    cvcBlur()
    expiryBlur()
    if (cardNumber && cvc && expiry && !cardNumberError && !cvcError && !expiryError) {
      const body = {
        cardNumber,
        cvc,
        expiry: formatExpiryDate(expiry).toISOString()
      }
      registerCard(body)
    } 
    else console.log('Form submission unsuccessful, check required fields.')
  }

  return (
    <form className='cardForm' onSubmit={submitHandler}>
      <Grid container direction='column' spacing={5}>
        <Grid item>
          <NumberFormat
            format='#### #### #### ####'
            customInput={TextField}
            name='cardNumber'
            label='Card Number'
            type='text'
            placeholder='1234 1234 1234 1234'
            value={cardNumber}
            onValueChange={({value}) => {
              setCardNumber(value)
            }}
            required
            autoFocus
            fullWidth
            onBlur={cardNumberBlur}
            error={cardNumberError ? true : false}
            helperText={cardNumberError}
            inputProps={{
              'data-testid': 'cardNumber'
            }}
          />
        </Grid>

        <Grid container item direction='row' spacing={3}>
          <Grid item>
            <NumberFormat 
              format='###'
              customInput={TextField}
              name='cvc'
              label='CVC'
              type='text'
              placeholder='123'
              value={cvc}
              onValueChange={({value}) => {
                setCvc(value)
              }}
              required
              onBlur={cvcBlur}
              error={cvcError ? true : false}
              helperText={cvcError}
              inputProps={{
                'data-testid': 'cvc'
              }}
            />
          </Grid>

          <Grid item>
            <NumberFormat 
              format='##/##'
              customInput={TextField}
              name='expiry'
              label='Expiry Date'
              type='text'
              placeholder='MM/YY'
              value={expiry}
              onValueChange={({value}) => {
                setExpiry(value)
              }}
              required
              onBlur={expiryBlur}
              error={expiryError ? true : false}
              helperText={expiryError}
              inputProps={{
                'data-testid': 'expiry'
              }}
            />
          </Grid>
        </Grid>

        <Grid item>    
          <Button
            type='submit' 
            variant='outlined'>
            Register Your Card
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default CardForm