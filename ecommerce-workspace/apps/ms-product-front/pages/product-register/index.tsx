import React from 'react';
import PartPopper from '../../components/party-popper/party-popper';
import { MsCommonLib } from '@ecommerce-workspace/ms-common-lib';
import { CommonHello } from '@ecommerce-workspace/ms-common-lib';




const ProductRegister = ({ products }) => {

  const handleSubmit = async (e) => {
    console.log("teste")
    e.preventDefault();
    await fetch(`/api/product`, {
    // await fetch(`http://localhost:2010/product/save`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON .stringify({
          txName: 'teste'
        }),
    }).then(res => {
        if(res.status === 200){
            // setSaved(true);
        }else{
            // setError('Error: ' + res.status + ' :: '
            //   + res.statusText);
        }
    });
  }

  const courseList = products.map(product => {
    return <tr key={product.productId}>
      <td style={{ whiteSpace: 'nowrap' }}>{product.productId}</td>
      <td>{product.txName}</td>
    </tr>
  });

  return (
    <div >
      {/* <Head>
        <title>Course Service Example <PartPopper /></title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <div>
        <h1>Courses  <PartPopper /></h1>
        <h1>Criar novo curso</h1>
        <MsCommonLib/>
        <CommonHello/>
        <form onSubmit={handleSubmit}>
          <label>
            Id:
            <input id="productId" name="productId" type="text" autoComplete="name" required />
            Nome:
            <input id="txName" name="txName" type="text" autoComplete="name" required />
          </label>
          <input type="submit" value="Enviar" />
        </form>
        <table>
          <thead>
            <tr>
              <th >Id</th>
              <th >Nome</th>
            </tr>
          </thead>
          <tbody>
            {courseList}
          </tbody>

        </table>
      </div>
    </div>
  );
};


export const getServerSideProps = async () => {
  console.log("Fetch data...");
  const res = await fetch('http://localhost:2010/product/info');
  const json = await res.json();
  return {
    props: {
      products: json
    }
  }
};

export default ProductRegister;


