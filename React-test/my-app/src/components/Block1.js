
import { useEffect, useState }  from 'react'
import InnerBlock1 from './InnerBlock1';
import './styles/Block.css';



function Block1() {
    
    console.log('i am in Block1')

    const [basketCount, setBasketCount] = useState(0)

   
    useEffect(() => {console.log('Hello from Basket !') }, [])


    const addToBasketCount = () => {
        setBasketCount(basketCount+1)

    }

    let catsName = 'Ruby'
    let weight = '15kg'

    return (
        <div className="Block1-color Container">

            {console.log('Hello from Block1 Render')}

            <h1>Hello from Block1</h1>
            <h2>Количество товаров:{basketCount}</h2>
            
           
            <InnerBlock1 
            catsName={catsName}
            age={9}
            weight={weight}
           
            />

             
            <button 
            className='Btn-add'
            onClick = {addToBasketCount}
            >Добавить товар в карзину</button> 

        </div>

    )
}

export default Block1;