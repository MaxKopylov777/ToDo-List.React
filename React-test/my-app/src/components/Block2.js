
import { useEffect, useState } from 'react';
import Country from './Country';
import Continent from './Continent';
import './styles/Block.css';

    
const Block2 = () => {

let coutries = ['Russia', 'USA', 'Belarus', 'India', 'Kazahstan']
let continent = ['Europa','Afrika','Asia','Amerika','Australia']

const [currentYear, setCurrentYear] = useState(2023)

    useEffect(() => {console.log('Hello from Basket222!') }, [])
    useEffect(() => {console.log('Прошел еще Год!') }, [currentYear])


    const nextYear = () => {
        setCurrentYear(currentYear+1)
    } 

    return (
        <div className="Block2-color Container">
            <div>
                {coutries.map(item => <Country item={item}/>)}
            </div>
            <div>
                {continent.map(item => <Continent item={item}/>)}
            </div>

        { console.log('Hello from block222') }

        <h1>Hello from Block2</h1>

        <h2>Текущий год:{currentYear}</h2>

        <button 
            className='Btn-add'
            onClick = {nextYear}
            >Добавить товар в карзину</button>
        
        </div>
    )
}
export default Block2;
