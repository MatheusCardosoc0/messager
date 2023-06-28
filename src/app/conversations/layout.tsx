import getConversations from '@/actions/getConversations'
import { Sidebar } from '../main/components/sidebar/Sidebar'
import ConversationList from './components/ConversationList'

export default async function Conversationlayout({
  children,
}: {
  children: React.ReactNode
}) {
  const conversations = await getConversations()

  return (
    // @ts-expect-error
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  )
}
