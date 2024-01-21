import { useEffect } from 'react';
import CatsInfo from './CatsInfo';
import './styles/Block.css';

function InnerBlock1({catsName, age, weight,}){


    
    

    return (
        <div className="Inner-block">
            <h1>InnerBlock1</h1>
            
            <CatsInfo 
            catsName = {catsName}
            age = {age}
            weight = {weight}
            />
        </div>

    )
}

export default InnerBlock1;