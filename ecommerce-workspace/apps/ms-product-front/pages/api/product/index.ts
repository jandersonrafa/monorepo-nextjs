import type { NextApiRequest, NextApiResponse } from 'next'

const Product = (req: NextApiRequest, res: NextApiResponse) => {
  //  fetch(`http://localhost:4200/api/product`, {
   fetch(`http://localhost:2010/product/save`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      txName: 'teste'
    }),
  }).then(resp => {
    if (resp.status === 200) {
      res.status(200).json({ status: 'Sucesso' })
    } else {
      res.status(400).json({ status: 'Erro' })


      // setError('Error: ' + res.status + ' :: '
      //   + res.statusText);
    }
  });
}
// res.status(200).json([{ productId: '22', txName:'Smart' }])

export default  Product
