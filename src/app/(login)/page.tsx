import AuthForm from './components/AuthForm'
import Logo from './components/Logo'

export default function Login() {
  return (
    <div className="BACKGROUND-ANIMATION flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <Logo />
      <AuthForm />
    </div>
  )
}
