import { Sidebar } from '../main/components/sidebar/Sidebar'
import ConversationList from './components/ConversationList'

export default function Conversationlayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // @ts-expect-error
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={[]} />
        {children}
      </div>
    </Sidebar>
  )
}
