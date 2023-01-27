import { useState, useEffect } from "react";

function Counter() {

  const [count, setCount] = useState(0);
  const [product, setProduct] = useState('QUEIJO');

  useEffect(()=>{
      const add = 5;
      const soma = 1 + add;
      
      console.log(soma);
  });
  return (
  <div>
  Contagem do produto {product} no carrinho: {count}
    <div>
      <button onClick={() => setCount(count + 1)}>Adicionar</button>
    <button onClick={() => setCount(count - 1)}>Remover</button>
    <p>alterar produto:{""}</p> 
    <input type="text" onChange={(e) => setProduct(e.target.value)} />
    </div>
  </div>
)

}



export default Counter;