import { useState } from 'react'
import {
  Button,
	TextField,
  Grid
} from '@mui/material'


const CardForm = () => {
  const [cardNumber, setCardNumber] = useState<string>('')
  const [cvc, setCvc] = useState<string>('')
  const [expiry, setExpiry] = useState<string>('')

  const submitHandler = () => {
    console.log('Submitted')
  }

  return (
    <form className='cardForm' onSubmit={submitHandler}>
      <Grid container direction='column' spacing={5}>
        <Grid item>
          <TextField
            name='cardNumber'
            label='Card Number'
            type='text'
            placeholder='1234 1234 1234 1234'
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value)}
            required
            autoFocus
            fullWidth
          />
        </Grid>

        <Grid container item direction='row' spacing={3}>
          <Grid item>
            <TextField 

              name='cvc'
              label='CVC'
              type='text'
              placeholder='123'
              value={cvc}
              onChange={e => setCvc(e.target.value)}
              required
            />
          </Grid>

          <Grid item>
            <TextField 
              name='expiry'
              label='Expiry Date'
              type='text'
              placeholder='MM/YY'
              value={expiry}
              onChange={e => setExpiry(e.target.value)}
              required
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