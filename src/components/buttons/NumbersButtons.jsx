
function NumberButtons (props){
    const numbers = [1,2,3,4,5,6,7,8,9,0]
    const buttons = numbers.map(
        (item,idx) => 
        <button key={idx} className='number-button' type="sumit" onClick={props.push} value={item}>{item}</button>
        
    )
    return (
        <>{buttons}</>
    );
}
export default NumberButtons;