'use client'

import useConversation from '@/hooks/useConversation'
import useRoutes from '@/hooks/useRoutes'
import MobileItem from './MobileItem'

const MobileFooter = () => {
  const routes = useRoutes()
  const { isOpen } = useConversation()

  if (isOpen) {
    return <div />
  }

  return (
    <div
      className="
        fixed
        bottom-0
        z-40
        flex
        w-full
        items-center
        justify-between
        border-t-[1px]
        bg-white
        lg:hidden
      "
    >
      {routes.map((item) => (
        <MobileItem
          key={item.label}
          href={item.href}
          icon={item.icon}
          active={item.active}
          label={item.label}
          onClick={item.onClick}
        />
      ))}
    </div>
  )
}

export default MobileFooter
