import AuthForm from './components/AuthForm'
import Logo from './components/Logo'

export default function Login() {
  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-cover"
      style={{
        backgroundImage: 'url(/background.jpeg)',
      }}
    >
      <Logo />

      <AuthForm />
    </div>
  )
}
