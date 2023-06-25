import { useCallback, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { signIn } from 'next-auth/react'

const schema = z.object({
  name: z.optional(z.string()),
  email: z.string().email('Insira um email valido'),
  password: z.string().min(8, 'Insira uma senha com mais de 8 caracteres'),
})
type FormProps = z.infer<typeof schema>

type Variants = 'LOGIN' | 'REGISTER'

export function useFormFunctions() {
  const [variant, setVariant] = useState<Variants>('LOGIN')
  const [isLoading, setIsLoading] = useState(false)

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
        setIsLoading(false)
        return alert('Insira um nome valido!')
      }
      axios
        .post('/api/register', data)
        .catch(() => toast.error('Ocorreu um erro'))
        .finally(() => setIsLoading(false))
    }

    if (variant === 'LOGIN') {
      // nextAuth SignIn

      signIn('credentials', {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error('Credenciais invalidas')
          }

          if (callback?.ok && !callback.error) {
            toast.success('logado com sucesso')
          }
        })
        .finally(() => setIsLoading(false))
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true)

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Credenciais invalidas')
        }

        if (callback?.ok && !callback.error) {
          toast.success('logado com sucesso')
        }
      })
      .finally(() => setIsLoading(false))
  }

  return {
    socialAction,
    onSubmit,
    register,
    handleSubmit,
    isLoading,
    errors,
    toggleVariant,
    variant,
  }
}
