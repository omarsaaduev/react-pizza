import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

 const FullPizza: React.FC = () =>  {
    const {id} = useParams()
    const [pizza, setPizza] = useState<{
      imageUrl: string,
      name: string,
      price: number,

    }>()
    
    
    useEffect(() => {
        async function fetchPizza() {
            const {data} = await axios.get(`https://6568bb189927836bd97556f7.mockapi.io/items/` + id)
            setPizza(data)
        }
        fetchPizza()
    }, [])

    if (!pizza){
        return <h3>Загрузка...</h3>
    }

  return (
    <div>
      <img src={pizza.imageUrl} alt=''/>
      <h1>{pizza.name}</h1>
      <p>{pizza.price}</p>
    </div>
  )
}

export default FullPizza;
