'use client'

import { useCallback, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useLoginFormState } from '@/context/useLoginFormState'
import AuthSocialButton from './AuthSocialButton'
import { BsGithub, BsGoogle } from 'react-icons/bs'

const schema = z.object({
  name: z.optional(z.string()),
  email: z.string().email('Insira um email valido'),
  password: z.string().min(8, 'Insira uma senha com mais de 8 caracteres'),
})
type FormProps = z.infer<typeof schema>

type Variants = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
  const [variant, setVariant] = useState<Variants>('LOGIN')
  const [isLoading, setIsLoading] = useState(false)

  const { isOpen } = useLoginFormState()

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER')
    } else {
      setVariant('LOGIN')
    }
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(schema),
    reValidateMode: 'onChange',
  })

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    setIsLoading(true)
    if (variant === 'REGISTER') {
      if (!data.name) {
        return alert('Insira um nome valido!')
      }
      // axios register
    }

    if (variant === 'LOGIN') {
      // nextAuth SignIn
    }
    setIsLoading(false)
  }

  const socialAction = (action: string) => {
    setIsLoading(true)

    // social signIn
  }

  if (isOpen === false) {
    return <div />
  }

  return (
    <div
      className="
        ANIMATION-FORM
        mt-4
        transition-all
        duration-100
        sm:mx-auto
        sm:w-full
        sm:max-w-md
      "
    >
      <div
        className="
          bg-white
          px-4
          py-8
          shadow
          sm:rounded-lg
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
                  border-gray-300
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
              onClick={() => socialAction('github')}
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
              className="text-xl text-neutral-800 underline hover:text-purple-700"
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
