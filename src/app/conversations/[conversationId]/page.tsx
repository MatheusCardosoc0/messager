import getConversationById from '@/actions/getConversationById'
import EmptyState from '@/components/EmptyState'
import Header from './components/Header'
import Body from './components/Body'
import Form from './components/Form'
import getMessages from '@/actions/getMessages'

interface IParams {
  conversationId: string
}

const ConversationId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId)

  // const messages = await fetch(
  //   `http://localhost:3000/api/messages/${params.conversationId}`,
  //   {
  //     next: {
  //       revalidate: 0,
  //     },
  //   },
  // )

  // const json = await messages.json()

  const messages = await getMessages(params.conversationId)

  if (!conversation) {
    return (
      <div className="lg:pl-88 h-full">
        <div className="flex h-full flex-col">
          <EmptyState />
        </div>
      </div>
    )
  }

  return (
    <div className="h-full lg:pl-80">
      <div className="flex h-full flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  )
}

export default ConversationId
