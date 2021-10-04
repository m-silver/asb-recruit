type WelcomeTextProps = {
  user: User
}

const WelcomeText = ({ user }: WelcomeTextProps) => {
  return (
    <>
      Welcome {user.firstName}
    </>
  )
}

export default WelcomeText