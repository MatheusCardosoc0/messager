'use client'

import useConversation from '@/hooks/useConversation'
import EmptyState from '../main/components/EmptyState'
import clsx from 'clsx'

export default function HomeConversation() {
  const { isOpen } = useConversation()

  return (
    <div
      className={clsx(
        `
        h-full lg:block lg:pl-80`,
        isOpen ? 'block' : 'hidden',
      )}
    >
      <EmptyState />
    </div>
  )
}
