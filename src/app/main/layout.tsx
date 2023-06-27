import { Sidebar } from './components/sidebar/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function layout({ children }: LayoutProps) {
  return (
    // @ts-expect-error Server Component
    <Sidebar>{children}</Sidebar>
  )
}
