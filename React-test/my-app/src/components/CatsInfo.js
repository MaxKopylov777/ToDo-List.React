
const CatsInfo = ({catsName, age, weight}) => {
    return(
        <div className='CatsInfoContainer'>Cats info there!
        <h1>{catsName}</h1>
        <h1>{age}</h1>
        <h2>{weight}</h2>
        </div>
        
    )
}

export default CatsInfo;