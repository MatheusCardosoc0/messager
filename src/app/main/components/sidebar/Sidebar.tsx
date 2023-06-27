import MobileFooter from './MobileFooter'
import DesktopSidebar from './DesktopSidebar'
import getCurrentUser from '@/actions/getCurrentUser'

interface sidebarProps {
  children: React.ReactNode
}

export async function Sidebar({ children }: sidebarProps) {
  const currentUser = await getCurrentUser()

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className="h-full lg:pl-20">{children}</main>
    </div>
  )
}
