import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server'

interface IParams {
  conversationId: string
}

export async function GET(request: Request, { params }: { params: IParams }) {
  console.log(params)
  try {
    const messages = await prisma.message.findMany({
      where: {
        id: params.conversationId,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    })

    return NextResponse.json(messages)
  } catch (error) {
    console.log(error)
  }
}
