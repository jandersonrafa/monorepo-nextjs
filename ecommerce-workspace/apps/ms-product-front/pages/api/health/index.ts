import type { NextApiRequest, NextApiResponse } from 'next'

const Handler = (req: NextApiRequest, res: NextApiResponse) =>
  res.status(200).json({ status: 'UP' })

export default Handler
