
function NumberButtons (props){
    const numbers = [7,8,9,4,5,6,1,2,3,".",0]
    const buttons = numbers.map(
        (item,idx) => 
        <button key={idx} className='number-button' type="sumit" onClick={props.push} value={item}>{item}</button>
        
    )
    return (
        <>{buttons}</>
    );
}
export default NumberButtons;