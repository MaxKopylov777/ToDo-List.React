import MaxInfo from './MaxInfo';
import './styles/Block.css';

function InnerBlock2({Name, Age,Country,Adress,Game}){


    return (
        <div className="Inner-block2">
            <h2> Inner-Block2</h2>
            <h2>{Name}</h2>
            <h2>{Age}</h2>
            <MaxInfo 
            Name = {Name}
            Age = {Age}
            Country = {Country}
            Adress = {Adress}
            Game = {Game}/>
        
        </div>

    )
}

export default InnerBlock2;