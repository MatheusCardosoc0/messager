'use client'

import { useMemo } from 'react'
import { useParams } from 'next/navigation'

interface QuizParams {
  conversationId?: string
}

const useConversation = () => {
  const params = useParams() as unknown as QuizParams

  const conversationId = useMemo(() => {
    if (!params?.conversationId) {
      return ''
    }

    return params?.conversationId
  }, [params?.conversationId])

  const isOpen = useMemo(() => !!conversationId, [conversationId])

  return useMemo(
    () => ({
      isOpen,
      conversationId,
    }),
    [conversationId, isOpen],
  )
}

export default useConversation
