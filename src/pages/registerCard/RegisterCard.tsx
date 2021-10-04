import WelcomeText from './WelcomeText'
import CardForm from './CardForm'

const user: User = {
  firstName: 'Luke',
  lastName: 'Agius'
}

const RegisterCard = () => {

  return (
    <>
      Register Card
      <WelcomeText  user={user}/>
      <CardForm />
    </>
  )
}

export default RegisterCard
