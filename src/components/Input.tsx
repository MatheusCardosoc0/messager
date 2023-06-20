'use client'

import clsx from 'clsx'
import { HTMLInputTypeAttribute, useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

interface InputProps {
  label: string
  errors: FieldErrors
  register: UseFormRegister<{
    password: string
    email: string
    name?: string | undefined
  }>
  type?: HTMLInputTypeAttribute
  disabled?: boolean
  id: 'name' | 'email' | 'password'
  required?: boolean
}

const Input: React.FC<InputProps> = ({
  errors,
  label,
  register,
  type = 'text',
  disabled,
  id,
  required,
}) => {
  const [typeInput, setTypeInput] = useState(type)

  return (
    <div
      className="
      flex
      w-full
      flex-col
      gap-1
    "
    >
      {/* <span
        className="
          trasition
          animate-alert
          text-sm
          font-semibold
          text-orange-600
          duration-1000
        "
      >
        {errors[id]?.message}
      </span> */}

      <div className="relative w-full">
        <input
          {...register(id, { required })}
          disabled={disabled}
          type={typeInput}
          className={clsx(
            `
            peer
            w-full
            rounded-lg
            bg-black
            px-2
            pb-2
            pt-8
            text-white
            outline-none
            ring-4
            focus:ring-amber-400`,
            errors[id] && 'focus:ring-rose-500',
            disabled && 'cursor-default opacity-50',
          )}
        />

        <label
          htmlFor={id}
          className={`
            absolute
            left-2
            top-6
            origin-[0]
            -translate-y-1/2
            font-bold
            text-neutral-200
            transition
            duration-150
            peer-placeholder-shown:translate-y-12
            peer-placeholder-shown:scale-100
            peer-focus:top-2
            peer-focus:scale-75
          `}
        >
          {label}
        </label>

        {type === 'password' && (
          <span
            onClick={() =>
              setTypeInput((prev) =>
                prev === 'password' ? 'text' : 'password',
              )
            }
            className="
              absolute
              right-2
              top-2
              text-4xl
              text-white
            "
          >
            {typeInput === 'password' ? (
              <AiFillEyeInvisible />
            ) : (
              <AiFillEye className="text-white" />
            )}
          </span>
        )}
      </div>
    </div>
  )
}

export default Input
