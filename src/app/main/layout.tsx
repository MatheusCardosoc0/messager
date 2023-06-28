import getUsers from '@/actions/getUsers'
import UserList from './components/UserList'
import { Sidebar } from './components/sidebar/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default async function MainLayout({ children }: LayoutProps) {
  const users = await getUsers()

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <UserList users={users!} />
      {children}
    </Sidebar>
  )
}
