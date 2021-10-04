import { Box, Divider } from '@mui/material'


import WelcomeText from './WelcomeText'
import CardForm from './CardForm'

const user: User = {
  firstName: 'Luke',
  lastName: 'Agius'
}

const RegisterCard = () => {

  return (
    <div className='registerCard'>
      <Box m={4}/>
      <WelcomeText user={user} />
      <Box m={4}/>
      <Divider variant='fullWidth'/>
      <Box m={4}/>
      <CardForm />
    </div>
  )
}

export default RegisterCard
