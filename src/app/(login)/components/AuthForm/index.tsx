'use client'

import Input from '@/components/Input'
import Button from '@/components/Button'
import { useLoginFormState } from '@/context/useLoginFormState'
import AuthSocialButton from './AuthSocialButton'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { useFormFunctions } from './useFormFunctions'

const AuthForm = () => {
  const {
    errors,
    handleSubmit,
    isLoading,
    onSubmit,
    register,
    socialAction,
    toggleVariant,
    variant,
  } = useFormFunctions()

  const { isOpen } = useLoginFormState()

  if (isOpen === false) {
    return <div />
  }

  return (
    <div
      className="
        ANIMATION-FORM
        mt-4
        w-[90%]
        max-w-md
        transition-all
        duration-100
        sm:mx-auto
        sm:max-w-lg
      "
    >
      <div
        className="
          rounded-lg
          bg-white
          px-4
          py-8
          shadow
          sm:rounded-xl
          sm:px-10
        "
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input
              errors={errors}
              id="name"
              label="Nome"
              register={register}
              disabled={isLoading}
              required
              type="text"
            />
          )}

          <Input
            errors={errors}
            id="email"
            label="Email"
            register={register}
            disabled={isLoading}
            required
            type="text"
          />

          <Input
            errors={errors}
            id="password"
            label="Senha"
            register={register}
            disabled={isLoading}
            required
            type="password"
          />

          <Button fullWidth disabled={isLoading} type="submit">
            {variant === 'LOGIN' ? 'Entrar' : 'Cadastrar'}
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="
                absolute
                inset-0
                flex
                items-center
              "
            >
              <div
                className="
                  w-full
                  border-t
                  border-cyan-500
                "
              />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Ou continue com
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              Icon={BsGithub}
              onClick={() => socialAction('github')}
            />
            <AuthSocialButton
              Icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
          </div>

          <div
            className="
             mt-6
             flex
             justify-center
             gap-2
             text-neutral-700
           "
          >
            <span>
              {variant === 'LOGIN'
                ? 'Novo no ConnectStation?'
                : 'Entrar usando sua conta?'}
            </span>

            <button
              className="text-xl text-neutral-800 underline hover:text-amber-600"
              onClick={() => toggleVariant()}
            >
              {variant === 'LOGIN' ? 'SignIn!' : 'Login!'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
