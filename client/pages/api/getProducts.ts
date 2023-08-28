// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../../server/prisma/client"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Get prisma to fetch the posts ?????
    const data = await prisma.post.findMany()
    return res.status(200).json(data)
    // if (req.method === "GET") {
    //   try {
        
    //   } catch (error) {
        
    //   }
    // }
  } catch (error) {
    return res.status(500).json(error)
  }
}
