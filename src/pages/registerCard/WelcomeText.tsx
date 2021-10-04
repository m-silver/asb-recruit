import { Typography } from '@mui/material'

type WelcomeTextProps = {
  user: User
}

const WelcomeText = ({user}: WelcomeTextProps) => {
  return (
    <Typography className='welcomeText' variant='h4'>
      Welcome {user.firstName}
    </Typography>
  )
}

export default WelcomeText
