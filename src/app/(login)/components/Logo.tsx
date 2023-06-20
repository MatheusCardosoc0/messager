'use client'

import { useLoginFormState } from '@/context/useLoginFormState'
import clsx from 'clsx'
import Image from 'next/image'

const Logo = () => {
  const { isOpen, setIsOpen } = useLoginFormState()

  return (
    <button
      className="
        flex
        flex-col
        items-center
        justify-center
      "
      onClick={() => setIsOpen(!isOpen)}
    >
      <Image
        src={'/Logo.png'}
        width={520}
        height={420}
        alt="logo"
        className={clsx(
          `
          h-[300px]
          w-[300px]
          cursor-pointer
          rounded-full
          drop-shadow-md
        `,
          isOpen && 'h-[100px] w-[100px]',
          !isOpen && 'ANIMATION-PULSE',
        )}
      />

      {!isOpen && (
        <h2 className="text-3xl font-black text-white drop-shadow-[0px_0px_8px_#000000]">
          Entre no ConnectStation!
        </h2>
      )}
    </button>
  )
}

export default Logo
