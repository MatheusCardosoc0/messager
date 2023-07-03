'use client'

import useConversation from '@/hooks/useConversation'
import axios from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { HiPhoto } from 'react-icons/hi2'
import { z } from 'zod'
import MessageInput from './MessageInput'
import { HiPaperAirplane } from 'react-icons/hi'

const Schema = z.object({
  message: z.string(),
})

type FormProps = z.infer<typeof Schema>

const Form = () => {
  const { conversationId } = useConversation()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      message: '',
    },
  })

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    console.log({ ...data, conversationId })
    setValue('message', '', { shouldValidate: true })
    axios.post('/api/messages', {
      ...data,
      conversationId,
    })
  }

  return (
    <div
      className="
        fixed
        bottom-0
        flex
        w-full
        items-center
        gap-2
        border-t
        bg-white
        px-4
        py-4
        lg:gap-4
      "
    >
      <HiPhoto size={30} className="text-sky-500" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full items-center gap-2 lg:gap-4"
      >
        <MessageInput
          id="message"
          errors={errors}
          required
          placeholder="Escreva uma mensagem"
          register={register}
        />
        <button
          type="submit"
          className="
            cursor-pointer
            rounded-full
            bg-sky-500
            p-2
            transition
            hover:bg-sky-600
          "
        >
          <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </div>
  )
}

export default Form
