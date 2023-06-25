import { IconType } from 'react-icons'

interface AuthSocialButtonProps {
  Icon: IconType
  onClick: () => void
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        w-full
        justify-center
        rounded-md
        bg-black
        px-4
        py-2
        text-2xl
        text-white
        shadow-sm
        ring-1
        ring-inset
        ring-gray-300
        transition-all
        duration-500
        hover:bg-sky-500
        hover:text-black
        focus:outline-offset-0
      "
    >
      <Icon />
    </button>
  )
}

export default AuthSocialButton
