'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { HiChat, HiOutlineLogout, HiUsers } from 'react-icons/hi'
import {} from 'react-icons/hi2'
import useConversation from './useConversation'
import { signOut } from 'next-auth/react'

const useRoutes = () => {
  const pathname = usePathname()
  const { conversationId } = useConversation()

  const routes = useMemo(
    () => [
      {
        label: 'Chat',
        href: '/conversations',
        icon: HiChat,
        active: pathname === '/conversations' || !!conversationId,
      },
      {
        label: 'Main',
        href: '/main',
        icon: HiUsers,
        active: pathname === '/main',
      },
      {
        label: 'Logout',
        href: '#',
        icon: HiOutlineLogout,
        onClick: () => signOut(),
      },
    ],
    [pathname, conversationId],
  )

  return routes
}

export default useRoutes
