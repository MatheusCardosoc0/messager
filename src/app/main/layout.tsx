import Navbar from '@/components/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

export default function layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
